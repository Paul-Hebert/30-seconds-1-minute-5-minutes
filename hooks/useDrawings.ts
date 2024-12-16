import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import { Drawing } from "@/types/drawing";
import { useEffect, useState } from "react";

const drawingsDirectoryPath = `${FileSystem.documentDirectory}drawings`;

// Ensure the drawings directory exists
async function ensureDirectoryExists() {
  const info = await FileSystem.getInfoAsync(drawingsDirectoryPath);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(drawingsDirectoryPath, {
      intermediates: true,
    });
  }
}

const storageId = "user-drawings";

async function saveDrawingToFileSystem(localUri: string, fileName: string) {
  await ensureDirectoryExists();

  const fileUri = `${drawingsDirectoryPath}/${fileName}`;
  await FileSystem.copyAsync({
    from: localUri,
    to: fileUri,
  });

  console.log({ localUri, fileUri });

  return fileUri;
}

export async function saveDrawing(drawing: Omit<Drawing, "createdAt">) {
  try {
    const existingData = await AsyncStorage.getItem(storageId);
    const drawings: Drawing[] = existingData ? JSON.parse(existingData) : [];

    const newDrawing: Drawing = {
      id: drawing.id,
      referencePhoto: drawing.referencePhoto
        ? await saveDrawingToFileSystem(
            drawing.referencePhoto,
            `${drawing.id}-reference.jpg`
          )
        : null,
      firstDrawing: await saveDrawingToFileSystem(
        drawing.firstDrawing,
        `${drawing.id}-first.jpg`
      ),
      secondDrawing: await saveDrawingToFileSystem(
        drawing.secondDrawing,
        `${drawing.id}-second.jpg`
      ),
      thirdDrawing: await saveDrawingToFileSystem(
        drawing.thirdDrawing,
        `${drawing.id}-third.jpg`
      ),
      createdAt: new Date().toISOString(),
    };

    console.log(newDrawing);

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
