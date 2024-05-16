import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const OverviewButton = ({ name, amount}) => {


    const navigation = useNavigation();
    const [expense] = useState(1);
    const [payment] = useState(1);

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('UserDetails',{ name: name, balance: amount, numOfExpenses: expense, numOfPayments: payment })}> 
            <View className=" flex-row justify-between py-3">
                <Text className="text-white text-lg ">{name}</Text>
                <Text className="text-white text-lg">Rs {amount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OverviewButton