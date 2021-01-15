import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';


const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
      <SafeAreaView style={style.container}>
          <View style={style.header}>
                <Text style={style.txtHeader}> Selamat Datang Di App Pencarian Destinasi</Text>
          </View>
      <View style={style.view}/>
        <View style={style.Button}>
        <Button
          title={"Jawa Timur"}
          onPress={() => navigation.navigate('Jawa Timur')}
        />
        </View>
        <View style={style.Button}>
        <Button
          title={"Jawa Barat"}
          onPress={() => navigation.navigate('Jawa Barat')}
        />
      </View>
      <View style={style.Button}>
        <Button
          title={"Jawa Tengah"}
          onPress={() => navigation.navigate('Jawa Tengah')}
        />
      </View>
        <View style={style.Button}>
        <Button
          title={"Bali"}
          onPress={() => navigation.navigate('Bali')}
        />
      </View>
      <View style={style.Button}>
        <Button
          title={"Lombok"}
          onPress={() => navigation.navigate('Lombok')}
        />
      </View>
      <View style={style.Button}>
        <Button
          title={"Papua"}
          onPress={() => navigation.navigate('Papua')}
        />
      </View>
      </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'bisque',
      marginVertical : 20,
      marginHorizontal : 20
    },
    Button:{
        padding: 5,
      marginBottom: 10
     
    },
    view:{
      marginTop:10
    
  },
  txtHeader: {
      fontSize: 30,
      textAlign: 'center',
      color: '#fff'
  },
  header: {
      height: 70,
      backgroundColor: 'navy',
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default HomeScreen;