import { Text, View, StatusBar, StyleSheet } from 'react-native';
import GroupPage from './screens/GroupPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserDetails from './screens/UserDetails';
import TransactionDetails from './screens/TransactionDetails';
import NewExpense from './screens/NewExpense';
import NewPerson from './screens/NewGroup';
import NewPayment from './screens/NewPayment';
import HomePage from './screens/HomePage';
import GroupMembers from './screens/GroupMembers';
import IntroPage from './screens/IntroPage';
import LoginPage from './screens/LoginPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const Stack = createNativeStackNavigator();


export default function App() {

  
    return (
      <Provider store={appStore}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='IntroPage' >
                <Stack.Screen name="GroupPage" component={GroupPage} options={{ headerShown: false }} />
                <Stack.Screen name='UserDetails' component={UserDetails} options={{ headerShown: false }} />
                <Stack.Screen name='TransactionDetails' component={TransactionDetails} options={{ headerShown: false }} />
                <Stack.Screen name='NewPerson' component={NewPerson} options={{ headerShown: false }} />    
                <Stack.Screen name='NewExpense' component={NewExpense} options={{ headerShown: false }} />    
                <Stack.Screen name='NewPayment' component={NewPayment} options={{ headerShown: false }} />   
                <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />   
                <Stack.Screen name='GroupMembers' component={GroupMembers} options={{ headerShown: false }} />   
                <Stack.Screen name='IntroPage' component={IntroPage} options={{ headerShown: false }} />     
                <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }} />     
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  }
});
