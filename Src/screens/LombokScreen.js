import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class LombokScreen extends React.Component {
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
              "name": "Taman Nasional Gunung Rinjani",
              "position": "Jl. Raya Sembalun Lawang, Sembalun Lawang, Sembalun, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83666",
              "photo": "https://m.ayojakarta.com/images-jakarta/post/articles/2019/10/21/6362/gunung_rinjani_(lomboktourplus.com).jpg"
          },
          {
              "name": "Segara Anak",
              "position": "Nusa Tenggara Bar.",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/Gunung-baru-jari.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Bukit Pergasingan",
              "position": "Sembalun Lawang, Sembalun, Sembalun Lawang, Sembalun, East Lombok Regency, West Nusa Tenggara 83656",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/Panorama_Sembalun.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Pantai Senggigi",
              "position": "Nusa Tenggara Bar.",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/shutterstock_361934399.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Gili Trawangan",
              "position": "Gili Indah, Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Bar.",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/shutterstock_627317705.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Gili Meno",
              "position": "Gili Indah, Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Bar.",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/shutterstock_126542630.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Gili Air",
              "position": "Gili Indah, Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Bar.",
              "photo": "https://ik.imagekit.io/tvlk/blog/2019/12/shutterstock_179701529.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Pantai Nambung",
              "position": "Dusun Nambung Desa, Buwun Mas, Sekotong Tengah, Kabupaten Lombok Barat, Nusa Tenggara Bar.",
              "photo": "https://ksmtour.com/media/images/articles15/pantai-nambung-nusa-tenggara-barat.jpg"
          },
          {
              "name": "Pantai Penyisok",
              "position": "lendang sekaroh,, Sekaroh, Jerowaru, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83672",
              "photo": "https://i.ibb.co/GnFfjjf/Pantai-Penyisok-1.jpg"
          },
          {
              "name": "Pantai Semeti",
              "position": "Jl. Pantai Mawi, Selong Belanak, Praya Bar., Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83572",
              "photo": "https://www.kintamani.id/wp-content/uploads/Pantai-Semeti-Lombok-1.jpg"
          },
          {
              "name": "Pantai Tangsi (Pink Beach Lombok)",
              "position": "Sekaroh, Jerowaru, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83672",
              "photo": "https://wisato.id/wp-content/uploads/2020/03/pantai-tangsi-1.jpg"
          },
          {
            "name": "Air Terjun Mangkusakti",
            "position": "Bilok Petung, Sembalun, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83354",
            "photo": "https://www.pagitrans.com/wp-content/uploads/2019/04/Paket-Wisata-Lombok-Air-Terjun-Mangku-Sakti.jpg"
          },
          {
            "name": "Air Terjun Benang Kelambu",
            "position": "Desa, Aik Berik, Batukliang Utara, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83552",
            "photo": "https://i1.wp.com/warungwisata.com/wp-content/uploads/2018/01/Benang-Kelambu_400918690forweb-e1516883245237.jpg?fit=500%2C494&ssl=1"
          },
          {
            "name": "Pantai Batu Payung",
            "position": "Jalan Kuta Lombok, Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
            "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/21227777_1825454817765459_2951679049694445568_n.jpg?tr=dpr-1,w-675"
          },
          {
            "name": "Pantai Tanjung Ringgit",
            "position": "Jl. Lingkok siwaq, Sekaroh, Jerowaru, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83672",
            "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_549150466.jpg?tr=dpr-1,w-675"
          },
          {
            "name": "Pantai Seger",
            "position": "Kuta, Pujut, Kuta, Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
            "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_657858334.jpg?tr=dpr-1,w-675"
          },
          {
            "name": "Pantai Sekotong",
            "position": "Jl. Raya Mekaki, Pelangan, Sekotong Tengah, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83365",
            "photo": "https://ksmtour.com/media/images/articles10/pantai-sekotong-lombok.jpg"
          },
          {
            "name": "Pantai Gili Nanggu",
            "position": "Sekotong Bar., Sekotong Tengah, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83365",
            "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/21435657_1717924338503891_1547656572799287296_n.jpg?tr=dpr-1,w-675"
          },
          {
            "name": "Pantai Bangko-Bangko",
            "position": "Jalan Putih, Batu Putih, Sekotong Tengah, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83365",
            "photo": "https://wisatahouse.com/wp-content/uploads/2018/07/Bangko-Bangko-Desert-Point-di-Lombok-Yang-Menjadi-Tujuan-Wisata-Dunia-678x381.jpg"
          },
          {
            "name": "Pantai Tanjung Bloam",          
            "position": "Jl. Pantai Beloam, Tanjung Ringgit, Nusa Tenggara Bar, Jerowaru, Sekaroh, Lombok Timur, Kabupaten Lombok Timur, Nusa Tenggara Bar. 83672",
            "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/18722938_1383407625072409_3859158201425461248_n.jpg?tr=dpr-1,w-675"
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