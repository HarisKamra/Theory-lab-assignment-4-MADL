import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';
import * as Location from 'expo-location';
  const [location, setLocation] = useState(null);
    const [lat, setlat] = useState(null);
    const [lon, setlon] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
        (async () => {
        
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setlat(location.latitude);
            setlon(location.longitude);
          })();
      
    }, []);
const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Jakarta',
    coord: [6.1751, 106.8650]
  },
  {
    key: 2,
    label: 'Depok',
    coord: [6.4025, 106.7942]
  },
  {
    key: 3,
    label: 'Tangerang',
    coord: [6.2024, 106.6527]
  },
  {
    key: 4,
    label: 'Bekasi',
    coord: [6.2383, 106.9756]
  }
]
fetch('http://api.aladhan.com/v1/calendarByCity', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
var myarr = json;
            myarr.forEach(element => {
                if(element["id"] == 32){

                    setfajr(timings["Fajr"]);
                     setsunrise(timings["Sunrise"]);
                     setdhuhr(timings["Dhuhr"]);
                     setasar(timings["Asar"]);
                     setmaghrib(timings["Maghrib"]);
                     setisha(timings["Isha"]);
                     
                     
                   
                }
});
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: prayTimes.getTimes(new Date(), locations[0].coord, +7, 'auto', '24h'),
      locationSelected: locations[0]
    }
  }

  render() {
    return (
      <View style={styles.mainBox}>
            <Text style={styles.myText1} >Fajr: {fajr}</Text>
            <Text style={styles.myText2} >sunrise: {sunrise}</Text>
            <Text style={styles.myText2} >dhuhr: {dhuhr}</Text>
            <Text style={styles.myText2} >asar: {asar}</Text>
            <Text style={styles.myText2} >maghrib: {maghrib}</Text>
            <Text style={styles.myText2} >isha: {isha}</Text>
            
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pale_grey,
    padding: 30,
  },
  configContainer: {
    alignItems: 'flex-end',
    paddingBottom: 15
  },
  locationSelector: {
    marginBottom: 10
  }
});