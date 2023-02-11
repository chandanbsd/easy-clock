import { useState } from "react";
import { View } from "react-native";
import { BottomNavigation, Text, Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

const ToDoRoute = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.addToDoSection}>
      <TextInput
        label={""}
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.addToDoText}
      />
      <Button icon={"camera"} style={styles.addToDoBtn}></Button>
    </View>
  );
};

const styles = {
  addToDoSection: {
    display: "flex",
    flexDirection: "row",
  },
  addToDoText: {
    width: "80%",
  },
  addToDoBtn: {
    // fontSize: 5,
    width: 20,
  },
};

export default ToDoRoute;
