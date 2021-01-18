import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class PapuaScreen extends React.Component {
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
              "name": "Raja Ampat",
              "position": "Pulau Waigeo, Raja Ampat, Sorong, Papua Barat",
              "photo": "https://pix10.agoda.net/hotelImages/297/2978602/2978602_17102601090058334194.jpg?s=1024x768"
          },
          {
              "name": "Pantai Base G",
              "position": "Tj. Ria, Jayapura Utara, Kota Jayapura, Papua.",
              "photo": "https://jejakpiknik.com/wp-content/uploads/2017/04/16@pacetokikasar-630x380.jpg"
          },
          {
              "name": "Pantai Batu Picah",
              "position": "Sor, Biak Utara, Kabupaten Biak Numfor, Papua 98157",
              "photo": "https://media-cdn.tripadvisor.com/media/photo-s/17/46/40/5f/pantai-batu-picah.jpg"
          },
          {
              "name": "Pegunungan Foja",
              "position": "Yamben / Beneraf, Kec. Pantai Tim., Kabupaten Sarmi, Papua",
              "photo": "https://jejakpiknik.com/wp-content/uploads/2017/04/19@tinarafiah4-630x380.jpg"
          },
          {
              "name": "Danau Paniai",
              "position": "Mogeya, Paniai Bar., Kabupaten Paniai, Papua",
              "photo": "https://jejakpiknik.com/wp-content/uploads/2017/04/22@pesonanusantaraku-630x380.jpg"
          },
          {
              "name": "Air Terjun Karmon",
              "position": "Karmon, Yawosi, Kabupaten Biak Numfor, Papua 98157",
              "photo": "https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2019/07/020207071111/air-terjun-karmon-1-1024x1024.jpg"
          },
          {
              "name": "Danau Idenberg",
              "position": "Grasberg Mine, Dogomo, Dumadama, Paniai Regency, Papua 98972",
              "photo": "https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2019/07/020207075656/idenberg-1-1024x683.jpg"
          },
          {
              "name": "Danau Uter",
              "position": "Korom, Aitinyo, Kabupaten Maybrat, Papua Bar. 98463",
              "photo": "https://sgp1.digitaloceanspaces.com/tz-mag-id/wp-content/uploads/2019/07/020207070707/uter-1-1024x850.jpg"
          },
          {
              "name": "Pulau Um",
              "position": "Malaumkarta, Makbon, Sorong, Papua Bar.",
              "photo": "https://jejakpiknik.com/wp-content/uploads/2017/04/28@cerita_papua-630x380.jpg"
          },
          {
              "name": "Tanjung Kasuari",
              "position": "Sorong, Papua Barat",
              "photo": "https://3.bp.blogspot.com/-fRymVWailKo/Wifgw61TGwI/AAAAAAAAA9g/hZ-DnHQrBhAXJKZAU44SbUFiECxE_qVbACEwYBhgL/s1600/DSC_0023.JPG"
          },
          {
              "name": "Air Terjun Kiti-Kiti",
              "position": "Kec. Fakfak, Kabupaten Fakfak, Papua Bar.",
              "photo": "https://i.misteraladin.com/blog/2019/07/12153314/air-terjun-kiti-kiti-2.jpg"
          },
          {
            "name": "Pegunungan Arfak",
            "position": "Manokwari, Papua",
            "photo": "https://bisniswisata.co.id/wp-content/uploads/2017/09/pegunungan-arfak.jpg"
          },
          {
            "name": "Danau Love (Danau Imfote)",
            "position": "Atabar, Ebungfau, Jayapura, Papua 99359",
            "photo": "https://cdn-image.hipwee.com/wp-content/uploads/2019/03/hipwee-40430729_2107401162605365_7283910254618967947_n-1080x630.jpg"
          },
          {
            "name": "Teluk Triton Kaimana",
            "position": "Saria, Kec. Kaimana, Kabupaten Kaimana, Papua Bar. 98654",
            "photo": "https://1001indonesia.net/asset/2018/09/Teluk-Triton-Kaimana.jpg"
          },
          {
            "name": "Teluk Youtefa",
            "position": "Enggros, Wai Mhorock, Abepura, Kota Jayapura, Papua",
            "photo": "https://picture.triptrus.com/image/2017/10/teluk-youtefa-1.jpeg"
          },
          {
            "name": "Danau Sentani",
            "position": "Desa Ayapo, Sentani, Papua",
            "photo": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/05/12/1594330261.jpg"
          },
          {
            "name": "Puncak Trikora",
            "position": "Trikora, Tagineri, Kabupaten Jayawijaya, Papua",
            "photo": "https://dananwahyu.files.wordpress.com/2013/07/61.jpg?w=640"
          },
          {
            "name": "Pantai Pasir Putih Papua",
            "position": "Pasir Putih, Manokwari Bar., Kabupaten Manokwari, Papua Bar. 98313",
            "photo": "https://2.bp.blogspot.com/-Wuky3tuegHw/Us4-DB_dRLI/AAAAAAAAALk/aoug8C5p70Y/s1600/Pasir+Putih+Manokwari.jpg"
          },
          {
            "name": "Pantai Gedo",
            "position": "Jl. Christian Waray, Sanoba, Kec. Nabire, Kabupaten Nabire, Papua 98816",
            "photo": "https://i.ytimg.com/vi/7VfFwVM2-eQ/maxresdefault.jpg"
          },
          {
            "name": "Puncak Jaya",          
            "position": "Tembagapura, Kec. Tembagapura, Kabupaten Mimika, Papua",
            "photo": "https://4.bp.blogspot.com/-EJkA4LETYqM/XHbs2csr0hI/AAAAAAAAASY/lWLto6Qohqk_9KIfF8XAN0swxg3zijoSQCLcBGAs/s1600/20190228_030029.jpg"
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
      marginTop:3
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