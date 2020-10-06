import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Card from './components/Card';

import photo from './assets/perfil.png';

const App = () => {

  function handleSocialNetwork(social_network){
    switch(social_network){
      case 'linkedin':
        Alert.alert('Meu linkedIn','https://linkedin.com/in/gianniresende');
        return
      case 'github':
        Alert.alert('Meu github','https://github.com/gianniresende');
        return
      case 'facebook':
        Alert.alert('Meu facebook','https://facebook.com/gianniresende');
        return
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.containerHeader}>
          <Image style={style.photo} source={photo} />
          <Text style={style.name}>Gianni Alex Resende</Text>
          <Text style={style.office}>Desenvolvedor Mobile</Text>
          <View style={style.socialNetwork}>
            <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
              <Icon name='github' type='feather'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNetwork('facebook')}>
              <Icon name='facebook' type='feather'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
              <Icon name='linkedin' type='feather'/>
            </TouchableOpacity>
          </View>
        </View>
        <Card title="Formação Acadêmica">
          <Text style={style.card_content_text}>
            Análise e Desenvolvimento de Sistemas - Uninter
          </Text>
        </Card>
        <Card title="Experiência Profissional">
          <Text style={style.card_content_text}>
            Taki Brasil
          </Text>
          <Text style={style.card_content_text}>
            Desenvolvedor Web Free Lancer
          </Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30

  },
  page: {
    backgroundColor: "#E7E7E7",
    flex: 1,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  office: {
    color: '#333333',
    marginBottom: 20
  },
  socialNetwork: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginBottom: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  } 
})

export default App;
