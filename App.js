import { StatusBar } from "expo-status-bar";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import BottomNavBar from "./src/BottomNavBar";

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Easy Clock" />
      </Appbar.Header>
      <StatusBar style="auto" />
      <BottomNavBar />
    </PaperProvider>
  );
}
