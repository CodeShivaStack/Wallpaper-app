import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';


export const DownloadImage = ({onClose, wallpaper}:{
    onClose: () => void;
    wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';


  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["90%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{display: "none"}}
      handleStyle={{display: "none"}}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{flex: 1}}>
        
          <Image style={styles.image} source={{uri: wallpaper.url}} />
          <View style={styles.topbar}>
            <Ionicons
              onPress={onClose}
              name={'close'}
              size={24}
              color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
              />
            <View style={styles.innertopbar}>
              <Ionicons
                name={'heart'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                />
              <Ionicons
                name={'share'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingLeft: 10}}
                />
            </View>
          </View>
          <View style={styles.textContainer}>
            <ThemedText style={styles.textname}>{wallpaper.name}</ThemedText>
          </View>
          {/* <Button title='Download'></Button>  */}
          <DownloadButton url={ wallpaper.url }/>

        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? 'light';

  return<Pressable onPress={async () => {
    let date = new Date().getTime();
    let fileUri = FileSystem.documentDirectory + '${date}.jpg';

    try {
      await FileSystem.downloadAsync(url, fileUri)
      const response = await MediaLibrary.requestPermissionsAsync(true)
      if (response.granted) {
        MediaLibrary.createAssetAsync(fileUri)
        alert("Image Saved!")
      } else {
        console.log("Permission not granted")
      }
    } catch (err) {
      console.log("FS Err:", err)
    }
  }} style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon
  }}>

      <Ionicons
        name={'download'}
        size={24}
        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        style={{paddingRight: 10}}
        />

    <Text style={{
      fontSize: 20,
      color: "white"
    }}>Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  innertopbar: {
    display: "flex",
    flexDirection: "row"   , 
  },
  textContainer: {
    width: "100%",
  },
  textname: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  }
});








// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet, Image, Button} from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { Wallpaper } from '@/hooks/useWallpapers';


// export const DownloadImage = ({onClose, wallpaper}:{
//     onClose: () => void;
//     wallpaper: Wallpaper;
// }) => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <BottomSheet
//     onClose={onClose}
//       snapPoints={["90%"]}
//       ref={bottomSheetRef}
//       onChange={handleSheetChanges}
//       enablePanDownToClose={true}
//       handleIndicatorStyle={{height: 0}}
//     >
//       <BottomSheetView style={styles.contentContainer}>
//       <Image style={{flex: 1}} source={{uri: wallpaper.url}} />
//       <Button title='Download'></Button> 
//       </BottomSheetView>
//     </BottomSheet>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     // backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//   },
// });