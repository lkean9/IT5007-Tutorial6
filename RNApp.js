import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { graphql, Mutation, Query } from "react-apollo"
import gql from "graphql-tag"


export default class RNApp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNo: ""
        };
    }

    render() {
        const addReservation = gql`mutation reservationAdd($reservation: ReservationInputs!) {
            reservationAdd(reservation: $reservation) {
                serialNo
                firstName
                lastName
                phoneNo
                timestamp
            }
        }`;

        const reservation = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo,
        };

        return(
            <View style={styles.container}>
                <Mutation mutation={addReservation}>
                    {(addReservationMutation, {data}) => (
                        <View>
                            <Text style={{textAlign: "center", fontSize:15, fontWeight:"bold"}}>Add a Reservation</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="First Name"
                                underlineColorAndroid={"transparent"}
                                onChangeText={(text) => this.setState({firstName: text})}
                            />
                            <TextInput 
                                style={styles.input}
                                placeholder="Last Name"
                                underlineColorAndroid={"transparent"}
                                onChangeText={(text) => this.setState({lastName: text})}
                            />
                            <TextInput 
                                style={styles.input}
                                placeholder="Phone Number"
                                underlineColorAndroid={"transparent"}
                                onChangeText={(text) => this.setState({phoneNo: text})}
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress = {() => addReservationMutation({
                                    variables: {reservation: reservation}
                                })}>
                                <Text style={{fontSize:15, color:"blue", fontWeight:"bold"}}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Mutation>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        fontSize:15,
    },

    input: {
        backgroundColor: '#dddddd',
        height: 40,
        margin: 20,
        marginBottom: 0,
        paddingLeft: 10
    },

    button: {
        margin: 20,
        marginLeft: 100,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        width: 200,
    }
});