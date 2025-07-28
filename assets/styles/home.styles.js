import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  headerContainer: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  headerProfileText: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.text,
  },
  headerButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerButtonPrimary: {
    backgroundColor: "#0d6efd",
    marginRight: 8,
  },
  headerButtonSecondary: {
    backgroundColor: "#f0e6d2",
  },
  headerButtonTextPrimary: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  headerButtonTextSecondary: {
    color: "#5d4037",
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  adBanner: {
    height: 100,
    backgroundColor: "#e9ecef",
    borderRadius: 15,
    marginTop: 20,
  },
  sectionContainer: {
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27a4b6",
  },
  scheduleGridContainer: {
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scheduleDataContainer: {
    flexDirection: "row-reverse",
  },
  scheduleColumn: {
    width: 60,
    marginHorizontal: 2,
  },
  scheduleLabelColumn: {
    width: 55,
    marginHorizontal: 2,
  },
  scheduleCell: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  timeCell: {
    backgroundColor: "#d1e7ff",
    height: 35,
  },
  subjectCell: {
    backgroundColor: "#fff3cd",
    height: 50,
  },
  labelCell: {
    backgroundColor: "white",
    height: 35,
  },
  dayCell: {
    backgroundColor: "#198754",
    height: 50,
  },
  timeText: {
    fontSize: 10,
    textAlign: "center",
    color: "#004085",
    fontWeight: "500",
  },
  subjectText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#664d03",
    textAlign: "center",
  },
  dayText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
  labelText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#495057",
  },
  actionCardsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 25,
  },
  actionCard: {
    flex: 1,
    height: 110,
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  actionCardLeft: {
    backgroundColor: "#17a2b8",
    marginRight: 8,
  },
  actionCardRight: {
    backgroundColor: "#d7e5ca",
    marginLeft: 8,
  },
  actionCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
  },
  actionCardTitleLeft: {
    color: "white",
  },
  actionCardTitleRight: {
    color: "#546e41",
  },
  actionCardSubtitle: {
    fontSize: 11,
    marginTop: 4,
    color: "#546e41",
  },
  dailyContentContainer: {
    marginTop: 25,
  },
  contentCard: {
    width: 120,
    height: 120,
    backgroundColor: "#e9ecef",
    borderRadius: 15,
  },
});
