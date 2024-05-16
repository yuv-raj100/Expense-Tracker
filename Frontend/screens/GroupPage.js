import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native'
import TabViewExample from './TabViewExample';
import BasketSvg from './BasketSvg';
import { FloatingAction } from "react-native-floating-action";
import RuppeSvg from './RuppeSvg';
import UserSvg from './UserSvg';
import { useNavigation } from '@react-navigation/native';



const airplane = require('../Images/airplane.jpeg')
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const GroupPage = () => {

    const navigation = useNavigation();

    const actions = [
        {
          text: "New Person",
          icon: <UserSvg/>,
          name: "new_person",
          position: 1,
          color:'white',
          buttonSize:55,
          textStyle:{
            fontStyle: 'italic',
            fontWeight: 'bold',
            color:'#47CF73',
          },
          margin:0,
          
        },
        {
          text: "New Payment",
          icon: <RuppeSvg/>,
          name: "new_payment",
          position: 2,
          color:'white',
          buttonSize:55,
          textStyle:{
            fontStyle: 'italic',
            fontWeight: 'bold',
            color:'#47CF73',
          },
          margin:0,
        },
        {
          text: "New Expense",
          icon: <BasketSvg/>,
          name: "new_expense",
          position: 3,
          color:'white',
          buttonSize:55,
          textStyle:{
            fontStyle: 'italic',
            fontWeight: 'bold',
            color:'#47CF73',
          },
          margin:0,
        },
      ];
    
    return (
        <View className='bg-bgColor' style={styles.container}>

            <View style={{ height: h * 0.1 }} className="bg-[#922336] flex-row items-end justify-end">
                
                <Image
                    source={airplane}
                    className="w-[20%] h-[90%] rounded-lg  absolute left-5 top-7"
                />
            
                  
                <Text className="mr-5 mb-1 text-white text-2xl font-bold">Goa Trip</Text>
               
            </View>
			
            <View  style={{ top: h * 0.05, width: '100%', height: '100%' }}>
                <TabViewExample/>
            </View> 

            <View className='absolute bottom-20 right-0 w-[40%]'>
                <FloatingAction
                    actions={actions}
                    color='#47CF73'
                    
                    onPressItem={name => {
                        switch (name) {
                            case 'new_person':
                                navigation.navigate('NewPerson', {heading:'Save'});
                                break;
                            case 'new_payment':
                                navigation.navigate('NewPayment')
                                break;
                            case 'new_expense':
                                navigation.navigate('NewExpense')
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

export default GroupPage

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    }
  });