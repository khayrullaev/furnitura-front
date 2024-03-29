import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import { Home, Store, Cart, News, Profile } from "../../screens";

// components
import {
  HomeIcon,
  StoreIcon,
  CartIcon,
  NewsIcon,
  ProfileIcon,
} from "../../components/svgicons";

// theme
import { theme } from "../../styles/theme";

// components
import { TabHeader } from "../../components/layout";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    withHeader: true,
    component: Home,
    icon: ({ color }: any) => <HomeIcon fill={color} />,
  },
  {
    name: "Store",
    withHeader: true,
    component: Store,
    icon: ({ color }: any) => <StoreIcon fill={color} />,
  },
  {
    name: "Cart",
    withHeader: true,
    component: Cart,
    icon: ({ color }: any) => <CartIcon fill={color} />,
  },
  {
    name: "News",
    withHeader: true,
    component: News,
    icon: ({ color }: any) => <NewsIcon fill={color} />,
  },
  {
    name: "Profile",
    withHeader: false,
    component: Profile,
    icon: ({ color }: any) => <ProfileIcon fill={color} />,
  },
];

const BottomTabs = () => {
  const { Navigator, Screen } = Tab;

  return (
    <Navigator
      initialRouteName="Home"
      sceneContainerStyle={{}}
      screenOptions={{
        tabBarActiveTintColor: theme.bottomNavigation.active,
        tabBarInactiveTintColor: theme.bottomNavigation.inactive,
        tabBarShowLabel: false,
        headerShown: false,
        headerStatusBarHeight: 40,
        tabBarStyle: getBottomTabStyle(),
      }}
    >
      {tabs.map((tab, index) => (
        <Screen
          key={index}
          name={tab.name}
          options={{
            tabBarIcon: tab.icon,
          }}
        >
          {tab.withHeader
            ? (props: any) => (
                <>
                  <TabHeader title={tab.name} />
                  <tab.component {...props} />
                </>
              )
            : tab.component}
        </Screen>
      ))}
    </Navigator>
  );
};

const getBottomTabStyle = () => {
  return {
    backgroundColor: theme.neutral5,
    height: 75,
    borderTopWidth: 0,
    borderRadius: 15,
    shadowColor: theme.shadow,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: -4,
    },
    shadowRadius: 30,
  };
};

export default BottomTabs;
