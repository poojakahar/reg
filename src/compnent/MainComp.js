import React,{Component} from 'react';
import { View,Text,Alert, ScrollView,Image } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Button from './Button';
import Header from './Header';
import Card from './Card';
import CardSection from './CardSection';
import NavigationDrawer from './NavigationDrawer';

class MainComp extends Component
{
    app=StackNavigator({
        Home: {screen: MainComp},
        Profile: {screen: NavigationDrawer}
    });

    render(){
        return(
            <View>
                <Button onPress={()=>navigate('Profile')}/>
                <View>
                    <Header title='Sarika Restaurant'/>
                </View>
                <ScrollView style={styles.scrollStyle}>
                    <Card>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Menu </Text>
                        </CardSection>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Cart </Text>
                        </CardSection>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Reservation </Text>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Gallery </Text>
                        </CardSection>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> News </Text>
                        </CardSection>
                        <CardSection>
                            <Image source={require('./wallpaper.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Location </Text>
                        </CardSection>
                    </Card>

                </ScrollView>
            </View>
        );
    }
}

const styles={
    scrollStyle:{
        flex:-1
    },

    imageStyle:{
        height: '80%',
        width: '100%',
        opacity: 0.8
    },

    imageContentStyle:{
        fontWeight: '600',
        color:'#383838',
        fontSize: 20,
        alignSelf : 'center'
    }
}
export default MainComp;