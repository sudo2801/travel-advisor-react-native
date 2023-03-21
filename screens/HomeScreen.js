import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assest";
import * as Animatable from "react-native-animatable";

export default HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Traval</Text>
      </View>

      {/* SECOUND SECTION */}
      <View className="px-6 pt-8 space-y-3">
        <Text className="text-[#3C6072] text-[30px]">Enjoy The Trip with</Text>
        <Text className="text-[#00BCC9] text-[20px] font-bold">
          Enjoy The Trip with
        </Text>
        <Text className="text-[#3c6072] text-base">
          Loram Maintenance of Way, Inc. (reporting mark LMIX) is a railroad
          maintenance equipment and services provider.
        </Text>
      </View>

      <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[300px] h-[300px] bg-[#099256] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center mt-6">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-[500px]  object-cove"
        />
        <View
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] 
          rounded-full  items-center justify-center"
        >
          <TouchableOpacity>
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
              <Text className="text-gray-50 text-[30px] font-semibold">GO</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
