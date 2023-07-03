import { Image, Pressable, Text, View } from 'react-native';
import avatar from '../../../assets/avatar.png';
import whatsapp from '../../../assets/Whatsapp.png';
import favoritar from '../../../assets/favoritar.png';
import styles from './styles';

export function ProfileCard() {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardProfile}>
          <Image
            style={styles.avatar}
            source={avatar}
          />
          <View style={styles.infoProfile}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.subTitle}>Química</Text>
          </View>
        </View>
        <Text style={styles.textProfile}>
          Entusiasta das melhores tecnologias de química avançada. Apaixonado
          por explodir coisas em laboratório e por mudar a vida das pessoas
          através de experiências. Mais de 200.000 pessoas já passaram por uma
          das minhas explosões.
        </Text>

        <View style={styles.cardFooter}>
          <Text style={styles.textPrice}>
            Preço/hora{'  '}
            <Text style={styles.value}>R$ 20,00</Text>
          </Text>
          <View style={styles.containerBtn}>
            <Pressable style={styles.favoriteBtn}>
              <Image source={favoritar} />
            </Pressable>
            <Pressable style={styles.contactBtn}>
              <Image source={whatsapp} />
              <Text style={styles.textBtnContact}>Entrar em contato</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
