import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps' // import mapBOX

MapboxGL.setAccessToken('pk.eyJ1IjoiZmFobWl3YWgiLCJhIjoiY2sxYmd6YXNuMDNuODNtbzRnOGl4czd2aiJ9.NVROMaSM-3kmIJcioOqHgw')



const App = () => {

    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");

    const onPress = (event) => {
        const {geometry} = event
    
        setLatitude(geometry.coordinates[1])
        setLongitude(geometry.coordinates[0])
    }
    
    const renderBuble = () =>{
        return(
            <View style={styles.bubleContainer}>
                <Text>Lat : {latitude}</Text>
                <Text>Long : {longitude}</Text>
            </View>
        )
    }

    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} 
                onPress={(e)=> onPress(e)}>
                <MapboxGL.Camera 
                    zoomLevel={15}
                    centerCoordinate={[107.619125,-6.917464]} // Longitude,Latitude
                />
                </MapboxGL.MapView>
            </View>
            {
                renderBuble()
            }
        </View>
    )
}



const styles = StyleSheet.create({
    page: {
      flex : 1
    },
    container: {
      height:"100%",
      width :"100%"
    },
    map:{
      flex:1
    },
    bubleContainer:{
        borderRadius: 30,
        position : 'absolute',
        bottom : 16,
        left : 48,
        right : 48,
        paddingVertical: 16,
        minHeight : 60,
        alignItems : 'center',
        justifyContent : "center",
        backgroundColor : 'white'
    }
  });

export default App;