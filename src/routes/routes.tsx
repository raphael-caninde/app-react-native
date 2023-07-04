import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Class } from '../pages/Class';
import { Study } from '../pages/Study';
import { Onbording1 } from '../pages/Onbording1';
import { Onbording2 } from '../pages/Onbording2';

const { Screen, Navigator } = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name='screen1'
          component={Onbording1}
        />
        <Screen
          name='screen2'
          component={Onbording2}
        />
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
