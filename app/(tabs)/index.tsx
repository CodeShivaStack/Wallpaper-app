import { Text, View, StyleSheet, useColorScheme } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SplitfeedView } from "@/components/SplitfeedView";
import { uselibraryWallpapers, uselikedWallpapers, usesuggestedWallpapers, useWallpapers } from "@/hooks/useWallpapers";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedSafeAreaViee } from "@/components/ThemedSafeAreaVieww";


const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  const theme = useColorScheme() ?? 'light';
  

  return (
    <ThemedSafeAreaViee style={styles.conatiner}>
    <Tab.Navigator style={styles.conatiner} screenOptions={{
      tabBarActiveTintColor: Colors[theme].tint,
      tabBarStyle: {
        backgroundColor: Colors[theme].background
      },
      tabBarIndicatorStyle: {
        backgroundColor: Colors[theme].indicator,
        height: 4
      }
    }}>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    </ThemedSafeAreaViee>
  );
}

function Suggested() {
    const wallpapers = usesuggestedWallpapers(); 

    return <ThemedView style={styles.conatiner}>
      <SplitfeedView wallpapers={wallpapers} />
    </ThemedView>
    
}

function Liked() {
    const wallpapers = uselikedWallpapers(); 

    return <ThemedView style={styles.conatiner}>
      <SplitfeedView wallpapers={wallpapers} />
    </ThemedView>
}

function Library() {
    const wallpapers = uselibraryWallpapers(); 

    return <ThemedView style={styles.conatiner}>
      <SplitfeedView wallpapers={wallpapers} />
    </ThemedView>
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  }
})