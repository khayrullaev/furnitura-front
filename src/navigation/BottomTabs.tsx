import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../styles/theme";

// screens
import { Home, Store, Cart, News, Profile } from "../screens/index";

// components
import {
  HomeIcon,
  StoreIcon,
  CartIcon,
  NewsIcon,
  ProfileIcon,
} from "../components/svgicons/index";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    component: Home,
    icon: ({ color, size: _ }: any) => <HomeIcon fill={color} />,
  },
  {
    name: "Store",
    component: Store,
    icon: ({ color, size: _ }: any) => <StoreIcon fill={color} />,
  },
  {
    name: "Cart",
    component: Cart,
    icon: ({ color, size: _ }: any) => <CartIcon fill={color} />,
  },
  {
    name: "News",
    component: News,
    icon: ({ color, size: _ }: any) => <NewsIcon fill={color} />,
  },
  {
    name: "Profile",
    component: Profile,
    icon: ({ color, size: _ }: any) => <ProfileIcon fill={color} />,
  },
];

const BottomTabs = () => {
  const { Navigator, Screen } = Tab;

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.bottomNavigation.active,
        tabBarInactiveTintColor: theme.bottomNavigation.inactive,
      }}
    >
      {tabs.map((tab, index) => (
        <Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{ tabBarIcon: tab.icon }}
        />
      ))}
    </Navigator>
  );
};

export default BottomTabs;
