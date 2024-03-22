import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BGCOLORS, FGCOLORS, SCREENS } from "../constants";
import { useState } from "react";

function First(){
    return(
        <View style={{backgroundColor:"#7000b5"}} className="w-screen h-[80%] flex items-center justify-center">
                <Image className="w-60 h-60" source={require('../../public/images/logo.png')}/>
            <Text style={{fontFamily:'Rowdies'}} className={`text-3xl font-bold text-white`}>Neptun<Text className="text-red-400">i</Text>c</Text>
            <Text style={{fontStyle:"italic"}}>Your tools on the go</Text>
            <Text className="text-4xl w-full text-center uppercase text-white mt-8 font-black italic">welcome</Text>
        </View>
    )
}

function Second(){
    return(
    <View style={{backgroundColor:"#7000b5"}} className="w-screen h-[80%] flex items-center justify-center">
   <Text className="text-xl w-full text-left px-10 mb-6">What is your name?</Text>
   <View className="h-16 flex justify-center rounded-md px-2 w-[80%] bg-white">
    <TextInput placeholderTextColor={"gray"} placeholder="Type your name here" className="text-black text-xl" />
   </View>
</View>
    )
}

function Third({nav}){
    return(
        <View>
    <View style={{backgroundColor:"#ffffff",borderBottomLeftRadius:100}} className="w-screen h-[50%] flex items-center justify-center">
   <Text style={{color:"#7000b5"}} className="text-4xl w-full text-left px-10 mb-6">Hi Mac,</Text>
   <Text style={{color:"#7000b5", opacity:0.7}} className="text-xl w-full text-left px-10 mb-6">Welcome to Neptunic where all tools are available on the go</Text>
 
</View>
<TouchableOpacity onPress={()=>nav.navigate('main')} className="bg-white flex items-center justify-center mt-28 w-[50%] mx-auto rounded-full p-4">
    <Text className="text-2xl font-bold" style={{color:"#7000b5",elevation:5}}>Get Started</Text>
   </TouchableOpacity>
</View>
    )
}

export default function IntroScreen({navigation}){
    const [currentPage, setCurrentPage] = useState(0);
    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;      
        const pageWidth = event.nativeEvent.layoutMeasurement.width;
        const newPage = Math.floor(contentOffsetX / pageWidth);
        setCurrentPage(newPage);
        
      };
    return(
        <View  style={{backgroundColor:"#7000b5"}}  className="h-screen">
            <ScrollView onScroll={handleScroll}
      scrollEventThrottle={1} pagingEnabled className="w-full" showsHorizontalScrollIndicator={false} horizontal>
             <First />
             <Second/>
             <Third nav={navigation}/>

            </ScrollView>
            
            <View className="flex-row absolute left-[40%] bottom-8">
                <View className={`h-4 w-4 ${currentPage === 0 ? 'bg-red-400' :'bg-white'} mr-6 rounded-full`}></View>
                <View className={`h-4 w-4 ${currentPage === 1 ? 'bg-red-400' :'bg-white'} mr-6 rounded-full`}></View>
                <View className={`h-4 w-4 ${currentPage === 2 ? 'bg-red-400' :'bg-white'} mr-6 rounded-full`}></View>
            </View>
           
        </View>
    )
}