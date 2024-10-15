import { Text, View } from "react-native"
import { Slot } from "expo-router"


export default function() {
    return <View>
        <View>
        <Text>Index Page!</Text>
    </View>
    <Slot />
    </View> 
    
}