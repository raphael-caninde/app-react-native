import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 30,
  },

  imgLogo: {
    width: '100%',
  },

  title1: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins_400Regular',
    marginTop: 60,
  },

  title2: {
    fontFamily: 'Poppins_600SemiBold',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  btn: {
    height: 158,
    width: 140,
    borderRadius: 8,
    
    justifyContent: 'space-around',
  },

  btnStudy: {
    backgroundColor: '#9871F5',
  },

  btnClass: {
    backgroundColor: '#04D361',
  },

  iconBtn: {
    marginLeft: 20 
  },

  textBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },

  text:{
    color: '#fff',
    marginTop: 30,
    fontSize: 15,
    lineHeight: 30,
    width: 160,
  }
});

export default styles;
