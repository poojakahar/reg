import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Header=({title})=>{
    const {headerContainerStyle,headerStyle,imageStyle}=styles;

    return(
        <ImageBackground source={require('./wallpaper.jpg')} style={imageStyle} blurRadius={6}>
            <View style={headerContainerStyle}>
                <Text style={headerStyle}>{title}</Text>
            </View>
        </ImageBackground>
    );
};

const styles={
    imageStyle:{
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        shadowColor: '#ddd',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0,height: 2},
        elevation: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "#FFFFFF50"
        //opacity: 0.8
    },
    headerContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'transparent'
    },
    headerStyle:{
        color: '#ffffff',
        fontSize: 40,
        fontWeight: '700',
        paddingTop: 10,
        opacity: 1.0
    }
};

export default Header;