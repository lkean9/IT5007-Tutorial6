import React, { Component } from "react";
import { ActivityIndicator, TextInput, View, Text } from "react-native";
import RNApp from "./RNApp";
import { ApolloProvider, Query, Muattion, graphql } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({ uri: "http://192.168.1.68:2021/graphql" });

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                < Text style={{textAlign: "center", fontSize:15, fontWeight:"bold"}}>California Waitlist Management System</Text>
                <View>
                    <Text>
                        In the App.js, update the uri according to your IPV4 address, activate the server and mongoDB which were set up in the Tutorial 5.
                    </Text>

                    <Text/>
                    <Text>
                        Then provide the input below, click "Add". No info will pop up here but the reservation will be added to the database. You can find the reservation in the web localhost:2021 after rerenshing the website. You can go to the graphql playground to query the item as well.
                    </Text>
                </View>
                < RNApp />
            </ApolloProvider>
        );
    }
}
