import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#36454F",
        tabBarStyle: {
          backgroundColor: "#e9f5f8",
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="analysis"
        options={{
          title: "آمار و تحلیل",
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart-2" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "صفحه اصلی",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
