import { View, Text, TextInput, TouchableOpacity, Dimensions, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import HeaderForNavigation from './HeaderForNavigation'
import TagSvg from './TagSvg';
import RuppeTagSvg from './RuppeTagSvg';
import OpenSvg from './OpenSvg';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewExpense = () => {

    const [title, setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [list, setList] = useState(false);
    const [showSplit, setShowSplit] = useState(false);
    const [splitArr, setSplitArr] = useState([])
    const [splitArrNames, setSplitArrNames] = useState([])

    const handleClick = (item)=>{
        
        if (splitArrNames.includes(item)) {
            setSplitArrNames((prev) => prev.filter((name) => name !== item));
            setSplitArr((prev) => prev.filter((obj) => obj.name !== item));
        } else {
            setSplitArrNames((prev) => [...prev, item]);
        }
    }


    const memberArr = [
        'Raj', 
        'Hrithik',  
        'Aamir',  
        'Salman',  
        'Dwayne Johnson', 
        'Raj',
    ]
   
    const [paidBy,setPaidBy] = useState('');

    return (
      <TouchableWithoutFeedback onPress={() => {setShowSplit(false); setList(false)}}>
        <View onClick={() => setShowSplit(false)}>
          <HeaderForNavigation />
          <View className="flex-row justify-between items-center bg-[#47CF73]">
            <TextInput
              editable
              value={title}
              placeholder="Title"
              onChangeText={(title) => setTitle(title)}
              className="p-2 px-4 h-10 text-white text-lg"
              selectionColor={"white"}
              placeholderTextColor="#f1f5f9"
            ></TextInput>
            <View className="pr-2">
              <TagSvg />
            </View>
          </View>
          <View className="bg-bgColor py-2 pt-6 flex-row justify-between px-4">
            <Text className="text-white text-lg">Amount</Text>
            <View className="flex-row ">
              <RuppeTagSvg />
              <TextInput
                editable
                value={amount}
                keyboardType="numeric"
                placeholder="0.00"
                onChangeText={(amount) => {
                  setAmount(amount);
                }}
                className="h-8 text-white pb-2 pl-2"
                selectionColor={"white"}
                placeholderTextColor="#f1f5f9"
              ></TextInput>
            </View>
          </View>

          <View className="bg-bgColor  py-4 flex-row justify-between px-4 ">
            <Text className="text-white text-lg">By</Text>
            <TouchableOpacity onPress={() => setList(!list)}>
              <Text className="text-white text-lg">
                {paidBy == "" ? <OpenSvg /> : paidBy}
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-bgColor h-[100%] py-4 flex-row justify-between px-4">
            <Text className="text-white text-lg">For</Text>
            <TouchableOpacity onPress={() => setShowSplit(!showSplit)}>
              <Text className="text-white text-lg">
                {memberArr.length} person
              </Text>
            </TouchableOpacity>
          </View>

          {list && (
            <View
              className="absolute p-4 w-[50%] bg-white top-[h] rounded-lg z-30"
              style={{ top: h / 3, left: w / 4 }}
            >
              {memberArr.map((member, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => {
                      setPaidBy(member);
                      setList(!list);
                    }}
                  >
                    <Text className="py-2">{member}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {showSplit && (
            <View
              className="absolute p-4 bg-white top-[h] rounded-lg z-30"
              style={{
                top: h / 3,
                left: w / 12,
                width: w / 1.2,
                height: h / 3,
              }}
            >
              {splitArrNames.length == 0 ? (
                <View className="m-auto ">
                  <Text>INR 0.00</Text>
                  <Text>for each</Text>
                </View>
              ) : (
                <View>
                  {splitArrNames.map((item, idx) => {
                    return (
                      <View key={idx} className="flex-row justify-between my-2">
                        <Text>{item}</Text>
                        <View className="flex-row ">
                          <Text className="mx-3">
                            {Math.floor(100 / splitArrNames.length)}%
                          </Text>
                          <Text>
                            Rs {Math.floor(amount / splitArrNames.length)}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          )}

          {showSplit && (
            <FlatList
              style={{ top: h / 1.18 }}
              className="absolute p-2"
              data={memberArr}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View className="m-1 p-1">
                    <Text className="text-slate-300 text-center mb-1 w-16">
                      {item}
                    </Text>
                    <TouchableOpacity
                      className="mt-auto"
                      onPress={() => handleClick(item)}
                    >
                      <Text
                        className={`bg-white ${
                          splitArrNames.includes(item) &&
                          "border-[#47CF73] border-2"
                        } rounded-full m-auto p-4 px-5`}
                      >
                        {item.toUpperCase()[0]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
}

export default NewExpense


const styles = StyleSheet.create({

    app: {
        flex: 3, 
        marginHorizontal: 3,
        width: 10,
        backgroundColor: "red"
    },

    row: {
        flexDirection: "row"
    }

  });