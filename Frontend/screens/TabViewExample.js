import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Overview from './Overview';
import Expenses from './Expenses';



const renderScene = SceneMap({
  first: Overview,
  second: Expenses,
});
 
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'Expenses' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#212121', }}
      //tabStyle={{ borderWidth: 1, borderColor: 'lightgreen',}}
      // labelStyle={{ color: 'lightgreen' }}
      style={{ backgroundColor: '#212121',  textAlign: 'left' }}
      activeColor='#47CF73'
      indicatorContainerStyle={{backgroundColor:'#212121'}}

    />
  );


  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
}

