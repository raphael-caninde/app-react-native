import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  containerTop: {
    backgroundColor: '#04D361',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#EBEBF5',
    padding: 30,
  },

  imgback: {
    width: 210,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerText: {
    justifyContent: 'center',
    marginVertical: 50,
  },

  number: {
    color: '#6A6180',
    fontSize: 40,
    lineHeight: 43,
    opacity: 0.2,
  },

  text: {
    color: '#6A6180',
    fontSize: 24,
    lineHeight: 34,
    width: 215,
    fontFamily: 'Poppins_500Medium',
    marginTop: 40,
  },

  nextButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
