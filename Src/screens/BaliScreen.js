import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class BaliScreen extends React.Component {
      constructor() {
          super();
          this.state = {
            query: null,
            dataSource:[],
            dataBackup : []
          };
      }

  componentDidMount() {
    var data = [
          {
              "name": "Air Terjun Kanto Lampo",
              "position": "Beng, Kec. Gianyar, Kabupaten Gianyar, Bali 80581",
              "photo": "https://tempatwisatadibali.info/wp-content/uploads/2017/09/Air-Terjun-Kanto-Lampo-Bali.jpg"
          },
          {
              "name": "Air Terjun Bandung (Bandung Waterfall)",
              "position": "Siangan, Kec. Gianyar, Kabupaten Gianyar, Bali 80515",
              "photo": "https://www.balitoursclub.net/wp-content/uploads/2019/05/Objek-wisata-Bandung-Waterfall-di-Gianyar-Bali.jpg"
          },
          {
              "name": "Bukit Mende",
              "position": "Desa Subaya, Kintamani, Kabupaten Bangli, Bali",
              "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/14-1-by-juni_artana-740x555.jpg"
          },
          {
              "name": "Air Terjun Tukad Cepung",
              "position": "Jalan Tembuku, Dusun Penida Kelod, Tembuku, Bangli, Bali",
              "photo": "https://www.kintamani.id/wp-content/uploads/air-terjun-tukad-cepung-bali-4.jpg"
          },
          {
              "name": "Air Terjun Leke-Leke",
              "position": "Antapan, Baturiti, Kabupaten Tabanan, Bali 82191",
              "photo": "https://travel.kitulgoda.co.uk/wp-content/uploads/2019/01/Leke-Leke-waterfall-landscape1024x682-1020x600.jpg"
          },
          {
              "name": "Tukad Melangit, Antugan",
              "position": "Banjar Antugan, Desa Jehem, Kecamatan Tembuku, Kabupaten Bangli, Bali",
              "photo": "https://subbali.com/wp-content/uploads/2018/05/lembah-tukad-melangit-kabupaten-bangli.png"
          },
          {
              "name": "Ngarai Sukawati",
              "position": "Desa Guwang, Kecamatan Sukawati, Kabupaten Gianyar, Bali 80582",
              "photo": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1539601892/yg2vzapuzujymrynje0s.jpg"
          },
          {
              "name": "Angel’s Billabong",
              "position": "Banjar Sumpang, Desa Bunga Mekar, Nusa Penida, Bali",
              "photo": "https://www.tourmurahnusapenida.com/wp-content/uploads/2017/09/angel-billabong.jpg"
          },
          {
              "name": "Pantai Atuh",
              "position": "Pejukutan, Nusa Penida, Kabupaten Klungkung, Bali 80771",
              "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/atuh-beach-740x485.jpg"
          },
          {
              "name": "Secret Gardens of Sambangan",
              "position": "Sambangan, Sukasada, Kabupaten Buleleng, Bali 81161",
              "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/10-c-secret-garden-sambangan-via-princeofparadise-740x740.jpg"
          },
          {
              "name": "Bukit Teletubbies",
              "position": "Tanglad, Nusa Penida, Kabupaten Klungkung, Bali 80771",
              "photo": "https://www.balitoursclub.net/wp-content/uploads/2019/03/Sunset-di-Bukit-Teletubbies-Nusa-Penida.jpg"
          },
          {
            "name": "Air Terjun Peguyangan",
            "position": "Batukandik, Nusa Penida, Kabupaten Klungkung, Bali",
            "photo": "https://www.kintamani.id/wp-content/uploads/air-terjun-peguyangan-nusa-penida-2-1024x682.jpg"
          },
          {
            "name": "Tebing di Pantai Melasti (Ungasan)",
            "position": "No.8, Gg. VIII, Ungasan, South Kuta, Badung Regency, Bali 80234",
            "photo": "https://raskitatour.com/wp-content/uploads/2019/07/Wisata-pantai-melasti-bali.jpg"
          },
          {
            "name": "Gunung Batur",
            "position": "Desa Pinggan, Kintamani, Kabupaten Bangli, Bali",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/20458915646_9c3854459f_b-740x493.jpg"
          },
          {
            "name": "Water Blow Nusa Dua",
            "position": "Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80363",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/18599108974_447eed4de3_b.jpg"
          },
          {
            "name": "Blue Lagoon",
            "position": "Nusa Ceningan, Lembongan, Kabupaten Klungkung, Bali 80871",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/20476298712_06fc63f808_b-740x514.jpg"
          },
          {
            "name": "Pasih Uug",
            "position": "Jalan Batu Nunggul, Nusa Penida, Bali",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/8-1-by-anandagotama-740x555.jpg"
          },
          {
            "name": "Pantai Tegal Wangi",
            "position": "Jalan Pura Tegalwangi, Badung, Jimbaran, Bali",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/19221576345_b57c0b90ec_b-740x740.jpg"
          },
          {
            "name": "Pantai Yeh Leh",
            "position": "Jl. Raya Denpasar – Gilimanuk, Pengeragoan, Pekutatan, Kabupaten Jembrana, Bali",
            "photo": "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2019/06/15356204666_5702a7116b_z.jpg"
          },
          {
            "name": "Diamond Beach",          
            "position": "Pejukutan, Nusa Penida, Kabupaten Klungkung, Bali 80771",
            "photo": "https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/31e9f728e1b0c259a62dbb3b91b7e732.jpg"
        },
      ];

      this.setState({
          dataBackup : data,
          dataSource : data
      });
    }
  
    filterItem = event => {
        var query = event.nativeEvent.text;
        this.setState({
            query : query,
        });
        if (query == '') {
            this.setState({
                dataSource: this.state.dataBackup,
            });
        } else {
            var data = this.state.dataBackup;
            query = query.toLowerCase();
            data = data.filter(l => l.name.toLowerCase().match(query));

            this.setState({
                dataSource: data,
            });
        }
    };

    render(){
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                placeholder = "Cari..."
                placeholderTextColor= "gray"
                value = {this.state.query}
                onChange = {this.filterItem.bind(this)}
                style={styles.input}
                />
            </View>
          <FlatList
            style={{flex:1}}
            data={this.state.dataSource}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.listItem}>
                      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
                      <View style={{alignItems:"center",flex:1}}>
                        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                        <Text>{item.position}</Text>
                      </View>
                    </View>
                );
              }}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'bisque',
      marginTop:60
    },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#FFF",
      width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5,
    },
    header: {
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    input : {
        height: 45,
        width : "90%",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
    }
  });