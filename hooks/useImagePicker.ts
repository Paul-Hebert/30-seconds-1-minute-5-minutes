import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export function useImagePicker() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    if (!hasPermission) return null;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }

    return null;
  };

  return { hasPermission, pickImage };
}
