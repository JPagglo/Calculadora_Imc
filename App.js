import React, {useState} from "react";  
import { Button } from "react-native";
import { View , Text, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import {} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura/ 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Voce está abaixo do peso!' + imc.toFixed(2));
    }else if(imc >=18.6 && imc <24.9){
      alert('Voce está no peso ideal!' + imc.toFixed(2));
    }else if (imc >=24.9 && imc <34.9){
      alert('Voce esta acima do peso!' + imc.toFixed(2));
    }
  }

  return(
    <View style={style.container}>
      <Text style={style.titulo}>Calcule seu IMC</Text>

      <TextInput
      style={style.input}
      valeu={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />
      <TextInput
      style={style.input}
      valeu={altura}
      onChangeText={(altura)=>setAltura(altura)}
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={style.button}
      onPress={handleSubmit}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
  },
  titulo:{
    textAling: 'center',
    marginTop: 120,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin:15,
    padding:10,
    color:'#FFF',
    fontSize: 23,
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10
  },

}
);