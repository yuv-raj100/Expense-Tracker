import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BasketSvg from './BasketSvg'
import RuppeSvg from './RuppeSvg'
import { useNavigation } from '@react-navigation/native';

export default function ExpensesButton({ isTransaction, transactionName, paidBy, amount, sentBy, toWhom}) {

    const navigation = useNavigation();

    return (

        <View>
        
            { isTransaction ? <TouchableOpacity onPress={()=>navigation.navigate('TransactionDetails',{ isPayment: !isTransaction, name: transactionName, amount: amount, by: paidBy, forWhom: toWhom })}>
                                    <View className="flex-row justify-between py-3 items-center">
                                        <View className="flex-row items-center" >
                                            <BasketSvg/>
                                            <View className="ml-4">
                                                <Text className="text-white text-lg ">{transactionName}</Text>
                                                <Text className="text-white text-lg">{paidBy}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className="text-white text-lg" >Rs {amount}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>navigation.navigate('TransactionDetails',{ isPayment: !isTransaction, name:"Payment", amount: amount, by: sentBy, forWhom: toWhom })}>
                                    <View className=" flex-row justify-between py-3 items-center">
                                        <View className="flex-row items-center" >
                                            <RuppeSvg/>
                                            <View className="ml-4">
                                                <Text className="text-white text-lg ">From<Text className="font-bold "> {sentBy}</Text></Text>
                                                <Text className="text-white text-lg">To<Text className="font-bold">  {toWhom}</Text></Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className="text-white text-lg" >Rs. {amount}</Text>
                                        </View>
                                    </View>
                    </TouchableOpacity>
                }
        </View>

    )
}