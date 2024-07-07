import { View, Text, TextInput, Dimensions,StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderForNavigation from './HeaderForNavigation'
import BackArrowSvg from './BackArrowSvg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";

const h = Dimensions.get("window").height;

const NewPerson = ({route}) => {


    const navigation = useNavigation();
    const {heading} = route.params

    const [text, setText] = useState('');

    const storeGroupName = async () => {
      try {
          await AsyncStorage.setItem("groupName", text);
      } catch (error) {
          console.error("Error saving group name", error);
      }
    };

    const getGroupName = async () => {
      try {
        const name = await AsyncStorage.getItem("groupName");
        if (name !== null) {
          setText(name);
        }
      } catch (error) {
        console.error("Error retrieving group name", error);
      }
    };

    
    useEffect(() => {
      getGroupName();
    }, []);

    return (
      <View>
        <View
          className="flex-row px-4 bg-[#47CF73] pt-2 justify-between "
          style={styles.container}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <BackArrowSvg />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
                    storeGroupName();
                    navigation.navigate("GroupMembers",{groupName:text});
                }
            }
            >
            <Text className="text-white text-lg">
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <View className="bg-bgColor p-2 px-4 h-[100%]">
          <Text className="text-white text-lg">
            {heading == "Next" && "Group "}Name
          </Text>
          <TextInput
            editable
            value={text}
            placeholder=""
            onChangeText={(text) => setText(text)}
            className="border-b-2 border-b-[#47CF73] h-10 text-white"
          ></TextInput>
        </View>
      </View>
    );
}

export default NewPerson

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: h * 0.075,
  },
});