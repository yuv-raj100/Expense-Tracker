import { View, Text,TextInput, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlusSvg from './PlusSvg';
import { FlatList } from 'react-native';
import TickSvg from '../svgs/TickSvg';
const h = Dimensions.get("window").height;
import BackArrowSvg from './BackArrowSvg';
import { useNavigation } from "@react-navigation/native";

const GroupMembers = ({route}) => {

    const navigation = useNavigation();
    const { groupName } = route.params;

    const [user,setUser] = useState("");
    const [text, setText] = useState("");
    const [memberList,setMemberList] = useState([]);
    const handleSubmit = ()=>{
        setMemberList((prev)=> [...prev,text]);
        setText("");
    }
    
    const handleClick = (itemToRemove) => {
      setMemberList(memberList.filter((item) => item !== itemToRemove));
    };
    console.log(memberList);
    const getUserName = async () => {
      try {
        const name = await AsyncStorage.getItem("user");
        console.log("hi");
        if (name !== null) {
          setUser(name);
        }
      } catch (error) {
        console.error("Error retrieving group name", error);
      }
    };

    const url = `http://192.168.201.248:3000/api/search?query=`;
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const addGroup = async (updatedMemberList)=>{
      const obj = {
        groupName:groupName,
        members:updatedMemberList
      }
      
      try {
        const response = await fetch(
          "http://192.168.201.248:3000/api/addGroup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        const data = await response.json();
        console.log('Group added successfully:', data);
        
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
   
    useEffect(() => {
      if (query.length > 0) {
        const fetchData = async () => {
          try {
            const response = await fetch(
              url+query
            );
            const data = await response.json();
            setResults(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        fetchData();
      } else {
        setResults([]);
      }
      getUserName();
    }, [query]);

    const addUserToMemberList = () => {
      const updatedMemberList = [...memberList, user];
      setMemberList(updatedMemberList);
      addGroup(updatedMemberList);
    };
    
    return (
      <View>
        <View
          className="flex-row px-4 bg-[#47CF73] pt-2 justify-between"
          style={styles.container}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <BackArrowSvg />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
                addUserToMemberList();
                navigation.navigate("HomePage");
              }
            }
          >
            <Text className="text-white text-lg">
              Create
            </Text>
          </TouchableOpacity>
        </View>
        <View className="bg-bgColor p-2 px-4 h-[100%]">
          {/* <Text className="text-white text-lg">
                        New Person
                    </Text> */}
          <TextInput
            editable
            value={query}
            placeholder="Enter name"
            onChangeText={(query) => setQuery(query)}
            className="border-2 px-2 bg-white mt-4 py-3 text-lg"
            onSubmitEditing={handleSubmit}
          ></TextInput>

          {memberList.length == 0 ? (
            <View className="my-10 mx-auto">
              <Text className="text-white text-lg">
                Add all participating members
              </Text>
            </View>
          ) : (
            <View className="mt-4">
              <FlatList
                // style={{ top: h / 1.18 }}
                className=""
                data={memberList}
                horizontal
                renderItem={({ item }) => {
                  return (
                    <View className="m-1 p-1">
                      <TouchableOpacity
                        className="mt-auto"
                        onPress={() => handleClick(item)}
                      >
                        <Text
                          className={`bg-white rounded-full m-auto p-4 px-5`}
                        >
                          {item.toUpperCase()[0]}
                        </Text>
                        <Text className="text-slate-300 text-center mb-1 w-16">
                          {item}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          )}
          {results.length > 0 && (
            <View>
              <Text className="text-white text-lg mt-4">Search results</Text>
            </View>
          )}
          <View className="mt-4">
            {results.map((name, idx) => {
              const isAdded = memberList.includes(name.username);
              return (
                <View className="border-b border-b-[#47CF73] py-2 px-1 flex-row justify-between" key={idx}>
                  <Text className="text-white text-lg">{name.username}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setMemberList([...memberList, name.username])
                    }
                    disabled={isAdded}
                  >
                  {isAdded ? <TickSvg /> : <PlusSvg color="#47CF73"/>}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
}

export default GroupMembers

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: h * 0.075,
  },
});