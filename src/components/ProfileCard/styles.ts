import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },

  avatar: {
    width: 64,
    height: 64,
  },

  cardProfile: {
    flexDirection: 'row',
  },

  infoProfile: {
    marginLeft: 30,
  },

  name: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'Poppins_700Bold',
  },

  subTitle: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Poppins_400Regular',
  },

  textProfile: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    marginVertical: 30,
  },

  cardFooter: {
    alignItems: 'center',
  },

  textPrice: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    width: '100%',
    textAlign: 'center',
  },

  value: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#8257E5',
  },

  containerBtn: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 15,
  },

  favoriteBtn: {
    backgroundColor: '#8257E5',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  contactBtn: {
    backgroundColor: '#04D361',
    width: 235,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  textBtnContact: {
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;
