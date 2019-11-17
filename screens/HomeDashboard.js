import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import {  View } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';



import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { green } from 'ansi-colors';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;






export default class HomeDashboard extends React.Component {
 state = {
   aqi : null,
 }



  /*componentDidMount(){
    return fetch('https://api.aerisapi.com/airquality/jundiaí, Brazil?&format=json&fields=loc,periods.aqi&client_id=RQ2Y6qacjAjLj4boSr5TK&client_secret=NdeFqc1X0DbNuU5SBt84WyWLRrCPmJeN5WPBVnxa')
      .then((response) => response.json())
      .then((responseJson) => {
        var aqui_res = responseJson.response[0].periods[0].aqi
        console.log(aqui_res);
        this.setState({
          aqi: aqui_res,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }*/

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block >
          <ImageBackground
            source={{uri: Images.Profile}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>Análise Jundiaí</Text>
                <Block row space="between">
                  <Block row>
                    <Text color="white" size={16} muted style={styles.seller}>Qualidade do AR:</Text>
                    <Block middle style={styles.pro}>
                      <Text size={16} color={materialTheme.COLORS.danger}>{/*{ this.state.aqi }*/}</Text>
                    </Block>
                  </Block>
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                      {` `} Jundiaí, SP
                      </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>

          
        
     
          <Content>

          <Card style={{ margin:0}}>
            <CardItem header bordered>
              <Text size={28}>Qualidade do ar</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                
                <MapView
                  style={{width: '100%', height:250}}
                      initialRegion={{
                        latitude: -23.18639,
                        longitude: -46.88417,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}>
                        <MapView.Circle
                            center={{
                              latitude: -23.18639,
                              longitude: -46.88417,
                            }}
                            radius={4000}
                            strokeWidth={2}
                            strokeColor="#3399ff"
                            fillColor="#80bfff"
                          />

                </MapView>
                
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Block>
                <Text size={28} muted style={styles.seller}>Índice:</Text>
                <Block middle style={styles.pro1}>
                  <Text size={16} style={{ color: 'white' }}>0 - 50</Text>
                </Block>
                <Text>Boa - A qualidade do ar é considerada satisfatória e a poluição do ar representa pouco ou nenhum risco</Text>

                <Block middle style={styles.pro2}>
                  <Text size={16} style={{ color: 'white' }}>50 - 100</Text>
                </Block>
                <Text>Moderado - A qualidade do ar é aceitável; no entanto, para alguns poluentes, pode haver um problema de saúde moderado para um número muito pequeno de pessoas que são incomumente sensíveis à poluição do ar.</Text>

                <Block middle style={styles.pro3}>
                  <Text size={16} style={{ color: 'white' }}>100 - 150</Text>
                </Block>
                <Text>Não saudável para grupos sensíveis - Membros de grupos sensíveis podem sofrer efeitos na saúde. O público em geral não é susceptível de ser afetado.</Text>

                <Block middle style={styles.pro4}>
                  <Text size={16} style={{ color: 'white' }}>150 - 200</Text>
                </Block>
                <Text>Pouco saudável - Todos podem começar a sentir efeitos na saúde; membros de grupos sensíveis podem sofrer efeitos mais sérios sobre a saúde</Text> 

                <Block middle style={styles.pro5}>
                  <Text size={16} style={{ color: 'white' }}>200 - 300</Text>
                </Block>
                <Text>Muito insalubre - Advertências de saúde de condições de emergência. Toda a população tem mais probabilidade de ser afetada.</Text>

                <Block middle style={styles.pro6}>
                  <Text size={16} style={{ color: 'white' }}>300 - 500</Text>
                </Block>
                <Text>Perigoso - Alerta de saúde: todos podem experimentar efeitos mais graves para a saúde</Text>
              </Block>
            </CardItem>
          </Card>




            <Card>
              <CardItem header>
                <Text size={28}>Regiões de trânsito</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Api com mapa de transito
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
              <Text>Algo aqui</Text>
            </CardItem>
          </Card>

            <Card>
                <CardItem header>
                  <Text size={28}>Áreas de alagamento</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      Api com as áreas com alagamento
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                <Text>GeekyAnts</Text>
              </CardItem>
            </Card>


            <Card>
                <CardItem header>
                  <Text size={28}>Qualidade do ar Regiões</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      Api com mapa da Qualidade do ar na região
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                <Text>algo aqui</Text>
              </CardItem>
            </Card>

            
          
          </Content>
            
      </Block>


    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2.7,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 1,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.INFO,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  pro1: {
    backgroundColor: materialTheme.COLORS.SUCCESS,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 50,
  },
  pro2: {
    backgroundColor: '#9b870c',
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 70,
  },
  pro3: {
    backgroundColor: materialTheme.COLORS.WARNING,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 80,
  },
  pro4: {
    backgroundColor: 'red',
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 80,
  },
  pro5: {
    backgroundColor: 'purple',
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 80,
  },
  pro6: {
    backgroundColor: '#7e0023',
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 80,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 17,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
