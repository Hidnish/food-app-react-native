import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Buzinezz Search'
  }
});

export default createAppContainer(navigator) //1 


//1 createAppContainer() -> Since navigator is not a component, this 
//  function creates a default react component and displays it inside that App component
//  App.js file is used as default export and displayed as first component on the device screen