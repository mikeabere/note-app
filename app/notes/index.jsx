import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const NoteScreen = () => {
   const [notes, setNotes] = useState([
     { id: "1", text: "Note One" },
     { id: "2", text: "Note Two" },
     { id: "3", text: "Note Three" },
   ]);

  return (
    <View style={styles.container}>
      <FlatList 
       data={notes}
       keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default NoteScreen;
