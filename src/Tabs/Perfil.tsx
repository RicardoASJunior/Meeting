import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'

import { Titulo } from '../componentes/titulo'

export default function Perfil(){
    return(
        <ScrollView flex={1}> 
            <VStack flex={1} alignItems={'center'} p={5} >
                <Titulo color={'blue.500'}>Meu Perfil</Titulo>

                <Avatar size={'xl'} source={{ uri: "https://avatars.githubusercontent.com/u/112292689?v=4"}} mt={5} />

                <Titulo color={'blue.500'}>Informações Pessoais</Titulo>
                <Titulo fontSize={'lg'} mb={1} >Ricardo Alves</Titulo>
                <Text>20/07/2000</Text>
                <Text>Santa Catarina</Text>

                <Divider mt={5} />

                <Titulo color={'blue.500'} mb={1}>Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Coração</Text>
            </VStack>
        </ScrollView>
    )
}