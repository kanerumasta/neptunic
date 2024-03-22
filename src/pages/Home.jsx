import { useEffect, useState } from "react";
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Torch from 'react-native-torch'
import Icon from 'react-native-vector-icons/FontAwesome'
const Header = () => {
    return(
        <View style={{zIndex:10, shadowOffset:{width:-3, height:5}, shadowOpacity:0.4, shadowColor:'black', shadowRadius:3}}  className="p-4 bg-white/10">
            <Text className="text-xl font-black text-center text-white">HEADING</Text>
        </View>
    )
}

const Flashlight = () => {
    const [isOn, setIsOn] = useState(false)
    useEffect(()=>{
        Torch.switchState(isOn)
        
    },[isOn])
    return(<View className="w-screen flex items-center justify-center  h-[500px] ">
        
        <TouchableOpacity onPress={()=>setIsOn(!isOn)}>
            {isOn  ? <Image className="h-40 w-40" source={require('../../public/images/flash-on.png')}/> : <Image className="h-40 w-40" source={require('../../public/images/flash-off.png')}/>}
            
        </TouchableOpacity>
    </View>)
}

const Stopwatch = () => {
    return(<View className="w-screen h-[500px] items-center justify-center">
        <Text className="text-gray-500 text-6xl">00:00:00</Text>
        <View style={{backgroundColor:"#7000b5"}} className="h-20 items-center justify-center w-20 rounded-full">
            <Icon color="#ffffff" size={30} name="play" />
            <Text>play</Text>
        </View>
    </View>)
}
const Compass = () => {
    return(<View className="w-screen items-center justify-center h-[500px] ">
        <View className="h-70 w-70 rounded-full overflow-hidden">
                    <Image className="h-60 w-60" source={require('../../public/images/compass.png')}/>
                    </View>

    </View>)
}



const Tooltab = ({title}) => {
    return(
        <View className="w-[80%] justify-center items-center p-4 absolute bottom-24 left-10  bg-white/50 rounded-full">
           <Text style={{color:"#7000b5"} } className="text-lg font-bold">{title}</Text>
        </View>
    )
}

export default function Home({navigation}){
    const [index, setCurrentIndex] = useState(0)
    const [tool,setTool] = useState("Flashlight")
    const handleScroll = (event)=> {
        var x = event.nativeEvent.contentOffset.x
        const width = event.nativeEvent.layoutMeasurement.width
        var currentIndex = Math.floor(x/width)
        setCurrentIndex(currentIndex)
        }
    useEffect(()=>{
        switch(index){
            case 0:
                setTool("Flashlight")
                break
            case 1:
                setTool("Stopwatch")
                break
            case 2:
                setTool("Compass")
                break
            case 3:
                setTool("anoather")
                break            

        }
    },[index])
    return(
        <View className="h-screen">
            
            <ScrollView onScroll={handleScroll} pagingEnabled style={{flexGrow:0}} showsHorizontalScrollIndicator={false} horizontal>
                <Flashlight />
                <Stopwatch />
                <Compass />
                <Flashlight />
            </ScrollView>
            <Tooltab title={tool}/>
         
        </View>
    )
}