import AsyncStorage from "@react-native-async-storage/async-storage";
import { Drawing } from "@/types/drawing";
import { useEffect, useState } from "react";

const storageId = "user-drawings";

export async function saveDrawing(drawing: Omit<Drawing, "createdAt">) {
  try {
    // Get existing drawings
    const existingData = await AsyncStorage.getItem(storageId);
    const drawings: Drawing[] = existingData ? JSON.parse(existingData) : [];

    // Add new drawing with timestamp
    const newDrawing: Drawing = {
      ...drawing,
      createdAt: new Date().toISOString(),
    };

    // Save updated array
    await AsyncStorage.setItem(
      storageId,
      JSON.stringify([...drawings, newDrawing])
    );

    return true;
  } catch (error) {
    console.error("Error saving drawing:", error);
    return false;
  }
}

export function useDrawings() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDrawings() {
      try {
        const data = await AsyncStorage.getItem(storageId);
        setDrawings(data ? JSON.parse(data) : []);
      } catch (error) {
        console.error("Error loading drawings:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDrawings();
  }, []);

  return { drawings, isLoading };
}
