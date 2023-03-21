import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    </SafeAreaView>
  );
};
