import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SingIn from "../pages/Singin";
import SingUp from "../pages/SingUp";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator>
        <Auth.Screen name="SingIn" component={SingIn} />
        <Auth.Screen name="SingUp" component={SingUp} />
    </Auth.Navigator>
);

export default AuthRoutes;
