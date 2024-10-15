
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Text, Image, View, Button, StyleSheet, Dimensions } from "react-native";
import { useWallpapers, Wallpaper } from '@/hooks/useWallpapers';
import { SplitfeedView } from "@/components/SplitfeedView";
import Carousel from 'react-native-reanimated-carousel';
import * as React from 'react';
import { useState } from 'react';
import { useCarousel } from "@/hooks/useCarousel";
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset,
  } from 'react-native-reanimated';
import {LinearGradient} from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";
import { ThemedSafeAreaViee } from "@/components/ThemedSafeAreaVieww";


const TopBarHeight = 250;

export default function exlore() {
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              scale: interpolate(yOffset, [-TopBarHeight, 0, TopBarHeight], [1, 1, 1]),
            },
          ],
        };
      });

    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(yOffset, [-TopBarHeight, TopBarHeight / 2, TopBarHeight], [1, 1, 0])
        };
    });

    return <ThemedSafeAreaViee style={{ flex: 1 }}>
            <Animated.View style={[{ height: TopBarHeight - yOffset }, headerAnimatedStyle]}>
                <Carousel
                    // loop
                    width={width}
                    // height={TopBarHeight - yOffset}
                    // autoPlay={true}
                    data={carouselItems}
                    // scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <>
                            <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image source={{uri: carouselItems[index].image}}style={{ height: TopBarHeight}} />
                        </View>
                        <LinearGradient colors={['transparent', 'black']} style={{flex: 1, position: "absolute",
                            zIndex: 10, height: TopBarHeight / 2, width: "100%", bottom: 0}}>
                            <Animated.View style={textAnimatedStyle}>
                                <Text style={{color: "white", textAlign: "center", fontSize: 30, fontWeight: "600", paddingTop: TopBarHeight / 3}}>{carouselItems[index].title}</Text>
                            </Animated.View>
                        </LinearGradient>
                        </>
                    )}
                />
            </Animated.View>

            <SplitfeedView onScroll={(yOffset) => {
                setScrollY(yOffset)
            }}  wallpapers={wallpapers}  />
            
            {/* <SplitfeedView wallpapers={wallpapers} /> */}
        </ThemedSafeAreaViee>
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


{/* <ThemedView style={styles.innerconatiner}>
                    <FlatList
                    data={wallpapers.filter((_, index) => index % 2 === 0)}
                    renderItem={({item}) => <View style={styles.imgcontainer}> <ImageCard onPress={() =>{
                        setSelectedWallpaper(item)
                    }} wallpaper={item} /></View>}
                    keyExtractor={item => item.name}
                    />
                </ThemedView>
                <ThemedView style={styles.innerconatiner}>
                    <FlatList
                    data={wallpapers.filter((_, index) => index % 2 === 1)}
                    renderItem={({item}) => <View style={styles.imgcontainer}> <ImageCard onPress={() =>{
                        setSelectedWallpaper(item)
                    }} wallpaper={item} /></View>}
                    keyExtractor={item => item.name}
                    />
                </ThemedView> */ }