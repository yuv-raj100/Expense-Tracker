import { View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Svg, { Path } from 'react-native-svg'
import { Minus } from 'lucide-react-native';
import { UserRound } from 'lucide-react-native';

import { Button } from 'react-native-web';

export default function SplitSection() {

    const [text, setText] = useState('');

   

    const [count,setCount] = useState(3);
    const incCount = ()=>{
        setCount((c)=>c+1);
    }
    const decCount = ()=>{
        if(count<=0)
            return;
        setCount((c)=>c-1);
    }

    return (
        <View className=" ">
            <Text className="text-xl text-white mx-auto mt-16">
                How many people are in your group?
            </Text>
            <View className="flex-row justify-center  items-center my-8">
                <TouchableOpacity className="bg-sky-600 py-2 px-3"  onPress={decCount}>
                    <Text><Minus className="text-white"/></Text>
                </TouchableOpacity> 
                <View className="flex-row items-center mx-8">
                
                    <Text className="bg-sky-600 py-2 px-3 "><UserRound className="text-white text-sm"/></Text>
                  
                    <Text className="py-[5.5px] bg-white py text-lg px-6">{count}</Text>
                </View>
                
                <TouchableOpacity className="bg-sky-600 py-2 px-3" onPress={incCount}>
                    <Text><Plus className="text-white"/></Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text className="text-white text-lg text-center my-2">
                    Give it a name!
                </Text>
                <TextInput
                    editable
                    value={text}
                    placeholder='e.g. RoadTrip'
                    onChangeText = { text => setText(text) }
                    className="bg-white py-2 w-[80%] mx-auto px-2 my-2"
                />
                <TouchableOpacity className="mx-auto px-auto w-[80%] bg-sky-600"><Text className="text-white text-xl py-2 text-center">Go!</Text></TouchableOpacity>
            </View>
            
        </View>
    )
}