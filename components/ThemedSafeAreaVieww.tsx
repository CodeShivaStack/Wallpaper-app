import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";

export function ThemedSafeAreaViee({ children, style ={} }: {
    children: React.ReactNode;
    style?: any;
}) {
    const theme = useColorScheme() ?? "light";
    return <SafeAreaView style={{backgroundColor: Colors[theme].background, ...style}}>
        {children}
    </SafeAreaView>
}