import React from 'react';
import {View, Text} from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
};

const styles={
    cardStyle:{
        borderColor: '#fdfdfd',
        borderRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset:{ width: 0, height: 1},
        shadowColor: '#c7c7c7',
        flexDirection: 'column',
        margin: 5,
        height: 150,
        width: 113
    }
};

export default CardSection;