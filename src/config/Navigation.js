import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../Start';
import adminLogin from '../../adminLogin';
import studentLogin from '../../studentLogin';
import companyLogin from '../../companyLogin';
import RegisterScreen from '../../RegisterScreen';
import mainStudent from '../../mainStudent';
import mainCompany from '../../mainCompany';
import mainAdmin from '../../mainAdmin';
import mainAdminStudents from '../../mainAdminStudents';
import mainAdminCompany from '../../mainAdminCompany';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
                <Stack.Screen options={{ headerShown: false }} name="adminLogin" component={adminLogin} />
                <Stack.Screen options={{ headerShown: false }} name="studentLogin" component={studentLogin} />
                <Stack.Screen options={{ headerShown: false }} name="companyLogin" component={companyLogin} />
                <Stack.Screen options={{ headerShown: false }} name="mainStudent" component={mainStudent} />
                <Stack.Screen options={{ headerShown: false }} name="mainCompany" component={mainCompany} />
                <Stack.Screen options={{ headerShown: false }} name="mainAdmin" component={mainAdmin} />
                <Stack.Screen options={{ headerShown: false }} name="mainAdminStudents" component={mainAdminStudents} />
                <Stack.Screen options={{ headerShown: false }} name="mainAdminCompany" component={mainAdminCompany} />
                <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;