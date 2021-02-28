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
import * as mocks from "./mocksCompany";
import { HeaderTitle } from "@react-navigation/stack";
import Navigation from "./src/config/Navigation";
import { auth, db } from './firebase';
import Login from './Login';
import * as firebase from 'firebase';
import { useLinkProps } from '@react-navigation/native';
import { requests } from "./mocks";
import Start from './Start'


const signOutUser = (props)=>{
    auth.signOut().then(()=>{
        this.props.navigation.replace('Start');
        // this.props.navigation.navigate("Start");
    })
}


class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
      }
    
    
    
    
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
                            All Students Details 
            </Text>
            
                    </Block>

                </Block>
                <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.wallpapersafari.com/desktop/1920/1080/34/45/dmirWc.jpg',
          height:150,width:"100%"
        }}
      />

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
                        <Text small white style={{ textTransform: "uppercase" }} >
                            {request.program}
                        </Text>
                    </Block>
                    <Block flex={0.7} center middle >
                        <Text h4 white >
                            {request.qualifications}
                        </Text>
                    </Block>
                </Block>
                <Block flex={0.75} column middle>
                    <Text h3 style={{ paddingVertical: 8 }}  >
                        {request.name}
                    </Text>
                    <Text caption semibold>
                       University : {request.uni} • {"\n"}
                       Skills : {request.skills} • {"\n"}
                        Experience : {request.experience} • {"\n"}
                        Status : {request.status} • {"\n"}
                        
                    </Text>
                    <Button title='Edit' onPress={()=>alert("Error 404")}></Button>
                    <Text>

                    </Text>
                    <Button title='Delete' onPress={()=>alert("Deleted")} ></Button>
                </Block>
            </Block>
        );
    }






    renderRequests() {
        const { requests } = this.props;

        return (
            <Block flex={0.8} column color="gray2" style={styles.requests}>
                <Block flex={false} row space="between" style={styles.requestsHeader}>
                    <Text light style={{ color: 'white', }}>All Students</Text>
                    <Button title='Back' onPress={() => this.props.navigation.navigate('mainAdmin')} ></Button>
                    <Button title='Log Out' onPress={() => this.props.navigation.navigate('Start')} ></Button>

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
    }
});