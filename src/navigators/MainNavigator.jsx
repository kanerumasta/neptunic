import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../pages/IntroScreen";

import { SCREENS } from "../constants";
import DrawerNavigator from "./DrawerNavigator";

const StackNavigation = createNativeStackNavigator()

export default function MainNavigator(){
    console.log("mainnav")
    return(
        <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{headerShown:false}}>
                <StackNavigation.Screen name={SCREENS.intro} component={IntroScreen}/>
      
                <StackNavigation.Screen name="main" component={DrawerNavigator}/>
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}