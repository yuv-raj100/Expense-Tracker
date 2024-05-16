import { View, Text,TextInput } from 'react-native'
import React, {useState} from 'react'
import HeaderForNavigation from './HeaderForNavigation'


const GroupMembers = () => {

    const [text, setText] = useState("");
    const [memberList,setMemberList] = useState([]);
    const handleSubmit = ()=>{
        setMemberList((prev)=> [...prev,text]);
        setText("");
    }
    
    return (
      <View>
        <HeaderForNavigation heading={"Create"} />
        <View className="bg-bgColor p-2 px-4 h-[100%]">
          {/* <Text className="text-white text-lg">
                        New Person
                    </Text> */}
          <TextInput
            editable
            value={text}
            placeholder="New Person"
            onChangeText={(text) => setText(text)}
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
            <View className='mt-4'>
                {memberList.map((name,idx)=>{
                    return (
                      <View className="border-b border-b-[#47CF73] py-2 px-1">
                        <Text className="text-white text-lg">{name}</Text>
                      </View>
                    );
                })}
            </View>
          )}
        </View>
      </View>
    );
}

export default GroupMembers