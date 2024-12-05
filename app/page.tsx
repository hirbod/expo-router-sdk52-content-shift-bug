import { StyleSheet, Image, Platform, ScrollView, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome on Page</Text>
        <Text style={{ marginBottom: 10, padding: 20, textAlign: 'center' }}>As long as I do not interact with the ScrollView, everthing is fine, but a single touch is enough to introduce a weird bug once I return back to this screen</Text>

        <Link href="/" style={{ fontSize: 15, fontWeight: "bold" }}>Go to Home</Link>
      </View>
    </ScrollView>
  );
}


