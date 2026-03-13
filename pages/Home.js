import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const attendanceHistory = [
  { id: "1", course: "Mobile Programming", date: "10 Mar 2026", status: "Present" },
  { id: "2", course: "Database Systems", date: "9 Mar 2026", status: "Absent" },
  { id: "3", course: "Web Programming", date: "8 Mar 2026", status: "Present" },
  { id: "4", course: "Data Structures", date: "7 Mar 2026", status: "Present" },
  { id: "5", course: "Operating Systems", date: "6 Mar 2026", status: "Absent" },
  { id: "6", course: "Computer Networks", date: "5 Mar 2026", status: "Present" },
  { id: "7", course: "Artificial Intelligence", date: "4 Mar 2026", status: "Present" },
  { id: "8", course: "Software Engineering", date: "3 Mar 2026", status: "Absent" },
  { id: "9", course: "Human Computer Interaction", date: "2 Mar 2026", status: "Present" },
  { id: "10", course: "Cloud Computing", date: "1 Mar 2026", status: "Present" },
  { id: "11", course: "Cyber Security", date: "28 Feb 2026", status: "Absent" },
  { id: "12", course: "Data Mining", date: "27 Feb 2026", status: "Present" },
  { id: "13", course: "Machine Learning", date: "26 Feb 2026", status: "Present" },
  { id: "14", course: "Web Programming", date: "25 Feb 2026", status: "Absent" },
  { id: "15", course: "Mobile Programming", date: "24 Feb 2026", status: "Present" },
  { id: "16", course: "Database Systems", date: "23 Feb 2026", status: "Present" },
  { id: "17", course: "Computer Networks", date: "22 Feb 2026", status: "Absent" },
  { id: "18", course: "Operating Systems", date: "21 Feb 2026", status: "Present" },
  { id: "19", course: "Software Engineering", date: "20 Feb 2026", status: "Present" },
  { id: "20", course: "Artificial Intelligence", date: "19 Feb 2026", status: "Absent" },
  { id: "21", course: "Cloud Computing", date: "18 Feb 2026", status: "Present" },
  { id: "22", course: "Data Structures", date: "17 Feb 2026", status: "Present" },
];

export default function Home() {
 const presentCount = attendanceHistory.filter(
    item => item.status === "Present"
 ).length;
 const absentCount = attendanceHistory.filter(
    item => item.status === "Absent"
 ).length;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.historyCard}>
        <View>
          <Text style={styles.course}>{item.course}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        <View style={styles.statusContainer}>
          {item.status === "Present" ? (
            <MaterialIcons name="check-circle" size={20} color="green" />
          ) : (
            <MaterialIcons name="cancel" size={20} color="red" />
          )}
          <Text
            style={[
              styles.status,
              { color: item.status === "Present" ? "green" : "red" },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>            
      <ScrollView>

        {/* Title */}
        <Text style={styles.title}>Attendance App</Text>

        {/* Student Card */}
        <View style={styles.card}>
        <View style={styles. profileRow}>

        <View style={styles.avatar}>
        <MaterialIcons name="person" size={40} color="#666" />
        </View>

    <View>
      <Text style={styles.name}>Yana Winih Avrila</Text>
      <Text style={styles.info}>NIM   : 0320240083</Text>
      <Text style={styles.info}>Class : Manajemen Informatika</Text>
    </View>

  </View>
</View>
{/* Today's Class */}
<View style={styles.card}>
  <Text style={styles.sectionTitle}>Today's Class</Text>

  <Text>Mobile Programming</Text>
  <Text>Room A203</Text>
  <Text>10:00 AM</Text>

  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>CHECK IN</Text>
  </TouchableOpacity>
</View>

{/* Upcoming Class */}
<View style={styles.card}>
  <Text style={styles.sectionTitle}>Upcoming Class</Text>

  <Text>Database Systems</Text>
  <Text>Room B104</Text>
  <Text>01:00 PM</Text>
</View>


        {/* Attendance History */}
        <View style={styles.card}>
        <Text style={styles.sectionTitle}>Attendance History</Text>
        
        <Text>Present: {presentCount}</Text>
        <Text>Absent: {absentCount}</Text>
</View>
        <FlatList
          data={attendanceHistory}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0d3998",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
    avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3, },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
  backgroundColor: "#1e73e8",
  padding: 12,
  borderRadius: 8,
  marginTop: 10,
  width: "100%",
  alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  historyCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  course: {
    fontWeight: "bold",
  },

  date: {
    color: "gray",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  status: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});