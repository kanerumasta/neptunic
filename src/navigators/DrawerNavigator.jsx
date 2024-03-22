import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../pages/Home"
import Try from "../pages/Try"

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    console.log('resach drawer')
    
    return(
     
        <Drawer.Navigator screenOptions={{headerShown:true}}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Try" component={Try}/>
        </Drawer.Navigator>

    )
}