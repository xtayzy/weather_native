import {Stack, Tabs} from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
      <Tabs
          screenOptions={{
            tabBarActiveTintColor: "989da8",
            headerShown: false,
          }}
      >
        <Tabs.Screen
            name="index"
            options={{
              title: "Главная",
              tabBarStyle: {display: "none"}
            }}
        />
      </Tabs>
  )
}
