import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/home.styles";

const scheduleData = [
  { time1: "21:00\n21:45", time2: "21:55\n22:40", subject: "روان شناسی" },
  { time1: "19:00\n19:45", time2: "19:55\n20:40", subject: "ریاضی" },
  { time1: "17:00\n17:45", time2: "17:55\n18:40", subject: "روان شناسی" },
  { time1: "15:00\n15:45", time2: "15:55\n16:40", subject: "جامعه شناسی" },
  { time1: "13:00\n13:45", time2: "13:55\n14:40", subject: "ریاضی" },
  { time1: "11:00\n11:45", time2: "11:55\n12:40", subject: "علوم و فنون" },
  { time1: "9:00\n9:45", time2: "9:55\n10:40", subject: "عربی" },
  { time1: "7:00\n7:45", time2: "7:55\n8:40", subject: "دینی" },
];

const ScheduleColumn = ({ data }) => (
  <View style={styles.scheduleColumn}>
    <View style={[styles.scheduleCell, styles.timeCell]}>
      <Text style={styles.timeText}>{data.time1}</Text>
    </View>
    <View style={[styles.scheduleCell, styles.timeCell]}>
      <Text style={styles.timeText}>{data.time2}</Text>
    </View>
    <View style={[styles.scheduleCell, styles.subjectCell]}>
      <Text style={styles.subjectText}>{data.subject}</Text>
    </View>
  </View>
);

const WeeklySchedule = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>برنامه هفتگی</Text>
        <TouchableOpacity>
          <Feather name="chevron-left" size={24} color={"#27a4b6"} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scheduleGridContainer}>
          <View style={styles.scheduleLabelColumn}>
            <View style={[styles.scheduleCell, styles.labelCell]}>
              <Text style={styles.labelText}>پارت اول</Text>
            </View>
            <View style={[styles.scheduleCell, styles.labelCell]}>
              <Text style={styles.labelText}>پارت دوم</Text>
            </View>
            <View style={[styles.scheduleCell, styles.dayCell]}>
              <Text style={styles.dayText}>دوشنبه</Text>
            </View>
          </View>
          <View style={styles.scheduleDataContainer}>
            {scheduleData.map((item, index) => (
              <ScheduleColumn key={index} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeeklySchedule;
