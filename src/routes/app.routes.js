import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName="tabroutes"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="tabroutes" component={TabRoutes} />

        </Navigator>
    );
};
