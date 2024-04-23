import { Text,Avatar, VStack, ScrollView } from 'native-base'
import { Botao } from './Botao'

interface CardProps{
    nome: string;
    endereco: string;
    telefone: string;
    cnpj: string;
    imagem?: string;
}

export function CardConsulta({
    nome,
    endereco,
    telefone,
    cnpj,
    imagem,
}:CardProps){
    return(
        <ScrollView w="94%"  p="5" m={3} borderRadius={'lg'} shadow={2}>
            <VStack flexDir={"row"}>
                <Avatar size={'lg'} source={{ uri: imagem}} mt={5} />
                <VStack pl={4}>
                    <Text fontSize={'md'} bold>{nome}</Text>
                    <Text>{endereco}</Text>
                    <Text>{telefone}</Text>
                    <Text>{cnpj}</Text>
                </VStack>
            </VStack>
        </ScrollView>
    )
}