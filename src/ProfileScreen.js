import React from 'react';
import Button from './compnent/Button';

class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
    });
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}

export default ProfileScreen;