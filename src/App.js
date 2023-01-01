import './App.css';
import { GoogleMap } from '@react-google-maps/api';
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { GeoJsonLayer} from '@deck.gl/layers';
import { MapStyles } from './MapStyles';



function App() {
  const mapStyles = {
  height: "100vh",
  width: "100%" ,
  }
  return (
    <div className="App">
      <GoogleMap
      onLoad={map => {
        deckOverlay.setMap(map)
      }}
      
      options={{
        styles: MapStyles,
        disableDefaultUI: true,
      }}
      mapContainerStyle={mapStyles}
      
      zoom={13}
      center={{lat: 40.712776, lng: -74.005974}}
      />

    </div>
  );
}

const NYC_QUEENS_22 = "./nycqueens2022.json"
const NYC_BROOKLYN_22 = "./nycbrooklyn22.json"
const deckOverlay = new GoogleMapsOverlay({
	layers: [
    new GeoJsonLayer({
      id: "QueensHousing",
      data: NYC_QUEENS_22,
      filled: true,
      pointRadiusMinPixels: 5,
      opacity: 1,
      pointRadiusScale: 2,
      Radius: f => 3,
      getFillColor: [200, 0, 80, 180],
      pickable: true,
      }),

      new GeoJsonLayer({
      id: "BrooklynHousing",
      data: NYC_BROOKLYN_22,
      filled: true,
      pointRadiusMinPixels: 5,
      opacity: 1,
      pointRadiusScale: 2,
      Radius: f => 3,
      getFillColor: [200, 0, 80, 180],
      pickable: true,
      autoHighlight: true,
      })
	  ],
    getTooltip: ({object}) => {
      return object && {
      html: `<div>
      <h3>Project Name: ${object.properties['Project Name']}</h3> 
      <h3>Project Start Date: ${object.properties['Project Start Date']}</h3> 
      <h3>Borough: ${object.properties['Borough']}</h3> 
      <h3>Extremely Low Income Units: ${object.properties['Extremely Low Income Units']}</h3> 
      <h3>Very Low Income Units: ${object.properties['Very Low Income Units']}</h3> 
      <h3>Low Income Units: ${object.properties['Low Income Units']}</h3> 
      <h3>Moderate Income Units: ${object.properties['Moderate Income Units']}</h3> 
      <h3>Middle Income Units: ${object.properties['Middle Income Units']}</h3> 
      <h3>Studio Units: ${object.properties['Studio Units']}</h3> 
      <h3>1-BR Units: ${object.properties['1-BR Units']}</h3> 
      <h3>2-BR Units: ${object.properties['2-BR Units']}</h3> 
      <h3>3-BR Units: ${object.properties['3-BR Units']}</h3> 
      <h3>4-BR Units: ${object.properties['4-BR Units']}</h3> 
      </div>`,
      style: {
        backgroundColor: '#0075A',
        color: '#FEFAE0',
        width: '10vw',
        textAlign:"start",
        fontSize: '0.8em'
      } 
     }
    }
  });
  
export default App;
