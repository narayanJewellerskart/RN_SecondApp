import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More....</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 5,
    shadowColor: '#020617',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
