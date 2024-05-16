import { View, Text, StyleSheet, StatusBar,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import BackArrowSvg from './BackArrowSvg'
import { useNavigation } from '@react-navigation/native';

const h = Dimensions.get('window').height;

const HeaderForNavigation = ({heading}) => {

    const navigation = useNavigation();

    return (
        <View className='flex-row px-4 bg-[#47CF73] pt-2 justify-between ' style={styles.container}>

            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text>
                    <BackArrowSvg/>
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>heading=='Next'?navigation.navigate('GroupMembers'):navigation.navigate('GroupPage')}>
                <Text className="text-white text-lg">
                    {heading!=null?heading:'Save'}
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default HeaderForNavigation

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        height:h*0.075
    }
  });