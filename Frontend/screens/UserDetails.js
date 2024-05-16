import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import UserSvg from './UserSvg'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const UserDetails = ({ route }) => {

    const  {name, balance, numOfExpenses, numOfPayments} = route.params

    return (
        <View className='bg-bgColor' style={styles.container} >

            
            <View className="flex-row justify-start bg-[#47CF73] px-4 items-center pt-10 mb-6" style={{height:h*0.13}}>
                <View className='bg-white p-3 rounded-full'>
                    <UserSvg/>
                </View>
                <Text className="ml-4 text-xl text-white font-semibold">{name}</Text>
            </View>



            <View className='p-3'>

                <View className="flex-row justify-between pb-1 mb-8" >
                    <Text className="text-white text-lg">Balance</Text>
                    <Text className="text-white text-lg">Rs {balance}</Text>
                </View>

                <TouchableOpacity>
                    <View className="flex-row justify-between pb-1 mb-3" style={{ borderBottomColor: '#47CF73', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                        <Text className="text-white text-lg">Expenses</Text>
                        <Text className="text-white text-lg">{numOfExpenses}</Text>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <View className="flex-row justify-between pb-1" style={{ borderBottomColor: '#47CF73', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                        <Text className="text-white text-lg">Payments</Text>
                        <Text className="text-white text-lg">{numOfPayments}</Text>
                    </View>
                </TouchableOpacity>
                

            </View>
            

        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
      height:h,
    }
});