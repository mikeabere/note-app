import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

function Noteitem({ note }) {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}> {item.text} </Text>
    </View>
  );
}

export default Noteitem;
