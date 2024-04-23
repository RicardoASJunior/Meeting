import { Image, VStack, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/titulo';
import { Botao } from './componentes/Botao';
import Tabs from './Tabs';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={'center'} p={5}>
      <Image source={Logo} alt="Logo" />

     <Titulo>
      Faça Login em sua conta
     </Titulo>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
            placeholder='Insira seu endereço de email'
            size={'lg'}
            w={'100%'}
            borderRadius={'lg'}
            bgColor={'gray.100'}
            shadow={3}
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder='Insira sua senha'
            size={'lg'}
            w={'100%'}
            borderRadius={'lg'}
            bgColor={'gray.100'}
            shadow={3}
          />
        </FormControl>
      </Box>

      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={8}>

        <Text>Ainda não tem conta?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color={'blue.500'}>
            Faça o seu Cadastro!
          </Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}