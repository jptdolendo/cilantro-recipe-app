import { Tabs } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '@/components/UI/Icon';
import { Pressable } from 'react-native';

type Screen = {
  name: string;
  title: string;
  icon: {
    name: keyof typeof MaterialCommunityIcons.glyphMap;
    filled: keyof typeof MaterialCommunityIcons.glyphMap;
  };
};

const screens: Screen[] = [
  {
    name: 'search',
    title: 'Search',
    icon: { name: 'magnify', filled: 'magnify' }
  },
  {
    name: 'favorites',
    title: 'Favorites',
    icon: { name: 'heart-outline', filled: 'heart' }
  },
  {
    name: 'grocery-list',
    title: 'My List',
    icon: { name: 'cart-outline', filled: 'cart' }
  }
];

const ScreensLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="search"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#38b168',
        tabBarInactiveTintColor: '#4f4f4f',
        tabBarStyle: {
          height: 60 + insets.bottom,
          borderTopWidth: 0,
          position: 'absolute'
        },
        tabBarLabelStyle: { fontFamily: 'Outfit-Regular' },
        tabBarButton: (props) => (
          <Pressable {...props} android_ripple={undefined} />
        )
      }}
    >
      {screens.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                color={color}
                name={focused ? item.icon.filled : item.icon.name}
                size={size}
              />
            )
          }}
        />
      ))}
    </Tabs>
  );
};

export default ScreensLayout;
