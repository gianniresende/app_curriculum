import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  card_content: {
    marginTop: 10
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});

export default style;