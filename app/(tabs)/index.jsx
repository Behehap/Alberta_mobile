import { ScrollView, View } from "react-native";
import { styles } from "../../assets/styles/home.styles";
import ActionCards from "../../components/home/ActionCards";
import DailyContent from "../../components/home/DailyContent";
import Header from "../../components/home/Header";
import WeeklySchedule from "../../components/home/WeeklySchedule";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.adBanner} />
        <WeeklySchedule />
        <ActionCards />
        <DailyContent />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
