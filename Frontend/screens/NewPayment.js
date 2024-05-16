import { View, Text, TextInput, TouchableOpacity, Dimensions, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import HeaderForNavigation from './HeaderForNavigation'
import RuppeTagSvg from './RuppeTagSvg'
import OpenSvg from './OpenSvg'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewPayment = () => {

    const [amount,setAmount] = useState('');
    const [list, setList] = useState(false);
    const [showList, setShowList] = useState(false);
    const [paidBy,setPaidBy] = useState('');
    const [paidTo,setPaidTo] = useState('');

    const memberArr = [
        'Raj', 
        'Hrithik',  
        'Aamir',  
        'Salman',  
        'Dwayne Johnson', 
        'Raj',
    ]



    return (
        <View>
            <HeaderForNavigation/>
            <View className="bg-bgColor py-2 pt-6 flex-row justify-between px-4">
                <Text className='text-white text-lg'>Amount</Text>
                <View className='flex-row '>
                    <RuppeTagSvg/>
                    <TextInput
                        editable
                        value={amount}
                        keyboardType='numeric'
                        placeholder='0.00'
                        onChangeText = { (amount) => {setAmount(amount)} }
                        className=' h-8 text-white pb-2 pl-2'
                        selectionColor={'white'}
                        placeholderTextColor="#f1f5f9">
                    </TextInput>
                </View>

                
            </View>
            <View className="bg-bgColor  py-4 flex-row justify-between px-4 ">
                    <Text className='text-white text-lg'>From</Text>
                    <TouchableOpacity onPress={()=>setList(!list)}>
                        <Text className='text-white text-lg'>{paidBy==''?<OpenSvg/>:paidBy}</Text>
                    </TouchableOpacity>
            </View> 

            <View className="bg-bgColor h-[100%]  py-4 flex-row justify-between px-4 ">
                    <Text className='text-white text-lg'>To</Text>
                    <TouchableOpacity onPress={()=>setShowList(!showList)}>
                        <Text className='text-white text-lg'>{paidTo==''?<OpenSvg/>:paidTo}</Text>
                    </TouchableOpacity>
            </View>
                
            {list && <View className='absolute p-4 w-[50%] bg-white top-[h] rounded-lg z-30' style={{top:h/4, left:w/10.5,  width:w/1.2}}>
                        {memberArr.map((member,idx)=>{
                            return <TouchableOpacity key={idx} onPress={()=>{setPaidBy(member); setList(!list)}}><Text className='py-2'>{member}</Text></TouchableOpacity>
                        })}
                    </View>
            }
            {showList && <View className='absolute p-4 w-[50%] bg-white top-[h] rounded-lg z-30' style={{top:h/3, left:w/10.5, width:w/1.2}}>
                        {memberArr.map((member,idx)=>{
                            return <TouchableOpacity key={idx} onPress={()=>{setPaidTo(member); setShowList(!showList)}}><Text className='py-2'>{member}</Text></TouchableOpacity>
                        })}
                    </View>
            }
        </View>
    )
}

export default NewPayment