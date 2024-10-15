import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "./ThemedView"
import { Text, Image, View, Button, StyleSheet, FlatList } from "react-native";
import { ImageCard } from "./ImageCard";
import { useState } from "react";
import { DownloadImage } from "./BottomSheet";


export function SplitfeedView({wallpapers, onScroll}: {
    wallpapers: Wallpaper[];
    onScroll?: (yOffset: number) => void;
}) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null)

    return <>
            <FlatList
                onScroll={(e) => {
                    let yOffset = e.nativeEvent.contentOffset.y / 1;
                    onScroll?.(yOffset);
                }}

                data={wallpapers.filter((_, index) => index % 2 === 0).map((_, index) => [wallpapers[index],
                wallpapers[index + 1]])}
                renderItem={({item: [first, second]}) => <ThemedView style={styles.conatiner}>
                    <ThemedView style={styles.innerconatiner}>
                        <View>
                            <ImageCard onPress={() =>{
                            setSelectedWallpaper(first)
                            }} wallpaper={first} />
                        </View>
                    </ThemedView>
                    <ThemedView style={styles.innerconatiner}>
                    {second && <View>
                            <ImageCard onPress={() =>{
                            setSelectedWallpaper(second)
                            }} wallpaper={second} />
                        </View>}
                    </ThemedView>
                </ThemedView>
                }
                keyExtractor={item => item[0].name}
            />
        {/* <ThemedView style={styles.conatiner}>
            <ThemedView style={styles.innerconatiner}>
                <FlatList
                data={wallpapers.filter((_, index) => index % 2 === 0)}
                renderItem={({item}) => <ImageCard onPress={() =>{
                    setSelectedWallpaper(item)
                }} wallpaper={item} />}
                keyExtractor={item => item.name}
                />
            </ThemedView>
            <ThemedView style={styles.innerconatiner}>
                <FlatList
                data={wallpapers.filter((_, index) => index % 2 === 1)}
                renderItem={({item}) => <ImageCard onPress={() =>{
                    setSelectedWallpaper(item)
                }} wallpaper={item} />}
                keyExtractor={item => item.name}
                />
            </ThemedView>
        </ThemedView> */}
        {selectedWallpaper && <DownloadImage wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </>
}

const styles = StyleSheet.create({
    conatiner: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        backgroundColor: "red"
    },
    innerconatiner: {
        flex: 1,
        padding: 10
    }
    // ,
    // imgcontainer: {
    //     paddingVertical: 10
    // }
})