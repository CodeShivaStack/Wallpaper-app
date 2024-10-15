import{ DownloadImage } from "@/components/BottomSheet";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
    const [ImageOpen, setImageOpen] = useState(false);

    return <SafeAreaView style={{flex: 1, backgroundColor: "yellow"}}>
        <View style={{flex: 1}}>
        <Text>Explore Page!</Text>
        <Button title="Open Bottom Sheet" onPress={() => {
            setImageOpen(true);
        }}></Button>
        {ImageOpen && <DownloadImage onClose={() => setImageOpen(false)} />}
        </View>
        
    </SafeAreaView>
}