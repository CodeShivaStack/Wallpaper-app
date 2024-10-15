import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable, Appearance} from 'react-native';

import {Link} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemedSafeAreaViee } from '@/components/ThemedSafeAreaVieww';


// export default function() {
//     return <SafeAreaView>
//         <Text>Account Page!</Text>
//         <Link href = {"/(nobottombar)/accountInfo"} style = {{backgroundColor: "yellow"}}>
//         <Text>Click here to visit Account Info!</Text>
//         </Link>
//     </SafeAreaView>
// }

export default function() {
    return <ThemedSafeAreaViee style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
            <Header />
            <ThemedView style={{ flex: 1 }}>
                <LoginButtons />
                <ThemeSelector />
                <About />
            </ThemedView>
        </ScrollView>
    </ThemedSafeAreaViee>
}


function About(){
    return <ThemedView style={styles.themebar}>
        <ThemedText style={styles.textBig}>About</ThemedText>
        <ThemedView style={{ marginTop: 10 }}>
            <Pressable>
                <ThemedText style={{ margin: 10, fontSize: 18 }}>About</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ margin: 10, fontSize: 18 }}>Privacy Policy</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ margin: 10, fontSize: 18 }}>Terms of Services</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ margin: 10, fontSize: 18 }}>Licenses</ThemedText>
            </Pressable>
            
        </ThemedView>
    </ThemedView>
}


function ThemeSelector(){
    return <ThemedView style={styles.themebar}>
        <ThemedText style={styles.textBig}>Settings</ThemedText>
        <ThemedText>Theme</ThemedText>
        <ThemedView style={styles.themeSelectorCont}>
            <ThemeButton title={"Dark"} selected={false} clrScheme="dark" />
            <ThemeButton title={"Light"} selected={false} clrScheme="light" />
            <ThemeButton title={"System"} selected={false} clrScheme={null} />
        </ThemedView>
    </ThemedView>
}


function ThemeButton({title, selected, clrScheme}: {selected: boolean, title: string, clrScheme: "dark" | "light" | null}){
    const theme = useColorScheme() ?? 'light';
    
    return <Pressable style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 5, 
        flex: 0.3,
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon
    }} onPress={() => 
        Appearance.setColorScheme(clrScheme)
    }>
        <ThemedText style={{ width: "100%", textAlign: "center"}}>{title}</ThemedText>
    </Pressable>
}


function LoginButtons(){
    const theme = useColorScheme() ?? 'light';
    return <>
        <AuthButton 
            label={"Sign in"} 
            icon={<Ionicons
                name={'logo-google'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            />}
        />

        <AuthButton 
            label={"Sign in"} 
            icon={<Ionicons
                name={'logo-apple'}
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            />}
        />
    </>
}


function Header(){
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}>Panels</ThemedText>
        <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
}


function AuthButton({icon, label}: {
    label: string,
    icon: any
}) {
    const theme = useColorScheme() ?? 'light';
  
    return<Pressable style={{
      backgroundColor: theme,
      padding: 10,
      marginHorizontal: 40,
      marginVertical: 5,
      justifyContent: "center",
      flexDirection: "row",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon
    }}>
  
        {icon}
  
      <ThemedText style={{
        fontSize: 20,
        fontWeight: "600"
      }}>{label}</ThemedText>
    </Pressable>
  }


  

  const styles = StyleSheet.create({
    textBig: {
        fontSize: 20,
        fontWeight: "600"
    },
    topbar: {
        padding: 20,
        // margin: 20,
    },
    themeSelectorCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    themebar: {
        padding: 20,
    }
})