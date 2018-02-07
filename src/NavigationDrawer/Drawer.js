import React , { Component } from 'react';
import { Text, View, DrawerLayoutAndroid } from 'react-native';
import Button from './../compnent/Button';

class Drawer extends Component
{

    DrawerOpen()
    {
        openDrawer();
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <Button title='Open Drawer' onPress={}/>
            <DrawerLayoutAndroid
                drawerWidth={300}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

export default Drawer;