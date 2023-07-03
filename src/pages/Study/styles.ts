import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
    alignItems: 'center',
  },

  containerHeader: {
    backgroundColor: '#8257E5',
    padding: 30,
    width: '100%',
  },

  headerUpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  headerText: {
    marginTop: 40,
    width: 130,
  },

  titleHeader: {
    fontSize: 24,
    lineHeight: 29,
    color: '#fff',
  },

  containerInput: {
    marginTop: 40,
    marginBottom: 40,
  },

  inputText: {
    borderBottomWidth: 1,
    borderColor: '#9871F5',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },

  containerCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    height: 400,
    marginTop: -35,
    width: '95%',
    borderRadius: 10,
  },

  t: {
    flexDirection: 'row',
  },

  r: {
    width: '50%',
    height: 110,
    backgroundColor: '#F0F0F7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  f: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
  },
});

export default styles;
