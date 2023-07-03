import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Class } from '../pages/Class';
import { Study } from '../pages/Study';

const { Screen, Navigator } = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name='home'
          component={Home}
        />
        <Screen
          name='class'
          component={Class}
        />
        <Screen
          name='study'
          component={Study}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
