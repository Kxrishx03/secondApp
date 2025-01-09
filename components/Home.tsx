import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const {push} = useRouter();

  return (
    <View>
      <Text accessibilityRole="header">Home Screen</Text>
      <Button
        accessibilityLabel="Navigate to Profile Screen"
        title="Go to Profile"
        onPress={() => push("/profile")} 
      />
    </View>
  );
}
