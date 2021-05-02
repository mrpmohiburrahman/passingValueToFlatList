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
  import DataBase from '../Data/DataBase'
  
  export default function Shoppin({ route }) {
    
    const { details } = route.params;
    // const results = [{"company": "company1", "gluten": "gluten1", "id": 1, "ingredients": "ingredients1", "name": "name1"}]
    const results = []
    results.push(details)
    // console.log("results in ShoppingList.js === ", results)
    
    const renderItem = ({ item }) => {
      // console.log("item in renderItem === ", item)
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

// export default function ShoppingList({ route }) {
//   const { details } = route.params;

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={details}
//         keyExtractor={(details) => details.id}
//         renderItem={({ details }) => (
//           <View>
//             <Text>{details.id}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
