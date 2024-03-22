import { SafeAreaView, StatusBar, Text, View } from "react-native";
import MainNavigator from "./src/navigators/MainNavigator";
import { BGCOLORS } from "./src/constants";
import 'react-native-gesture-handler'
export default function App(){
    console.log("app")
    return(
      <SafeAreaView className="h-screen">
        <StatusBar backgroundColor={BGCOLORS.primary}/>
        <MainNavigator />
      </SafeAreaView>
    )
}