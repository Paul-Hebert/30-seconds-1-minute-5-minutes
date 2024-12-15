import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { useFonts, RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono";
import Subhead from "./Subhead";

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

type TimerProps = {
  count: number;
  onFinished: () => void;
  subhead: string;
  helpText: string;
};

export default function Timer({
  count,
  onFinished,
  subhead,
  helpText,
}: TimerProps) {
  const [currentTime, setCurrentTime] = useState(count);
  const [isRunning, setIsRunning] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [loaded] = useFonts({
    RobotoMono_700Bold,
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/timer-end.mp3"),
      { volume: 1 }
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(async () => {
        if (currentTime <= 1) {
          setIsRunning(false);
          await playSound();
          onFinished();
          clearInterval(interval);
        }

        const newTime = currentTime - 1;

        setCurrentTime(newTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, currentTime]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count} relativeLineHeight={1}>
        {formatTime(currentTime)}
      </Text>

      <Subhead>{subhead}</Subhead>
      {helpText && <Text style={{ textAlign: "center" }}>{helpText}</Text>}

      <Button
        onPress={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? "Pause" : "Go!"}
      </Button>

      {/* <Button variant="subtle" onPress={onFinished}>
        Finish Early
      </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  count: {
    fontSize: 100,
    fontFamily: "RobotoMono_700Bold",
  },
});
