import { useNavigation, useTheme } from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import { ScreenIndicators } from '../../components/ScreenIndicators';

import voltar from '../../../assets/Voltar.png';
import background from '../../../assets/Backgroundonbording.png';
import study from '../../../assets/EstudarOnbording.png';

import styles from './styles';

export function Onbording1() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <ImageBackground
          style={styles.imgback}
          source={background}
          resizeMode='cover'
        >
          <Image source={study} />
        </ImageBackground>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.containerText}>
          <Text style={styles.number}>01.</Text>
          <Text style={styles.text}>
            Encontre vários professores para ensinar você
          </Text>
        </View>
        <View style={styles.nextButton}>
          <ScreenIndicators
            count={2}
            activeIndex={0}
            color={'#8257E5'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('screen2')}>
            <Image source={voltar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
