import { Pressable, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';

import background from '../../../assets/Background.png';
import styles from './styles';

export function Class() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.imgBackground}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.text}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <Pressable style={styles.btn}>
        <Text style={styles.textBtn}>Tudo bem</Text>
      </Pressable>
    </View>
  );
}
