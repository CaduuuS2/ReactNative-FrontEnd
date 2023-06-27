import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Capa from '../src/screens/capa';
import PreLogin from '../src/screens/PreLogin';
import Login from '../src/screens/Login';
import Cadastro from '../src/screens/Cadastro';

const Stack = createNativeStackNavigator();
export type StackParams = {
    Home: any;
    Cadastro: any;
    Carrinho: any;
    Login: any;
    Drawer : any;
}
function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Capa"  >
      <Stack.Screen name="Capa" component={Capa} options={{ headerShown: false }} />
        <Stack.Screen name="PreLogin" component={PreLogin} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppRoutes;