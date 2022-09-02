import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return ( //horizontal={true} showsHorizontalScrollIndicator={true} 
    <SafeAreaView style={styles.container2} horizontal={true} showsHorizontalScrollIndicator={true}>
      <ScrollView style={styles.scrollView } horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
    <View style={styles.container}>
      <Image source={require('./assets/Speedist.png')} />
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./assets/Speedist-img.png')} />
      <Text style={styles.welcome}>Welcome to  Speedist</Text>
      <Text style={styles.simplest}>The simplest and fastest messenger in the history of communication.</Text>
      <Image style={styles.points} source={require('./assets/points.png')} />
    </View>
    <View style={styles.container}>
      <Image source={require('./assets/Speedist.png')} />
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./assets/groups.png')} />
      <Text style={styles.welcome}>Groups</Text>
      <Text style={styles.creating}>Easy creating a chatgroup for associations, companies or private groups.</Text>
      <Image style={styles.points} source={require('./assets/points-g.png')} />
    </View>
    <View style={styles.container}>
      <Image source={require('./assets/Speedist.png')} />
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./assets/direct.png')} />
      <Text style={styles.welcome}>Direct Messages</Text>
      <Text style={styles.can}>You can easily send private messages to people secured with our encryption.</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text} >Continue</Text>
        </TouchableOpacity>
      <Image style={styles.points} source={require('./assets/points-d.png')} />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:395,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 85,
  },
  img: {
    marginTop: 60,
  },
  welcome: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 24,
  },
  simplest: {
    marginTop: 15,
    marginBottom: 120,
    fontSize: 27,
    width: 409,
    textAlign: 'center',
  },
  points: {
    marginTop: 70,
    marginBottom: 100,
  },
  creating: {
    marginTop: 15,
    marginBottom: 120,
    fontSize: 27,
    width: 350,
    textAlign: 'center',
  },
  can: {
    marginTop: 15,
    fontSize: 27,
    width: 350,
    textAlign: 'center',
  },
  button: {
    marginTop: 47,
    alignItems: "center",
    backgroundColor: "#0075FF",
    padding: 50,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 50
  },
  text: {
    color:'#fff',
    fontSize: 24,
  },
});
