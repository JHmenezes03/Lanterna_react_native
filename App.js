import React, {useState, useEffect }  from "react"
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Torch from 'react-native-torch';
import RNshake from 'react-native-shake';


const APP = () => {
  const [toogle, setToggle] = useState(false); 
  
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

useEffect(()=> {
  //liga o flash do celular 
  Torch.switchState(toogle);
},[toogle]);

useEffect(()=> {
/**
 * quando o celular foi chacoalhado mudaremos
 */

  const subscription = RNshake.addListener(()=>{
    setToggle(oldToggle => !oldToggle)
  });


  //Essa func vai ser chamada quuando o componente for desmentado 

  return () => subscription.remove();
},[]);


  return (
    <View style={toogle ? style.containerLight :  style.container} >
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={ toogle ? style.ligthingOn: style.ligthingOff}
           source ={
             toogle
              ? require('./assets/icons/eco-light.png')
               : require('./assets/icons/eco-light-off.png')
                  }
        /> 
            <Image
              style={style.dioLogo}
              source ={
                toogle
                  ? require('./assets/icons/logo-dio.png')
                  : require('./assets/icons/logo-dio-white.png')
          }
    /> 
    </TouchableOpacity>
  </View>)
};

export default APP;

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : 'black',
    alignItems : 'center',
    justifyContent : 'center',

  },
  containerLight: {
    flex:1,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center',  
  },
  ligthingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width:150,
    height:150,
  },
  ligthingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor : 'white',
    width:150,
    height:150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor : 'white',
    width:250,
    height:250,
  },
 }
)