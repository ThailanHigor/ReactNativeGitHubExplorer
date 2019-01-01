import { StyleSheet } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    maxWidth: (metrics.screenWidth - 60) / 2,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: metrics.baseMargin,
  },

});

export default styles;
