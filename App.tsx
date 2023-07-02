import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Routes from './src/routes/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes />
      <StatusBar style='light' />
    </>
  );
}
