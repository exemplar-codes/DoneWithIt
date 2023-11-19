import AppScreen from "./app/components/AppScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <AppScreen style={{ justifyContent: "center", alignItems: "center" }}>
      <AppButton compact />
    </AppScreen>
  );
}
