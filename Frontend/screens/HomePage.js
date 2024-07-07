import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import EditPencilSvg from '../svgs/EditPencilSvg'
import DustbinSvg from '../svgs/DustbinSvg'
import { FloatingAction } from "react-native-floating-action";
import PlusSvg from './PlusSvg';
import JoinSvg from '../svgs/JoinSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';




const HomePage = ({route}) => {

    // const {email} = route.params
    const username="yuvraj"

    const isFocused = useIsFocused();

    const setUsername  = async ()=>{
      try {
        await AsyncStorage.setItem("user", username);
      } catch (error) {
        console.error("Error saving group name", error);
      }
    }
    

    const [listOfGroups,setListOfGroups] = useState([])

    const [edit,setEdit] = useState(false);

    const handleClick = (item)=>{
          const newList = listOfGroups.filter((group)=>{
          return item!=group
        })

        setListOfGroups(newList)
    }
    
    const url = "http://192.168.201.248:3000/api/getGroups";

    const fetchData = async () =>{
        //  console.log("hello");
      try{
        const urlWithParams = `${url}?username=${encodeURIComponent(username)}`;
        const res = await fetch(urlWithParams, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const ans = await res.json();
        // console.log("mello")
        // console.log(ans);
        setListOfGroups(ans.groupList);
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      const getGroups = async () => {
        await fetchData();
      };
      // console.log("bellow");
      getGroups();
      setUsername();
    },[isFocused])
    
    const navigation = useNavigation();

    const actions = [
      {
        text: "New Group",
        icon: <PlusSvg color="#47CF73" />,
        name: "new_group",
        position: 1,
        color: "white",
        buttonSize: 55,
        textStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#47CF73",
        },
        margin: 0,
      },
      {
        text: "Join Group",
        icon: <JoinSvg/>,
        name: "join_group",
        position: 2,
        color: "white",
        buttonSize: 55,
        textStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#47CF73",
        },
        margin: 0,
      },
    ];

    return (
        <View style={styles.container}>
            <View className='bg-[#47CF73] px-2 py-4'>
                <Text className='text-white font-semibold text-2xl text-center'>
                    Flow
                </Text>
            </View>
            <View className='py-3 px-2 flex-row justify-between bg-bgColor'>
                  <Text className='text-xl font-medium text-white'>
                      Groups
                  </Text>
                  <TouchableOpacity onPress={()=>setEdit(!edit)}>
                    <Text>
                        <EditPencilSvg/>
                    </Text>
                  </TouchableOpacity>
                    
            </View>
            {
                listOfGroups.length>0 ? 
                  <View className='bg-bgColor px-2 pb-4 h-full'>
                      {
                          listOfGroups.map((group,idx)=>{
                            return (
                              <TouchableOpacity key={idx} onPress={()=>navigation.navigate('GroupPage',{groupName:group.groupName, groupId:group.groupId})}>
                                <View
                                  className="border-b py-2 border-b-[#47CF73] flex-row justify-between"
                                >
                                  <Text className="text-lg text-white">
                                    {group.groupName}
                                  </Text>
                                  {edit && (
                                    <TouchableOpacity
                                      onPress={() => handleClick(group)}
                                    >
                                      <Text>
                                        <DustbinSvg />
                                      </Text>
                                    </TouchableOpacity>
                                  )}
                                </View>
                              </TouchableOpacity>
                            );
                          })
                      }
                      
                  </View>
                  : <View className='bg-bgColor px-2 py-10 h-full'>
                      <Text className='text-lg text-white text-center'>Create your first group!</Text>
                  </View>
            }

            <View className='absolute bottom-28 right-0 w-[40%]'>
                <FloatingAction
                    actions={actions}
                    color='#47CF73'
                    
                    onPressItem={name => {
                        switch (name) {
                            case 'new_group':
                                navigation.navigate('NewPerson', {heading:'Next'});
                                break;
                            case 'new_payment':
                                navigation.navigate('NewPayment')
                                break;
                            default:
                                break;
                        }
                    }}
                />
            </View>
            
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    }
});