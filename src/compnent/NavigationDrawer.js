import React,{ Component } from 'react';
import { Text, View, DrawerLayoutAndroid } from 'react-native';

class NavigationDrawer extends Component
{
    render() {
        var navigation = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );

        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPostion={DrawerLayoutAndroid.positions}
                renderNavigationView={()=> navigation}
            >
                <View>
                    <Text> Hello </Text>
                    <Text> World </Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

export default NavigationDrawer;