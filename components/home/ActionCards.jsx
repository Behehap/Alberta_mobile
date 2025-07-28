import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/home.styles";

const ActionCards = () => {
  return (
    <View style={styles.actionCardsContainer}>
      <TouchableOpacity style={[styles.actionCard, styles.actionCardRight]}>
        <Feather name="edit" size={30} color="#546e41" />
        <Text style={[styles.actionCardTitle, styles.actionCardTitleRight]}>
          آزمون
        </Text>
        <Text style={styles.actionCardSubtitle}>۶ روز و ۱۸ ساعت</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionCard, styles.actionCardLeft]}>
        <Feather name="check-square" size={30} color="white" />
        <Text style={[styles.actionCardTitle, styles.actionCardTitleLeft]}>
          ثبت گزارش کار
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCards;
