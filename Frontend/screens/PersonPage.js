import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { UserRound } from 'lucide-react-native';
import { CirclePlus } from 'lucide-react-native';
import Expenses from './Expenses';

export default function PersonPage() {


    const removeExpense = (index) => {  
        let newArr=[];
        console.log(newArr)
        for(i=0;i<expenses.length;i++){
            if(i==index)
                continue;
            newArr.push(expenses[i]);
        }
        setExpenses(newArr);
    };

    const [userName, setUserName] = useState('Name1');
    const [expenses, setExpenses] = useState([<Expenses key={0} idx={0} remove={removeExpense} />]);
    const [total,setTotal] = useState(0);

    const addExpense = () => {
        const newExpenseIndex = expenses.length;
        const newExpenses = [...expenses, <Expenses key={newExpenseIndex} idx={newExpenseIndex} remove={removeExpense}/>];
        setExpenses(newExpenses);
    };
    

   
    

    return (
        <View className="bg-gray-400 border-2 border-white m-1 p-2">
            <View className=" flex-row items-center mb-2">
                <Text className="bg-sky-500 px-2 py-[10px]"><UserRound className="text-white"/></Text>
                <TextInput
                        editable
                        value={userName}
                        placeholder='Name1'
                        onChangeText = { text => setUserName(text) }
                        className="bg-white py-2 w-[62.5%] px-2"
                />
                <Text>Rs. {total}</Text>

            </View>
            <View>
                {expenses.map((expense, index) => (
                    <View key={index}>{expense}</View>
                ))}
            </View>
            <TouchableOpacity className="bg-white py-3 flex-row items-center justify-center" onPress={addExpense}>
                <Text><CirclePlus className='text-gray-800 '/></Text>
                <Text className="text-center text-gray-800 ml-1">more</Text>
            </TouchableOpacity>
        </View>
    )
}