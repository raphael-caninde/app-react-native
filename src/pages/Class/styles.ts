import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 30,
  },

  imgBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    width: 190,
    fontFamily: 'Poppins_600SemiBold',
  },

  text: {
    color: '#fff',
    marginTop: 30,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    width: 240,
  },

  btn: {
    backgroundColor: '#04D361',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBtn: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;
