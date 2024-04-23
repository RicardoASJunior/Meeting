import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Titulo } from '../componentes/titulo';
import { Botao } from '../componentes/Botao';
import { Divider, Avatar, ScrollView } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CardConsulta } from '../componentes/CardConsulta';

interface RouteParams {
  novoFornecedor: {
    nome: string;
    endereco: string;
    telefone: string;
    cnpj: string;
    imagem: string;
  };
}

const FornecedorScreen = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [imagem, setImagem] = useState('');
  const [fornecedores, setFornecedores] = useState([]);

  const cadastrarFornecedor = () => {
    if (!/^.{3,}$/.test(nome)) {
      alert('Por favor, insira um nome válido (mínimo de 3 caracteres).');
      return;
    }

    if (!/^.{5,}$/.test(endereco)) {
      alert('Por favor, insira um endereço válido (mínimo de 5 caracteres).');
      return;
    }

    if (!/^(\(\d{2}\)\d{4}-\d{4}|\d{11}|\d{2} \d{9}|\d{2} \d{5} \d{4})$/.test(telefone)) {
      alert('Por favor, insira um número de telefone válido (11 dígitos).');
      return;
    }

    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      alert('Por favor, insira um CNPJ válido.');
      return;
    }

    const novoFornecedor = { nome, endereco, telefone, cnpj, imagem };
    setFornecedores([...fornecedores, novoFornecedor]);
    setNome('');
    setEndereco('');
    setTelefone('');
    setCnpj('');
  };

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissão para acessar a galeria de imagens.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled && resultado.assets.length > 0 && resultado.assets[0].uri) {
      setImagem(resultado.assets[0].uri);
    } else {
      alert('A seleção de imagem foi cancelada ou ocorreu um erro ao obter a imagem.');
    }
  };

  return (
    <ScrollView>
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
        {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
        <Botao onPress={cadastrarFornecedor} mt={4} mb={20}>Cadastrar Fornecedor</Botao>
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
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#0B3B60',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});


