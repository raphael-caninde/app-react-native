import { Text, View, Image, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileCard } from '../../components/ProfileCard';

import seta from '../../../assets/seta.png';
import proffy from '../../../assets/Proffy.png';
import daraulas from '../../../assets/daraulas.png';
import favoritar from '../../../assets/Group.png';

import styles from './styles';

export function Study() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.headerUpper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={seta} />
          </Pressable>
          <Image source={proffy} />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.titleHeader}>Proffys {'\n'}Disponíveis</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.inputText}
            placeholder='Filtrar por dia, hora e matéria'
            placeholderTextColor='#fff'
          />
        </View>
      </View>
      <View style={styles.containerCard}>
        <ProfileCard />
      </View>
      <View style={styles.t}>
        <Pressable style={styles.r}>
          <Image source={daraulas} />
          <Text>Proffys</Text>
        </Pressable>
        <Pressable style={styles.f}>
          <Image source={favoritar} />
          <Text style={{ color: '#C1BCCC' }}>Favoritos</Text>
        </Pressable>
      </View>
    </View>
  );
}
