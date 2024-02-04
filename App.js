import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Calculator from './components/Calculator';
import History from './components/History';

const Tab = createBottomTabNavigator();

export default function App() {
  const [history, setHistory] = useState([]);

  const addHistoryItem = (historyItem) => {
    setHistory([historyItem, ...history]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Calculator') {
              iconName = focused ? 'calculator' : 'calculator';
            } else if (route.name === 'History') {
              iconName = focused ? 'list' : 'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Calculator">
          {(props) => <Calculator {...props} addHistoryItem={addHistoryItem} />}
        </Tab.Screen>
        <Tab.Screen name="History">
          {(props) => <History {...props} history={history} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
