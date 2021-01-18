import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class JatengScreen extends React.Component {
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
              "name": "Dataran Tinggi Dieng",
              "position": "Bakal Buntu, Bakal, Batur, Banjarnegara, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_784389145.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Gunung Merbabu",
              "position": "Suroteleng, Selo, Kabupaten Boyolali, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1166262631.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Pantai Menganti",
              "position": "Kebumen, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1061447597.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Puncak Argopuro Lasem",
              "position": "Area Sawah/Kebun, Rakitan, Sluke, Kabupaten Rembang, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_575852944.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Rawa Pening",
              "position": "Waduk Rawapening, Semarang, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_639390439.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Bukit Pangonan",
              "position": "Silaban-Karang Duren, Karangaren Lor, Karanggintung, Kemranjen, Banyumas, Jawa Tengah 53194",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1044523435.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Brown Canyon",
              "position": "Rowosari, Kec. Tembalang, Kota Semarang, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_344744387.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Telaga Sunyi",
              "position": "Sawah & Hutan, Limpakuwus, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1091842955.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Wisata Alam Lembah Sindoro Posong",
              "position": "Area Sawah, Tlahap, Kec. Kledung, Kabupaten Temanggung, Jawa Tengah 56264",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1096829093.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Waduk Malahayu",
              "position": "Area Sawah Dan Kebun, Malahayu, Banjarharjo, Kabupaten Brebes, Jawa Tengah",
              "photo": "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1075658042.jpg?tr=dpr-1,w-675"
          },
          {
              "name": "Goa Rong",
              "position": "Jalan Lerak Lopait, Lopait, Delik, Kec. Tuntang, Semarang, Jawa Tengah 50773",
              "photo": "https://2.bp.blogspot.com/-JkYZt0id8OU/Wo7Jd8P1PcI/AAAAAAAAGck/TevVKdjIzdIQulOwKkIsgZ6Pw0th7qX3wCLcBGAs/s1600/goa-rong-view.jpg"
          },
          {
            "name": "Pantai Pecaron",
            "position": "Jawa Tengah",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-pecaron.jpg"
          },
          {
            "name": "Pantai Bandengan",
            "position": "Jawa Tengah",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-bandengan.jpg"
          },
          {
            "name": "Putuk Setumbu",
            "position": "Kurahan, Karangrejo, Kec. Borobudur, Magelang, Jawa Tengah 56553",
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/punthuk-setumbu.jpg"
          },
          {
            "name": "Tlogo Muncar",
            "position": "Jalan Tlogo Putri, Hargobinangun, Pakem, Area Hutan, Hargobinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582",
            "photo": "https://antarejatour.com/wp-content/uploads/2019/02/Air-Terjun-Tlogo-Muncar-sumber-ig-yusuf_kudi.jpg"
          },
          {
            "name": "Candi Borobudur",
            "position": "Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Kec. Borobudur, Magelang, Jawa Tengah",
            "photo": "https://eksotisjogja.com/wp-content/uploads/2016/12/Candi-Borobudur-Keajaiban-Dunia-Milik-Indonesia-FILEminimizer.jpg"
          },
          {
            "name": "Goa Petruk",
            "position": "Mandayana, Candirenggo, Ayah, Kabupaten Kebumen, Jawa Tengah 54473",
            "photo": "https://wisatarakyat.com/wp-content/uploads/2020/10/Goa-petruk-Kebumen-1.jpg"
          },
          {
            "name": "Pantai Karang Bolong",
            "position": "Karangbolong, Kec. Buayan, Kabupaten Kebumen, Jawa Tengah 54474",
            "photo": "https://www.nativeindonesia.com/wp-content/uploads/2020/03/Pantai-Karang-Bolong-Kebumen.jpg"
          },
          {
            "name": "Kepulauan Karimunjawa",
            "position": "Kecamatan Karimunjawa, Jepara, Jawa Tengah",
            "photo": "https://anekatempatwisata.com/wp-content/uploads/2014/03/wisata-Kepulauan-Karimunjawa.jpg"
          },
          {
            "name": "Air Terjun Grojogan Sewu",          
            "position": "Jl. Raya Tawangmangu, Beji, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792",
            "photo": "https://gunung.id/wp-content/uploads/2018/09/grojogan-sewu-tawangmangu.jpg"
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