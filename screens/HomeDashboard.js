import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;



export default class Profile extends React.Component {
 



  componentDidMount(){
    return fetch('https://api.aerisapi.com/airquality/jundiaí, Brazil?&format=json&fields=loc,periods.aqi&client_id=RQ2Y6qacjAjLj4boSr5TK&client_secret=NdeFqc1X0DbNuU5SBt84WyWLRrCPmJeN5WPBVnxa')
      .then((response) => response.json())
      .then((responseJson) => {

       
    
        console.log(responseJson.response);

        var teste =  json_decode(responseJson.response, true);
        console.log(teste['periods']);

        this.setState({
         
          dataSource: responseJson.aqi,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


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
                    <Block middle style={styles.pro}>
                     
                       
                     
                    </Block>
                    <Text color="white" size={16} muted style={styles.seller}>Qualidade do AR:</Text>
                    <Block middle style={styles.pro}>
                      <Text size={16} color={materialTheme.COLORS.danger}>21</Text>
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
            <Card>
                <CardItem header>
                  <Text size={28}>Qualidade do ar na Região</Text>
                </CardItem>
                <CardItem>
                  <Body>
                   
                    
                   
                  </Body>
                </CardItem>
                <CardItem footer>
                <Text>Algo aqui</Text>
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
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
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
