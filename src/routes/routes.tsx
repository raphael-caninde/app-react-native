import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Class } from '../pages/Class';

const { Screen, Navigator } = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='home'
      >
        <Screen
          name='home'
          component={Home}
        />
        <Screen
          name='class'
          component={Class}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
