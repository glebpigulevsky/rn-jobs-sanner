import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
