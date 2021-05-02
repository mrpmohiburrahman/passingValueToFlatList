import React from 'react';
import {
    View,
    FlatList,
    Text,
  } from 'react-native';
  
  export default function ShoppingList({ route }) {
    
    const { details } = route.params;
    const itemInfo = []          // const results = [{"company": "company1", "gluten": "gluten1", "id": 1, "ingredients": "ingredients1", "name": "name1"}]
    itemInfo.push(details)
    
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={itemInfo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <View>
                <Text style={{ color: "black" }}>{item.company}</Text>
                <Text style={{ color: "black" }}>{item.name}</Text>
                <Text style={{ color: "black" }}>{item.gluten}</Text>
                <Text style={{ color: "black" }}>{item.id}</Text>
              </View>
            )}
        />
      </View>
    );
  }