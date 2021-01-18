import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';

const {width, height} = Dimensions.get("window");



function Item({ item }) {
  return (
    <View>
      <TouchableOpacity>
        <Image source={{uri:item.photo}}  style={{width:width/4, height:250, margin: 3}} />
      </TouchableOpacity>
    </View>
  );
}

export default class GaleriScreen extends React.Component {
  state = {
    data:[
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-gondo-mayit.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/air-terjun-madakaripura.jpeg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/taman-nasional-meru-betiri.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-jonggring-saloko.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-rowo-indah.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-klayar.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-bawean.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/blue-bay.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-gili-iyang.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/gili-labak.jpg"
        },
        {
            "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/air-terjun-tancak.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-jamur.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-banyu-tibo.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-jaddih.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pulau-tabuhan.jpeg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/pantai-kedung-tumpang.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/teluk-kletekan.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-tinggi-daramista.jpg"
        },
        {
          "photo": "https://www.gotravelly.com/blog/wp-content/uploads/2018/04/bukit-larangan-panceng.jpg"
        },
        {
          "photo": "https://anekatempatwisata.com/wp-content/uploads/2018/02/Gunung-Bromo.jpg"
        },
        {
            "photo": "https://wisatabagus.com/wp-content/uploads/2020/02/pantai-ujung-genteng.jpg"
        },
        {
            "photo": "https://media-cdn.tripadvisor.com/media/photo-s/0b/76/43/d1/pasir-putih-pangandaran.jpg"
        },
        {
            "photo": "https://www.nativeindonesia.com/wp-content/uploads/2019/06/cover-6.jpg"
        },
        {
            "photo": "https://gpswisataindonesia.info/wp-content/uploads/2018/04/DSC_2247-Halimun-Salak-MB.jpg"
        },
        {
            "photo": "https://visitgarut.garutkab.go.id/wp-content/uploads/2017/08/cerita-daerah-asal-usul-hutan-leuweng-sancang-garut.jpg"
        },
        {
            "photo": "https://backpackerjakarta.com/wp-content/uploads/2016/10/Talaga-Bodas-Garut-1.jpg"
        },
        {
            "photo": "https://storage.googleapis.com/finansialku_media/wordpress_media/2019/11/457f68b0-cek-destinasi-wisata-kawah-putih-01-finansialku.jpg"
        },
        {
            "photo": "https://cdn.idntimes.com/content-images/community/2019/05/51028617-1881973251911055-3780207792264518399-n-363b68a39e6c863bcfb51d7b3dc03558.jpg"
        },
        {
            "photo": "https://dolandolen.com/wp-content/uploads/2019/08/Stone-Garden-Padalarang.jpg"
        },
        {
            "photo": "https://alampriangan.com/wp-content/uploads/2014/11/curug-cilutung-majalengka.jpg"
        },
        {
            "photo": "https://storage.googleapis.com/fileheikaku/3a1222cc-f268-4f03-82ac-2622553642f0.jpg"
        },
        {
          "photo": "https://www.yukpiknik.com/wp-content/uploads/2016/02/pulau-biawak.jpg"
        },
        {
          "photo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Indonesia_-_papandayan_4.jpg"
        },
        {
          "photo": "https://cdn-image.hipwee.com/wp-content/uploads/2016/05/hipwee-Tebing-1.jpg"
        },
        {
          "photo": "https://www.hargatiket.net/wp-content/uploads/2019/01/harga-tiket-curug-cikaso-sukabumi.jpg"
        },
        {
          "photo": "https://www.wisataterdekat.com/wp-content/uploads/2018/09/curugcimahibandung1.jpg"
        },
        {
          "photo": "https://www.javatravel.net/wp-content/uploads/2020/03/Telaga-Remis-Kuningan.jpg"
        },
        {
          "photo": "https://4.bp.blogspot.com/-HaYM5Tkig7Q/WPpfxlv3nbI/AAAAAAAAClc/NC8rdyNQy5EXFXqjBNgcdngOKzRP-Ws5wCLcB/s1600/Gunung%2BPancar%2BBogor.jpg"
        },
        {
          "photo": "https://www.westjavainc.org/wp-content/uploads/2016/08/tangkuban-perahu-bandung-jawa-barat.jpg"
        },
        {
          "photo": "https://traverse.id/wp-content/uploads/2018/02/Situ-Patenggang-Dihipnotis-oleh-Lansekap-Alam-Ciwidey.jpg"
        }
      
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          numColumns={4}
          renderItem={({ item }) => <Item item={item}/>}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque'
  }
 
});