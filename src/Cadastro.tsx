import { Image, VStack, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView } from 'native-base';
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { useState } from 'react';
import { Botao } from './componentes/Botao';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if (numSecao < secoes.length-1){
      setNumSecao(numSecao+1)
    }
  }
  function voltarSecao(){
    if (numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alignSelf={"center"} alt="Logo Voll" size={'xl'}/>

     <Titulo>
      {secoes[numSecao].titulo}
     </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      <Box>
      {numSecao==2 && <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'} mt={2} mb={2}>
          Selecione o plano:
        </Text>}
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value} >{checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      {numSecao>0 && <Botao onPress={() => voltarSecao()} bgColor={'gray.400'}>Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>

    </ScrollView>
  );
}