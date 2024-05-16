import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const LoginPage = ({route}) => {


    const {isLogin} = route.params
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [showError, setShowError] = useState(false);



    const fetchData = async (data) => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + "register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const ans = await res.json();
      } catch (err) {
        console.log(err);
        setShowError(true);
      }
    };

    const handleClick = async ()=>{
      if(!email || !name || !password){
        setShowError(true);
        setName('');
        setEmail('')
        setPassword('')
      }
      const data = {
        name:name,
        email:email,
        password:password,
      }
      await fetchData(data);

      setEmail('');
      setPassword('');
      setShowError(false);
    }

    return (
      <View style={styles.container} className="bg-bgColor p-2 px-4 h-[100%]">
        <Text className="text-white text-xl mt-4">
          {!isLogin ? "Welcome to Flow!" : "Welcome back to Flow!"}
        </Text>
        {!isLogin && (
          <View className="mt-8">
            <Text className="text-white text-lg">Name</Text>
            <TextInput
              editable
              value={name}
              placeholder=""
              onChangeText={(text) => setName(text)}
              className="border-b-2 border-b-[#47CF73] h-10 text-white"
            ></TextInput>
          </View>
        )}
        <View className="mt-8">
          <Text className="text-white text-lg">Email Address</Text>
          <TextInput
            editable
            value={email}
            placeholder=""
            onChangeText={(text) => setEmail(text)}
            className="border-b-2 border-b-[#47CF73] h-10 text-white"
          ></TextInput>
        </View>
        <View className="mt-8">
          <Text className="text-white text-lg">Password</Text>
          <TextInput
            editable
            value={password}
            placeholder=""
            onChangeText={(text) => setPassword(text)}
            className="border-b-2 border-b-[#47CF73] h-10 text-white"
          ></TextInput>
        </View>
        {showError && (
          <View>
            <Text className="text-orange-400 mt-6 text-lg">
              *Please provide all info !
            </Text>
          </View>
        )}
        <View className="absolute bottom-16 w-full ml-4">
          <TouchableOpacity
            className="my-2 mx-8 border-slate-400 border border-b-2 rounded-md"
            onPress={() => handleClick()}
          >
            <View
              className={`bg-${
                isLogin ? "bgColor" : "[#47CF73]"
              }  px-2 py-4 rounded-md`}
            >
              <Text className="text-center text-white text-lg font-semibold">
                {isLogin ? "Log in" : "Sign up"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});