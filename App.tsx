import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App: React.FC = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);

  const navigateToProfile = (profileType: string) => {
    setCurrentScreen(profileType);
  };

  return (
    <SafeAreaView>
      {currentScreen === 'personal' && (
        <ScrollView contentContainerStyle={styles.svContenedor}>
          <Text style={styles.encabezadoRojo}>CARMEN MEGARA SIERRA NAVARRO</Text>
          <Image
            style={styles.fotoperfil}
            source={require('./imagenes/MegaraSie.jpg')}
          />
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Lugar de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>Tegucigalpa, Honduras</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Fecha de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>22 de julio del 2004</Text>
            </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Pasatiempos:</Text>
            <Text style={styles.seccionContentNegro}>
              Leer, aprender, Me encanta Cocinar,{'\n'}
              ir a la Iglesia, las matemáticas{'\n'}
              y los juegos mentales.
            </Text>
          </View>
          {/* Agrega más detalles sobre tu perfil personal aquí */}
          <TouchableOpacity onPress={() => setCurrentScreen(null)}>
            <Text style={styles.botonNavegacion}>Regresar al Menú</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {currentScreen === 'admirado' && (
        <ScrollView contentContainerStyle={styles.svContenedor}>
          <Text style={styles.encabezadoAzul}>EDWIN HUBBLE</Text>

          <View style={styles.imagenContainer}>
            <Image
              style={styles.fotoperfil}
              source={require('./imagenes/EdwinHubble.jpg')}
            />
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Nombre:</Text>
            <Text style={styles.seccionContentNegro}>Edwin Hubble</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Fecha de Nacimiento:</Text>
            <Text style={styles.seccionContentNegro}>20 de noviembre de 1889</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.seccionHeaderAzul}>Pasatiempos:</Text>
            <Text style={styles.seccionContentNegro}>Astronomía, observación del cielo</Text>
          </View>
          <View style={styles.textoCentrado}>
            <Text style={styles.seccionContentNegro}>
              {`Hubble es el astrónomo con más descubrimientos en su haber, después de haber encontrado galaxias fuera de la Vía Láctea. En aquel momento, los astrónomos solo consideraban lo que se encontraba dentro de nuestra galaxia, pero Hubble amplió el mapa a cientos de miles de millones de estrellas y planetas en otros lugares lejanos. Además, descubrió que estas galaxias se están alejando de la Vía Láctea, y cuanto más lejos están, más rápido se mueven.`}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setCurrentScreen(null)}>
            <Text style={styles.botonNavegacion}>Regresar al Menú</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {!currentScreen && (
        <View style={styles.bienvenida}>
          {/* Pantalla de bienvenida con botones de navegación */}
          <Text style={styles.encabezadoOcre}>Bienvenidos</Text>
          <TouchableOpacity onPress={() => navigateToProfile('personal')}>
            <Text style={styles.botonNavegacion}>Ver Perfil de Carmen Megara Sierra</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToProfile('admirado')}>
            <Text style={styles.botonNavegacion}>Ver Perfil de Edwin Hubble</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bienvenida: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20, 
  },
  botonNavegacion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#001F3F',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    textAlign: 'center',
  },
  encabezadoAzul: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#001F3F',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  encabezadoOcre: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  seccionContentNegro: {
    fontSize: 18,
    color: 'black',
  },
  fotoperfil: {
    width: 200,
    height: 220,
  },
  imagenContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  regresar: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  seccion: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  seccionContent: {
    fontSize: 18,
    color: 'red',
  },
  seccionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  seccionHeaderAzul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F3F',
  },
  svContenedor: {
    alignItems: 'center',
  },
  textoCentrado: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  encabezadoRojo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8B0000', 
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
