import { useNavigation, useTheme } from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import { ScreenIndicators } from '../../components/ScreenIndicators';

import voltar from '../../../assets/Voltar.png';
import background from '../../../assets/BackOnbording2.png';
import aulas from '../../../assets/aulasOnbording2.png';

import styles from './styles';

export function Onbording2() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <ImageBackground
          style={styles.imgback}
          source={background}
          resizeMode='cover'
        >
          <Image source={aulas} />
        </ImageBackground>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.containerText}>
          <Text style={styles.number}>02.</Text>
          <Text style={styles.text}>
            Ou dê aulas sobre o que você mais conhece
          </Text>
        </View>
        <View style={styles.nextButton}>
          <ScreenIndicators
            count={2}
            activeIndex={1}
            color={'#04D361'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Image source={voltar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
