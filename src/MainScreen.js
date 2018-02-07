import React from 'react';
import {View} from 'react-native';
import Button from './compnent/Button';

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <Button title='Menu' onPress={()=>navigate("DrawerOpen")}/>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })}
            />
            </View>
        );
    }
}

export default MainScreen;