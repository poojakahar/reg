import React,{ Component } from 'react';
import {Text, View } from 'react-native';

class SideBar extends Component
{
    render()
    {
        return(
          <View>
              <Text> Home </Text>
              <Text> Profile </Text>
          </View>
        );
    }
}

export default SideBar;