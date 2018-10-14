import React, {Component} from 'react';
import {TouchableOpacity, TextInput, Text, View, Image, StyleSheet} from 'react-native';







export default class Form extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = { text: ' ' , text1:''};

    }

    render() {
        return (
            <View >
                <View style={styles.inputBox1}>
                    <TextInput

                        placeholder="ID"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={styles.inputBox2}>
                    <TextInput

                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(text1) => this.setState({text1})}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles=StyleSheet.create({
    inputBox1: {
        width: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ef6700',

    },
    button : {
        width: 100,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginTop: 40,
        marginLeft: 100


    },
    buttonText : {
        borderColor:'#ef6700',
        backgroundColor:'#ef6700',
        color:'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 20


    },
    inputBox2: {
        width: 300,
        borderRadius: 10,
        borderColor: '#ef6700',
        borderWidth: 5,
        marginTop: 10

    }
})