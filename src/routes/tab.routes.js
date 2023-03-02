import React from "react";
import { View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Tab/Home";
import { Search } from "../screens/Tab/Search";
import { Notification } from "../screens/Tab/Notification";
import { Settings } from "../screens/Tab/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: "#616161",
                tabBarActiveTintColor: "#1FA309",
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    borderTopWidth: 0,
                    backgroundColor: "#F5F5F5",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "700",
                    shadowOpacity: 0.2,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: "Vitrine de Produtos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? (
                                <Ionicons
                                    size={24}
                                    name="home"
                                    color={color}
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            ) : (
                                <Ionicons
                                    size={24}
                                    color={color}
                                    name="home-outline"
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />
            <Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? (
                                <Ionicons
                                    size={24}
                                    name="search-outline"
                                    color={color}
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            ) : (
                                <Ionicons
                                    size={24}
                                    color={color}
                                    name="search-outline"
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />
            <Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? (
                                <Ionicons
                                    size={24}
                                    name="notifications-outline"
                                    color={color}
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            ) : (
                                <Ionicons
                                    size={24}
                                    color={color}
                                    name="notifications-outline"
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />
            <Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? (
                                <Ionicons
                                    size={24}
                                    name={Platform.OS === 'ios' ? "cog-outline" : "settings-outline"}
                                    color={color}
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            ) : (
                                <Ionicons
                                    size={24}
                                    color={color}
                                    name={Platform.OS === 'ios' ? "cog-outline" : "settings-outline"}
                                    style={{
                                        marginTop: 10,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />
        </Navigator>
    );
};
