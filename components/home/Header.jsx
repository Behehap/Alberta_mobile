import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/home.styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerProfile}>
        <Text style={styles.headerProfileText}>مهدی رضایی</Text>
        <Image
          source={{ uri: "https://placehold.co/40x40/EFEFEF/333?text=MR" }}
          style={styles.headerAvatar}
        />
      </View>
      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity
          style={[styles.headerButton, styles.headerButtonPrimary]}
        >
          <Text style={styles.headerButtonTextPrimary}>
            اشتراک باقی مانده : ۱۱ روز
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButton, styles.headerButtonSecondary]}
        >
          <Text style={styles.headerButtonTextSecondary}>دوشنبه ۲۱ بهمن</Text>
          <Feather name="calendar" size={16} color={"#5d4037"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
