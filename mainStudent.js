import React from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Button
} from "react-native";
import * as Font from "expo-font";
import { LineChart, Path } from "react-native-svg-charts";
import { Line } from "react-native-svg";
import * as shape from "d3-shape";

import { Block, Text } from "./components";
import * as theme from "./theme";
import * as mocks from "./mocksStudents";
import { HeaderTitle } from "@react-navigation/stack";
import Navigation from "./src/config/Navigation";
import { auth, db } from './firebase';
import Login from './Login';
import * as firebase from 'firebase';
import { useLinkProps } from '@react-navigation/native';
import { requests } from "./mocks";
import Start from './Start'



class Main extends React.Component {
    state = {
        fontsLoaded: false
    };






    loadFonts() {
        return Font.loadAsync({
            "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
            "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
            "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
            "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
            "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
        });
    }

    async componentDidMount() {
        await this.loadFonts();
        this.setState({ fontsLoaded: true });
    }

    renderChart() {
        const { chart } = this.props;
        const LineShadow = ({ line }) => (
            <Path
                d={line}
                fill="none"
                stroke={theme.colors.primary}
                strokeWidth={7}
                strokeOpacity={0.07}
            />
        );


    }

    renderHeader() {
        const { user } = this.props;

        return (
            <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
                <Block flex={false} row style={{ paddingVertical: 15 }}>
                    <Block center>
                        <Text h3 white style={{ marginRight: -(5 + 5), marginTop: 10 }}>
                            Welcome to Student Panel
            </Text>
                    </Block>

                </Block>
                <Block card shadow color="white" style={styles.headerChart}>
                    <Block row space="between" style={{ paddingHorizontal: 30 }}>
                        <Block flex={false} row center>
                            <Text h3>Name</Text>

                        </Block>
                        <Block flex={false} row center>

                            <Text h3>Program</Text>
                        </Block>
                    </Block>
                    <Block
                        flex={0.5}
                        row
                        space="between"
                        style={{ paddingHorizontal: 30 }}
                    >
                        <Text caption light>
                            Athar Rasool
            </Text>
                        <Text caption light>
                            BSCS
            </Text>


                    </Block>
                    <Block flex={1}>{this.renderChart()}</Block>
                </Block>
            </Block>
        );
    }

    renderRequest(request) {
        return (
            <Block row card shadow color="white" style={styles.request} >
                <Block
                    flex={0.25}
                    card
                    column
                    color="secondary"
                    style={styles.requestStatus}
                >
                    <Block flex={0.25} middle center color={theme.colors.primary} >
                        <Text small white style={{ textTransform: "uppercase" }} onPress={() => { Alert.alert("Apply Here", request.link) }} >
                            {request.vacancy}
                        </Text>
                    </Block>
                    <Block flex={0.7} center middle >
                        <Text h4 white >
                            {request.name}
                        </Text>
                    </Block>
                </Block>
                <Block flex={0.75} column middle>
                    <Text h3 style={{ paddingVertical: 8 }} onPress={() => { Alert.alert("Apply Here", request.link) }} >
                        {request.jobtype}
                    </Text>
                    <Text caption semibold>
                       Timing : {request.hours} • {"\n"}
                       Hours : {request.timing} • {"\n"}
                        Salary : {request.salary} • {"\n"}
                        City : {request.city} • {"\n"}
                        Experience : {request.req} {"\n"}
                    </Text>
                </Block>
            </Block>
        );
    }






    renderRequests() {
        const { requests } = this.props;

        return (
            <Block flex={0.8} column color="gray2" style={styles.requests}>
                <Block flex={false} row space="between" style={styles.requestsHeader}>
                    <Text light style={{ color: 'white', }}>All Companies</Text>
                    <Button title='Log Out' onPress={() => this.props.navigation.navigate('Start')} style={styles.logout} /> 
                </Block>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    {requests.map(request => (
                        <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
                            {this.renderRequest(request)}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Block>

        );
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <Block center middle>
                    
                </Block>
            );
        }

        return (
            <SafeAreaView style={styles.safe}>
                {this.renderHeader()}
                {this.renderRequests()}
            </SafeAreaView>
        );
    }
}

Main.defaultProps = {
    user: mocks.user,
    requests: mocks.requests,
    chart: mocks.chart
};


export default Main;

// const signOutUser = (props)=>{
//     auth.signOut().then(()=>{
//         // navigation.replace('Login');
//         props.navigation.navigate("Login");
//     })
// }

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.black
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },

    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1,
        backgroundColor: 'black'
    },
    requestsHeader: {
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    requestStatus: {
        marginRight: 20,
        overflow: "hidden",
        height: 90,
        backgroundColor: 'red'
    },
    logout:{
            marginTop:40
    }
});