import { Text,Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps{
    nome: string;
    foto: string;
    data?: string;
}

export function CardConsulta({
    nome,
    foto,
    data,
}:CardProps){
    return(
        <VStack w="94%"  p="5" m={3} borderRadius={'lg'} shadow={2}>
            <VStack flexDir={"row"}>
                <Avatar size={'lg'} source={{ uri: foto}} mt={5} />
                <VStack pl={4}>
                    <Text fontSize={'md'} bold>{nome}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
        </VStack>
    )
}