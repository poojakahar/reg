import React, {Component} from 'react';
import { View , Text, Alert} from 'react-native';
//import DD from './DD';
import Button from './../compnent/Button';
import {Dropdown} from 'react-native-material-dropdown';
//import MultiSelect from 'react-native-quick-select';

class newComp extends Component{
    state={value:'',mval:[]};

    onSelectedChange (value) {

        this.setState({value: value});

        console.log('onSelectedChange', value);
    }
    onButtonPress(){
        Alert.alert(this.state.value);
        console.log("Value: " + this.state.value);
        console.log(this);
    }

    onMultiSelectChange(selectedItems)
    {
        this.setState({mval: selectedItems})
    }

    render(){
        console.log('render', this);
        const data=[{value: 'Banana'},{value: 'Mango'},{ value: 'Pear'}];
        debugger;
        return(
            <View>
                <Text> Select Fruit: </Text>
                <Dropdown
                    label='Fruit'
                    data={data}
                    onChangeText={(value,index,data)=>this.onSelectedChange(value)}
                />

                <View>
                    <Button onPress={this.onButtonPress.bind(this)} title='Save'/>
                    <Text style={styles.textStyle}>{this.state.value}</Text>
                </View>
            </View>
        );
    }
}

const styles={
    textStyle:{
        fontSize: 80
    }
}
export default newComp;