import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./AppTabs"

export default function Navigationcontainer() {
  return (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
  )
}
