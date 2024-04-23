import { border } from 'native-base/lib/typescript/theme/styled-system';
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Titulo } from '../componentes/titulo'
import { Botao } from '../componentes/Botao';
import { Divider, Avatar, ScrollView } from 'native-base'
import * as ImagePicker from 'expo-image-picker';

const FornecedorScreen = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [imagem, setImagem] = useState('');
  const [fornecedores, setFornecedores] = useState([]);

  const cadastrarFornecedor = () => {
    // Verificação de regex para validar o nome
    if (!/^.{3,}$/.test(nome)) {
      alert('Por favor, insira um nome válido (mínimo de 3 caracteres).');
      return;
    }

    // Verificação de regex para validar o endereço
    if (!/^.{5,}$/.test(endereco)) {
      alert('Por favor, insira um endereço válido (mínimo de 5 caracteres).');
      return;
    }

    // Verificação de regex para validar o telefone
    if (!/^(\(\d{2}\)\d{4}-\d{4}|\d{11}|\d{2} \d{9}|\d{2} \d{5} \d{4})$/.test(telefone)) {
      alert('Por favor, insira um número de telefone válido (11 dígitos).');
      return;
    }

    // Verificação de regex para validar o CNPJ
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      alert('Por favor, insira cnpj válido!');
      return;
    }
    
    const novoFornecedor = { nome, endereco, telefone,cnpj };
    setFornecedores([...fornecedores, novoFornecedor]);
    setNome('');
    setEndereco('');
    setTelefone('');
    setCnpj('');
  };

  // Função para formatar o número de telefone
  const formatarTelefone = (telefone: String) => {
    // Remove todos os caracteres não numéricos do número de telefone
    const numeroLimpo = telefone.replace(/\D/g, '');
    if (numeroLimpo.length === 11) {
      // Se o número tem 11 dígitos, formato: 99999999999
      return numeroLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const formatarCNPJ = (cnpj) => {
    // Remove todos os caracteres não numéricos do CNPJ
    const cnpjLimpo = cnpj.replace(/\D/g, '');
  
    // Formatar o CNPJ de acordo com o formato desejado
    return cnpjLimpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  const selecionarImagem = async () => {
    // Solicita permissão ao usuário para acessar a galeria de imagens
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissão para acessar a galeria de imagens.');
      return;
    }
  
    // Abre a galeria de imagens para o usuário selecionar uma imagem
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    // Verifica se o usuário selecionou uma imagem e se o resultado é válido
    if (!resultado.canceled && resultado.assets.length > 0 && resultado.assets[0].uri) {
      // A imagem foi selecionada
      setImagem(resultado.assets[0].uri);
    } else {
      // O usuário cancelou a seleção da imagem ou o resultado não é válido
      alert('A seleção de imagem foi cancelada ou ocorreu um erro ao obter a imagem.');
    }
  };

  return (
    <ScrollView >
      <View style={styles.container}>
        <Titulo color={'blue.500'} mb={10}>Cadastro de Fornecedores</Titulo>

        <Divider mb={10} />

        <Text style={styles.label}>Nome:</Text>
        <TextInput 
          style={[styles.input, { marginTop: 10 }]}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="(xx)xxxxx-xxxx"
          value={telefone}
          onChangeText={setTelefone}
        />
        <Text style={styles.label}>CNPJ:</Text>
        <TextInput
          style={styles.input}
          placeholder="xx.xxx.xxx/xxxx-xx"
          value={cnpj}
          onChangeText={setCnpj}
        />
        <TouchableOpacity onPress={selecionarImagem} style={styles.botao}>
          <Text style={styles.label}>Selecionar Imagem</Text>
        </TouchableOpacity>
        {/* Exibir a imagem selecionada */}
        {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
        <Botao onPress={cadastrarFornecedor} mt={4} mb={20}>Cadastrar Fornecedor</Botao>
        
        <FlatList
          data={fornecedores}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.endereco}</Text>
              <Text>{formatarTelefone(item.telefone)}</Text>
              <Text>{formatarCNPJ(item.cnpj)}</Text>
              <Avatar>{item.imagem}</Avatar>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginTop: 1,
    textAlign: 'left', // Alinha o texto à esquerda
    alignSelf: 'flex-start', // Alinha o texto à esquerda
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  botao: { // Adicionando a propriedade 'botao'
    backgroundColor: '#0B3B60',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
;
export default FornecedorScreen;