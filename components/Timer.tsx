import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import Heading from "./Heading";

type TimerProps = {
  count: number;
  onFinished: () => void;
};

export default function Timer({ count, onFinished }: TimerProps) {
  const [currentTime, setCurrentTime] = useState(count);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 1) {
            setIsRunning(false);
            onFinished();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{currentTime}</Text>
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
    fontSize: 160,
    fontWeight: "bold",
  },
});
