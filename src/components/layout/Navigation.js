import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import MovieScreen from '../../screens/MovieScreen';
import SearchScreen from '../../screens/SearchScreen';
import TvScreen from '../../screens/TvScreen';


const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return ( 
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { textTransform: 'capitalize' },
                tabBarIndicatorStyle: { backgroundColor: '#356DFF'}
            }}
        >
            <Tab.Screen name='Movies' component={MovieScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='TV' component={TvScreen} />      
        </Tab.Navigator>
     );
}
 
export default Navigation;