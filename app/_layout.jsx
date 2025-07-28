import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { I18nManager } from "react-native";
import { COLORS } from "../constants/colors";

try {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
} catch (e) {
  console.error(e);
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
