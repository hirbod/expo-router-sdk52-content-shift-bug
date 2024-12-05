import { StyleSheet, Image, Platform, ScrollView, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 10 }}>Home without header</Text>
        <Link href="/page" style={{ fontSize: 15, fontWeight: "bold" }}>Go to Page</Link>
      </View>
    </ScrollView>
  );
}


