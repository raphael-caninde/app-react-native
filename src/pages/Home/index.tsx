import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.png';
import styles from './styles';
import estudar from '../../../assets/estudar.png';
import aulas from '../../../assets/aulas.png';
import coracao from '../../../assets/coracao.png';

export function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.imgLogo}
      />
      <Text style={styles.title1}>
        Seja bem-vindo. {'\n'}
        <Text style={styles.title2}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.navigate('study')}
          style={[styles.btn, styles.btnStudy]}
        >
          <Image
            style={styles.iconBtn}
            source={estudar}
          />
          <Text style={styles.textBtn}>Estudar</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, styles.btnClass]}
          onPress={() => navigation.navigate('class')}
        >
          <Image
            style={styles.iconBtn}
            source={aulas}
          />
          <Text style={styles.textBtn}>Dar aulas</Text>
        </Pressable>
      </View>

      <Text style={styles.text}>
        Total de 285 conexões já realizadas <Image source={coracao} />
      </Text>
    </View>
  );
}
