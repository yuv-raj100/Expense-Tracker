import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ExpensesButton from './ExpensesButton'

const Expenses = () => {

    const transactionArr = [

        {
            isTransaction: true,
            transactionName: "Gasoline",
            amount: "-50",
            paidBy:"Rohan",
            sentBy:'Yuvraj',
            toWhom:'Rohan'
        },
        {
            isTransaction: true,
            transactionName: "Gasoline",
            amount: "-50",
            paidBy:"Rohan",
            sentBy:'Yuvraj',
            toWhom:'Rohan'
        },
        {
            isTransaction: true,
            transactionName: "Gasoline",
            amount: "-50",
            paidBy:"Rohan",
            sentBy:'Yuvraj',
            toWhom:'Rohan'
        },
        {
            isTransaction:false,
            transactionName: "null",
            amount: "50",
            paidBy:"null",
            sentBy:'Yuvraj',
            toWhom:'Rohan'
        },
        {
            isTransaction:false,
            transactionName: "null",
            amount: "50",
            paidBy:"null",
            sentBy:'Yuvraj',
            toWhom:'Rohan'
        },
    ]

    return (
        <View>
            <View style={{ }} className="px-3 py-2">
                {
                    transactionArr.map((expense,idx)=>{
                        return (
                            <View key={idx}>
                                <ExpensesButton key={idx} {...expense}/>
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

export default Expenses