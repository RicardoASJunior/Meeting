import React from 'react';
import { ScrollView, Text } from 'native-base';
import { CardConsulta } from '../componentes/CardConsulta';
import { useRoute } from '@react-navigation/native';

// Defina um tipo para os parâmetros da rota
interface RouteParams {
  novoFornecedor: {
    nome: string;
    endereco: string;
    telefone: string;
    cnpj: string;
    imagem: string;
  };
}

export default function Consultas(){
    const route = useRoute();
    // Use o tipo definido para acessar os parâmetros da rota
    const { novoFornecedor } = route.params as RouteParams;

    return(
        <ScrollView flex={1}>
            <Text>
                Consulta
            </Text>
            <CardConsulta 
                nome={novoFornecedor.nome}
                endereco={novoFornecedor.endereco}
                telefone={novoFornecedor.telefone}
                cnpj={novoFornecedor.cnpj}
                imagem={novoFornecedor.imagem}
            />
        </ScrollView>
    )
}