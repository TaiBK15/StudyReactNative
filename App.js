import React, { Component, useState } from "react";
import { Text, View, Button, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Avatar } from "./src/components";

//---------------------LESSON 1: Style sheet---------------------
// const reactangle = {
//   width: 100,
//   height: 50,
//   backgroundColor: "yellow"
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   header: {
//     width: 100,
//     height: 20,
//     marginTop: 5,
//     backgroundColor: "pink",
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={reactangle}></View>
//       <View style={styles.header}></View>
//     </View>
//   );
// }


//---------------------LESSON 2: Text, TextInput---------------------
// const textStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputContainer: {
//     width: 200,
//     borderWidth: 1,
//     borderColor: "gray",
//     padding: 4,
//     borderRadius: 3
//   }
// })

// export default function App() {
//   return (
//     <View style={textStyles.container} >
//       <Text>Enter Name:</Text>
//       <TextInput
//         style={textStyles.inputContainer}
//         multiline
//         keyboardType='default'
//         placeholder='input name here' />
//     </View>
//   );
// }


//---------------------LESSON 3: useState, Button---------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// export default function App() {
//   const [name, updateName] = useState('tuan');
//   const [info, setInfo] = useState({ name: 'bin', company: 'KMS' })

//   const clickHandler = () => {
//     updateName('tai')
//     //WAY 1: Brand new info
//     setInfo({ name: "bi", company: 'VNG' })

//     //WAYH 2: Reuse old info
//     setInfo((preInfo) => {
//       return { name: (preInfo.name + "abc"), company: 'VNG' }
//     })
//   }

//   return (
//     <View style={styles.container} >
//       <Image
//         source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
//         style={{ width: 200, height: 200 }}
//       />
//       <Text>My name is {name}</Text>
//       <Text>Your info is {info.name} and work at {info.company}</Text>
//       <View style={{ marginTop: 10 }}>
//         <Button title='update state' onPress={clickHandler} />
//       </View>
//     </View>
//   );
// }


//---------------------LESSON 4: List, Scroll View---------------------
// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'Tuan', key: '1' },
//     { name: 'Tai', key: '2' },
//     { name: 'XHuy', key: '3' },
//     { name: 'QHuy', key: '4' },
//     { name: 'Toan', key: '5' },
//     { name: 'Thanh', key: '6' },
//     { name: 'Bao', key: '7' },
//     { name: 'Hung', key: '8' },
//     { name: 'Chanh', key: '9' },
//     { name: 'Thien', key: '10' },
//     { name: 'Nghia', key: '11' },
//     { name: 'Tuan', key: '12' },
//     { name: 'XHuy', key: '13' },
//     { name: 'QHuy', key: '14' },
//     { name: 'Toan', key: '15' },
//     { name: 'Thanh', key: '16' },
//     { name: 'Bao', key: '17' },
//     { name: 'Hung', key: '18' },
//     { name: 'Chanh', key: '19' },
//     { name: 'Thien', key: '110' },
//     { name: 'Nghia', key: '111' },
//   ]);

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 5,
//       backgroundColor: '#fff'
//     },
//     item: {
//       backgroundColor: 'pink',
//       marginTop: 10,
//       padding: 20,
//       fontSize: 24
//     }
//   });

//   return (
//     <ScrollView style={styles.container}>
//       {
//         people.map(item => {
//           return (<View key={item.key}>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>)
//         })
//       }
//     </ScrollView>
//   );
// }


//---------------------LESSON 5: FlatList, Touchable Components---------------------
export default function App() {
  const [people, setPeople] = useState([
    { name: 'Tuan', id: '1' },
    { name: 'Tai', id: '2' },
    { name: 'XHuy', id: '3' },
    { name: 'QHuy', id: '4' },
    { name: 'Toan', id: '5' },
    { name: 'Thanh', id: '6' },
    { name: 'Bao', id: '7' },
    { name: 'Hung', id: '8' },
    { name: 'Chanh', id: '9' },
    { name: 'Thien', id: '10' },
    { name: 'Nghia', id: '11' },
    { name: 'Tuan', id: '12' },
    { name: 'XHuy', id: '13' },
    { name: 'QHuy', id: '14' },
    { name: 'Toan', id: '15' },
    { name: 'Thanh', id: '16' },
    { name: 'Bao', id: '17' },
    { name: 'Hung', id: '18' },
    { name: 'Chanh', id: '19' },
    { name: 'Thien', id: '110' },
    { name: 'Nghia', id: '111' },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: '#fff'
    },
    item: {
      width: 150,
      backgroundColor: 'pink',
      padding: 20,
      fontSize: 24,
      marginHorizontal: 10,
      marginVertical: 10
    }
  });

  console.log("run app!!!")

  const pressHandler = (id) => {
    console.log("pressHandler " + id)
    setPeople((prePeople) => {
      return prePeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        key={'fl'}
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}