import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native'

import api from '../services/api'

function SpotList({ navigation }) {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/index')
      console.log(response.data)
      setSpots(response.data)
    }
    loadSpots()
  }, [])

  function handleNavigate(id) {
    navigation.navigate('Book', { id })
  }

  return <View styele={styles.container}>
    <Text style={styles.title}><Text style={styles.bold}>Prioridade Alta</Text></Text>
    <FlatList
      style={styles.list}
      data={spots}
      keyExtractor={spot => spot._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[
        {
          key: 'Resgate dos sobreviventes',
          image: 'https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imgmapas_interativos_4_1.jpg?quality=70&strip=all&strip=info'
        }
      ]}
      renderItem={({ item }) => (
        <View style={styles.listItemHigh}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <Text style={styles.mainTitle} key={item}>{item.key}</Text>
          <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
            <Text style={styles.buttonText}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      )}
    />
    <Text style={styles.title}><Text style={styles.bold}>Prioridade Média</Text></Text>
    <FlatList
      style={styles.list}
      data={spots}
      keyExtractor={spot => spot._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[
        { key: 'Recuperação do solo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXEHoVLKKC-3ZKpCJY8qE94pxutP5oc_HDS0V5-hiIKm7o4XS' },
        { key: 'Acionar defesa civil', image: 'https://www.fernandopolis.sp.gov.br/cms/content/files/noticia/1e4cd6539212c0b3eb554d8e4dea8694arte.jpg' },
        { key: 'Distribuição de alimentos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeDx9IFSdImiEIxCRqxz8cVttKO5ox1-abyrcIL0R-Rgq4JpI' },
      ]}
      renderItem={({ item }) => (
        <View style={styles.listItemMedium}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <Text style={styles.mainTitle} key={item}>{item.key}</Text>
          <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
            <Text style={styles.buttonText}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      )}
    />
    <Text style={styles.title}><Text style={styles.bold}>Prioridade Baixa</Text></Text>
    <FlatList
      style={styles.list}
      data={spots}
      keyExtractor={spot => spot._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[
        { key: 'Tratamento de feridos', image: 'https://diariodamanha.com/wp-content/uploads/2019/08/mmedico.jpg' },
        { key: 'Distribuição de alimentos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeDx9IFSdImiEIxCRqxz8cVttKO5ox1-abyrcIL0R-Rgq4JpI' },
      ]}
      renderItem={({ item }) => (
        <View style={styles.listItemLow}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <Text style={styles.mainTitle} key={item}>{item.key}</Text>
          <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
            <Text style={styles.buttonText}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View >
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop: 15
  },

  bold: {
    fontWeight: 'bold',
  },

  list: {
    paddingHorizontal: 20,
  },

  listItemHigh: {
    marginRight: 15,
    backgroundColor: 'rgba(240,90,91,0.9)',
    padding: 10,
    borderRadius: 8,
  },

  listItemMedium: {
    marginRight: 15,
    backgroundColor: 'rgba(255, 215, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
  },

  listItemLow: {
    marginRight: 15,
    backgroundColor: 'rgba(77, 128, 221, 0.9)',
    padding: 10,
    borderRadius: 8,
  },

  mainTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },

  button: {
    height: 32,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  itemImage: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 2
  }
})

export default withNavigation(SpotList)