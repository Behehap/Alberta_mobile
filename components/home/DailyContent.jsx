import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/home.styles";

const DATA = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const DailyContent = () => {
  const renderItem = () => <View style={styles.contentCard} />;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>مطالب روز</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 15 }}
        inverted
      />
    </View>
  );
};

export default DailyContent;
