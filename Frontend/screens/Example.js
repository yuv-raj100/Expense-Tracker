import { View, Text } from 'react-native'
import React from 'react'
import { FloatingAction } from "react-native-floating-action";

const Check = () => {

    const actions = [
        {
          text: "Accessibility",
          icon: require("../Images/airplane.jpeg"),
          name: "bt_accessibility",
          position: 2
        },
        {
          text: "Language",
          icon: require("../Images/airplane.jpeg"),
          name: "bt_language",
          position: 1
        },
        {
          text: "Location",
          icon: require("../Images/airplane.jpeg"),
          name: "bt_room",
          position: 3
        },
        {
          text: "Video",
          icon: require("../Images/airplane.jpeg"),
          name: "bt_videocam",
          position: 4
        }
      ];
  return (
    <View  className="bg-pink-400 h-[100%]">
        <Text>Hello</Text>
        <FloatingAction
            actions={actions}
            onPressItem={name => {
            console.log(`selected button: ${name}`);
            }}
        />
    </View>
  )
}

export default Check