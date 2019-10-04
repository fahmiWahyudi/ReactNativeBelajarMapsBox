import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps' // import mapBOX

MapboxGL.setAccessToken('pk.eyJ1IjoiZmFobWl3YWgiLCJhIjoiY2sxYmd6YXNuMDNuODNtbzRnOGl4czd2aiJ9.NVROMaSM-3kmIJcioOqHgw')

// import App from './getLatLong';
import MarkerApp from './SetAnnotation';

const MapsApp = ()=>{
  
  return(
    <View style={styles.page}>
      {/* <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} >
        <MapboxGL.Camera 
          zoomLevel={11}
          centerCoordinate={[106.865036,-6.175110]} // Longitude,Latitude
        />
        </MapboxGL.MapView>
      </View> */}
      <MarkerApp />
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
  }
});

export default MapsApp