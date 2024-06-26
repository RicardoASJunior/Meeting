import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";   
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import { Component } from "react";

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339CFF",
    tabBarInactiveTintColor: "#FFF"
}

const tabs = [
    {
        id: 1,
        name: 'Cadastro',
        component: Principal,
        icon: 'file-tray'
    },
    {
        id: 2,
        name: 'Cadastrados',
        component: Consultas,
        icon: 'search'
    },
    {
        id: 3,
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen 
                key={tab.id}
                name={tab.name} component={tab.component} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={tab.icon} color={color} size={size} />
                    )}} /> )) 
            }
        </Tab.Navigator>
    )
}