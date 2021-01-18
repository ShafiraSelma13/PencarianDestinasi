import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class JatimScreen extends React.Component {
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
              "name": "Pantai Gondo Mayit",
              "position": "Krajan, Tambakrejo, Wonotirto, Blitar, Jawa Timur 66173",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-gondo-mayit.jpg"
          },
          {
              "name": "Air Terjun Madakaripura",
              "position": "Sapih, Branggah, Lumbang, Probolinggo, Jawa Timur 67183",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/air-terjun-madakaripura.jpeg"
          },
          {
              "name": "Taman Nasional Meru Betiri",
              "position": "Andongrejo, Tempurejo, Area Hutan, Andongrejo, Tempurejo, Kabupaten Jember, Jawa Timur 68173",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/taman-nasional-meru-betiri.jpg"
          },
          {
              "name": "Pantai Jonggring Saloko",
              "position": "Desa Mentaraman, Donomulyo, Malang, Jawa Timur 65167",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-jonggring-saloko.jpg"
          },
          {
              "name": "Pantai Rowo Indah",
              "position": "Tambak, Sitiarjo, Sumbermanjing, Malang, Jawa Timur 65176",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-rowo-indah.jpg"
          },
          {
              "name": "Pantai Klayar",
              "position": "Kabupaten Pacitan, Jawa Timur 63554",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-klayar.jpg"
          },
          {
              "name": "Pulau Bawean",
              "position": "Jawa Timur",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-bawean.jpg"
          },
          {
              "name": "Blue Bay atau Teluk Biru",
              "position": "Sengrong, Purworejo Alas Purwo National Park Purworejo Purworejo, Purworejo, Kalipait, Muncar, Kabupaten Banyuwangi, Jawa Timur 68484",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/blue-bay.jpg"
          },
          {
              "name": "Pulau Gili Iyang",
              "position": "Gili Iyang, Banraas, Dungkek, Kabupaten Sumenep, Jawa Timur",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-gili-iyang.jpg"
          },
          {
              "name": "Gili Labak",
              "position": "Kombang, Talango, Kabupaten Sumenep, Jawa Timur",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/gili-labak.jpg"
          },
          {
              "name": "Air Terjun Tancak",
              "position": "Area Pegunungan Argop, Suci, Panti, Kabupaten Jember, Jawa Timur 68153",
              "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/air-terjun-tancak.jpg"
          },
          {
            "name": "Bukit Jamur",
            "position": "Area Sawah/Kebun, Bungah, Kec. Bungah, Kabupaten Gresik, Jawa Timur 61152",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-jamur.jpg"
          },
          {
            "name": "Pantai Banyu Tibo",
            "position": "Widoro, Donorojo, Kabupaten Pacitan, Jawa Timur 63554",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-banyu-tibo.jpg"
          },
          {
            "name": "Bukit Jaddih",
            "position": "Jakan, Parseh, Socah, Kabupaten Bangkalan, Jawa Timur 69161",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-jaddih.jpg"
          },
          {
            "name": "Pulau Tabuhan",
            "position": "Pulau Tabuhan, Bengkak, Kec. Wongsorejo, Kabupaten Banyuwangi, Jawa Timur",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-tabuhan.jpeg"
          },
          {
            "name": "Pantai Kedung Tumpang",
            "position": "Area Perkebunan Dan P, Pucanglaban, Pucang Laban, Kabupaten Tulungagung, Jawa Timur 66284",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-kedung-tumpang.jpg"
          },
          {
            "name": "Teluk Kletekan",
            "position": "Area Gn., Sidurejo, Gedangan, Malang, Jawa Timur 65178",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/teluk-kletekan.jpg"
          },
          {
            "name": "Bukit tinggi Daramista",
            "position": "Billa Tompok, Daramesta, Lenteng, Kabupaten Sumenep, Jawa Timur 69461",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-tinggi-daramista.jpg"
          },
          {
            "name": "Bukit Larangan Panceng",
            "position": "Area Sawah, Prupuh, Kec. Panceng, Kabupaten Gresik, Jawa Timur 61156",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-larangan-panceng.jpg"
          },
          {
            "name": "Gunung Bromo",          
            "position": "Area Gn. Bromo, Podokoyo, Tosari, Pasuruan, Jawa Timur",
            "photo": "https://anekatempatwisata.com/wp-content/uploads/2018/02/Gunung-Bromo.jpg"
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