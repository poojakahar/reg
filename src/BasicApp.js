import React from 'react';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SideBar from './SideBar';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

/*const BasicApp = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});*/

const BasicApp = DrawerNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
},{
    contentComponent: props=><SideBar {...props} />
});

export default BasicApp;