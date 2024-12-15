import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "My Drawings",
        }}
      />
      <Stack.Screen
        name="add-drawing"
        options={{
          headerTitle: "New Drawing",
        }}
      />
    </Stack>
  );
}
