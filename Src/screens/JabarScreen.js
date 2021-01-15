import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput  } from 'react-native';
import { event } from 'react-native-reanimated';

  export default class JabarScreen extends React.Component {
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
              "name": "Pantai Ujung Genteng",
              "position": "Ujung Genteng, Ciracap, Sukabumi, Jawa Barat",
              "photo": "https://wisatabagus.com/wp-content/uploads/2020/02/pantai-ujung-genteng.jpg"
          },
          {
              "name": "Pantai Pasir Putih",
              "position": "Pangandaran, Kec. Pangandaran, Kabupaten Ciamis, Jawa Barat",
              "photo": "https://media-cdn.tripadvisor.com/media/photo-s/0b/76/43/d1/pasir-putih-pangandaran.jpg"
          },
          {
              "name": "Pantai Pelabuhan Ratu",
              "position": "Kecamatan, Pelabuhanratu, Kec. Pelabuhan Ratu, Kota Palabuhanratu, Jawa Barat",
              "photo": "https://www.nativeindonesia.com/wp-content/uploads/2019/06/cover-6.jpg"
          },
          {
              "name": "Taman Nasional Gunung Halimun Salak",
              "position": "Jl. Raya Cipanas, Malasari, Kabandungan, Sukabumi Regency, Jawa Barat 43368",
              "photo": "https://gpswisataindonesia.info/wp-content/uploads/2018/04/DSC_2247-Halimun-Salak-MB.jpg"
          },
          {
              "name": "Hutan Sancang",
              "position": "Sancang, Cibalong, Kabupaten Garut, Jawa Barat 44176",
              "photo": "https://visitgarut.garutkab.go.id/wp-content/uploads/2017/08/cerita-daerah-asal-usul-hutan-leuweng-sancang-garut.jpg"
          },
          {
              "name": "Kawah Talaga Bodas",
              "position": "Jl. Talaga Bodas, Tegalgede, pamariah, Kabupaten Garut, Jawa Barat 44183",
              "photo": "https://backpackerjakarta.com/wp-content/uploads/2016/10/Talaga-Bodas-Garut-1.jpg"
          },
          {
              "name": "Kawah Putih",
              "position": "Sugihmukti, Kec. Pasirjambu, Bandung, Jawa Barat",
              "photo": "https://storage.googleapis.com/finansialku_media/wordpress_media/2019/11/457f68b0-cek-destinasi-wisata-kawah-putih-01-finansialku.jpg"
          },
          {
              "name": "Green Canyon, Pangandaran",
              "position": "Jl. Raya Cijulang - Green Canyon, RT.02/RW.10, Cijulang, Pangandaran, Jawa Barat 46394",
              "photo": "https://cdn.idntimes.com/content-images/community/2019/05/51028617-1881973251911055-3780207792264518399-n-363b68a39e6c863bcfb51d7b3dc03558.jpg"
          },
          {
              "name": "Stone Garden di Padalarang",
              "position": "Gunung Masigit, Citatah, Kec. Cipatat, Kabupaten Bandung Barat, Jawa Barat 40554",
              "photo": "https://dolandolen.com/wp-content/uploads/2019/08/Stone-Garden-Padalarang.jpg"
          },
          {
              "name": "Curug Cilutung",
              "position": "Talagakulon, Talaga, Kabupaten Majalengka, Jawa Barat 45463",
              "photo": "https://alampriangan.com/wp-content/uploads/2014/11/curug-cilutung-majalengka.jpg"
          },
          {
              "name": "Goa Buniayu",
              "position": "Cipicung, Kerta Angsana, Nyalindung, Cimerang, Purabaya, Sukabumi Regency, Jawa Barat 43187",
              "photo": "https://storage.googleapis.com/fileheikaku/3a1222cc-f268-4f03-82ac-2622553642f0.jpg"
          },
          {
            "name": "Pulau Biawak",
            "position": "Indramayu, Jawa Barat",
            "photo": "https://www.yukpiknik.com/wp-content/uploads/2016/02/pulau-biawak.jpg"
          },
          {
            "name": "Gunung Papandayan",
            "position": "Karamat Wangi, Cisurupan, Kabupaten Garut, Jawa Barat",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Indonesia_-_papandayan_4.jpg"
          },
          {
            "name": "Tebing Keraton",
            "position": "Ciburial, Kec. Cimenyan, Kabupaten Bandung Barat, Jawa Barat 40198",
            "photo": "https://cdn-image.hipwee.com/wp-content/uploads/2016/05/hipwee-Tebing-1.jpg"
          },
          {
            "name": "Curug Cikaso",
            "position": "Desa Ciniti, Cibitung, Sukabumi Regency, Jawa Barat 43172",
            "photo": "https://www.hargatiket.net/wp-content/uploads/2019/01/harga-tiket-curug-cikaso-sukabumi.jpg"
          },
          {
            "name": "Curug Cimahi",
            "position": "Kertawangi, Kec. Cisarua, Kabupaten Bandung Barat, Jawa Barat 40551",
            "photo": "https://www.wisataterdekat.com/wp-content/uploads/2018/09/curugcimahibandung1.jpg"
          },
          {
            "name": "Telaga Remis",
            "position": "Kaduela, Pasawahan, Kabupaten Kuningan, Jawa Barat 45559",
            "photo": "https://www.javatravel.net/wp-content/uploads/2020/03/Telaga-Remis-Kuningan.jpg"
          },
          {
            "name": "Gunung Pancar Puncak Bogor",
            "position": "Karang Tengah, Kec. Babakan Madang, Bogor, Jawa Barat",
            "photo": "https://4.bp.blogspot.com/-HaYM5Tkig7Q/WPpfxlv3nbI/AAAAAAAAClc/NC8rdyNQy5EXFXqjBNgcdngOKzRP-Ws5wCLcB/s1600/Gunung%2BPancar%2BBogor.jpg"
          },
          {
            "name": "Gunung Tangkuban Perahu",
            "position": "Cikahuripan, Lembang, Kabupaten Bandung Barat, Jawa Barat",
            "photo": "https://www.westjavainc.org/wp-content/uploads/2016/08/tangkuban-perahu-bandung-jawa-barat.jpg"
          },
          {
            "name": "Situ Patenggang",          
            "position": "Patengan, Kec. Rancabali, Bandung, Jawa Barat",
            "photo": "https://traverse.id/wp-content/uploads/2018/02/Situ-Patenggang-Dihipnotis-oleh-Lansekap-Alam-Ciwidey.jpg"
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