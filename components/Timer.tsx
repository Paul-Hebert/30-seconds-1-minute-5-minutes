import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { useFonts, RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono";
import Heading from "./Heading";

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

type TimerProps = {
  count: number;
  onFinished: () => void;
};

export default function Timer({ count, onFinished }: TimerProps) {
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
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 1) {
            setIsRunning(false);
            playSound();
            onFinished();
            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{formatTime(currentTime)}</Text>
      <Button
        onPress={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? "Pause" : "Go!"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  count: {
    fontSize: 144,
    fontFamily: "RobotoMono_700Bold",
  },
});
