import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import HeaderForNavigation from './HeaderForNavigation'

const NewPerson = ({route}) => {

    const {heading} = route.params

    const [text, setText] = useState('');

    return (
        <View>
            <HeaderForNavigation heading={heading}/>
            <View className="bg-bgColor p-2 px-4 h-[100%]">
                <Text className='text-white text-lg'>{heading=='Next' && 'Group '}Name</Text>
                <TextInput
                    editable
                    value={text}
                    placeholder=''
                    onChangeText = { text => setText(text) }
                    className='border-b-2 border-b-[#47CF73] h-10 text-white'
                >
                </TextInput>
            </View>
        </View>
    )
}

export default NewPerson