import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import OverviewButton from './OverviewButton'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Overview = () => {

    const memberArr = [
        {
            name:"Yuvraj",
            amount:"500"
        },
        {
            name:"Raj",
            amount:"-200"
        },
        {
            name:"Rohan",
            amount:"544"
        }
    ]

    return (
        <View>
            <View style={{ }} className="px-3 py-2">
                {
                    memberArr.map((member,idx)=>{
                        return (
                            <View key={idx}>
                                <OverviewButton key={idx} name={member.name}  amount={member.amount}/>
                                <View
                                    style={{
                                        borderBottomColor: '#47CF73',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                    }}
                                />
                            </View>  
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Overview