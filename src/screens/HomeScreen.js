import React, { useState } from 'react';
import {
    View,
    TextInput,
    FlatList,
    Text,
    TouchableOpacity,
    Linking,
    Modal,
    ScrollView,
  } from 'react-native';
  // import { useTheme } from '../Data/ThemeContext';
  import DataBase from '../Data/DataBase'
  // import DataBase from './src/Data/DataBase';
  
  import Octicons from 'react-native-vector-icons/Octicons';
  
  export default function Home({ navigation }) {
    const [search, setSearch] = useState('');
    const [masterDataSource] = useState(DataBase);
    const [modalVisible, setModalVisible] = useState(false);
    const [details, setDetails] = useState('');
  
    // const { colors } = useTheme();
  
    const filteredDataSource = masterDataSource.filter((item) => {
      return (
        item.name.includes(search) ||
        (item.id && item.id.includes(search)) ||
        (item.gluten && item.gluten.includes(search)) ||
        (item.company && item.company.includes(search))
      );
    });
  
    const itemSeparatorComponent = () => {
      return (
        <View
          style={{
            margin: 3,
          }}></View>
      );
    };
  
    const emptyComponent = () => {
      return (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "black" }}>Finns inte produkten med?</Text>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => Linking.openURL('mailto:celiakiskanner@gmail.com')}>
              <Text
                style={{
                  color: "black",
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: "grey",
                }}>
                KONTAKTA OSS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    const renderItem = ({ item }) => {
      return (
        <View>
          <TouchableOpacity
            style={{
              marginLeft: 20,
              marginRight: 20,
              elevation: 3,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
            onPress={() => {
              setModalVisible(true);
              setDetails(item);
            }}>
            <View style={{ margin: 10 }}>
              <Text style={{ color: "black" }}>{item.company}</Text>
              <Text style={{ color: "black", fontWeight: '700' }}>
                {item.name}
              </Text>
              <Text style={{ color: "black" }}>{item.gluten}</Text>
              <Text style={{ color: "black" }}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Modal
          animationType="none"
          hardwareAccelerated={true}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}>
            <View
              style={{
                backgroundColor: "grey",
                padding: 35,
                borderRadius: 10,
                width: '80%',
                height: '80%',
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ color: "black" }}>{details.company}</Text>
                  <Text
                    style={{ color: "black", marginTop: 20, fontSize: 20 }}>
                    {details.name}
                  </Text>
                  <Text style={{ color: "black", marginTop: 20 }}>
                    {details.gluten}
                  </Text>
                  <Text style={{ color: "black", marginTop: 20 }}>
                    Ingredienser
                  </Text>
                  <Text style={{ color: "black", marginTop: 2 }}>
                    {details.ingredients}
                  </Text>
                  <Text style={{ color: "black", marginTop: 30 }}>
                    {details.id}
                  </Text>
                </View>
              </ScrollView>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: "black",
                  marginBottom: 10,
                }}></View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Text
                  onPress={() =>{
                    setModalVisible(false);
                    navigation.navigate('ShoppingList', {
                      details,
                    })
                    }
                  }>
                  Add to Shopping list
                  {/* Lägg I Inköpslistan */}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={{ alignSelf: 'center', color: '#FF0000' }}>
                    close (Stäng)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: "white",
            elevation: 12,
          }}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            placeholder="placeholder" // " SÖK PRODUKT NAMN / STRECKKOD"
            placeholderTextColor="#000"
            onChangeText={(text) => setSearch(text)}
            value={search}
            autoCapitalize="words"
          /> 
          <Octicons
            style={{
              marginLeft: 1,
              padding: 13,
              backgroundColor: '#fff',
              height: 49,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
            name="checklist"
            size={25}
            color="#000"
            onPress={() => navigation.navigate('Inköpslista')}
          />
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            data={filteredDataSource}
            ItemSeparatorComponent={itemSeparatorComponent}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            initialNumToRender={4}
            maxToRenderPerBatch={5}
            windowSize={10}
            removeClippedSubviews={true}
            updateCellsBatchingPeriod={100}
            showsVerticalScrollIndicator={true}
            ListEmptyComponent={emptyComponent}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      
      </View>
    
    );
  }