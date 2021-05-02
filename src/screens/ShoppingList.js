import React from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
  } from 'react-native';
  
  export default function Shoppin({ route }) {
    
    const { details } = route.params;
    const results = []          // const results = [{"company": "company1", "gluten": "gluten1", "id": 1, "ingredients": "ingredients1", "name": "name1"}]
    results.push(details)
    
    const renderItem = ({ item }) => {
      return (
        <View>
          <TouchableOpacity
            style={{
              marginLeft: 20,
              marginRight: 20,
              elevation: 3,
              backgroundColor: "black",
              borderRadius: 10,
            }}
            >
            <View style={{ margin: 10 }}>
              <Text style={{ color: "white" }}>{item.company}</Text>
              <Text style={{ color: "white", fontWeight: '700' }}>
                {item.name}
              </Text>
              <Text style={{ color: "white" }}>{item.gluten}</Text>
              <Text style={{ color: "white" }}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        
        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            data={results}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      
      </View>
    
    );
  }