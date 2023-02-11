import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import ToDoRoute from "./screens/ToDoRoute";

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "toDoRoute",
      title: "To Do",
      focusedIcon: "checkbox-marked",
      unfocusedIcon: "checkbox-marked-circle-plus-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    toDoRoute: ToDoRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavBar;
