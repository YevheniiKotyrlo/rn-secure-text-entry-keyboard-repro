/**
 * Android composes keyboardType and secureTextEntry into one inputType, and
 * each field below commits one the props did not ask for.
 *
 * @format
 */

import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

const PASSWORD = 'hunter2';

function App() {
  const [hidden, setHidden] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.label}>1. secureTextEntry</Text>
          <TextInput
            style={styles.input}
            defaultValue={PASSWORD}
            secureTextEntry
          />

          <Text style={styles.label}>
            2. secureTextEntry + keyboardType="email-address"
          </Text>
          <TextInput
            style={styles.input}
            defaultValue={PASSWORD}
            secureTextEntry
            keyboardType="email-address"
          />

          <Text style={styles.label}>
            3. secureTextEntry={String(hidden)} + autoCapitalize="characters"
          </Text>
          <TextInput
            style={styles.input}
            defaultValue={PASSWORD}
            secureTextEntry={hidden}
            autoCapitalize="characters"
          />
          <Button
            title={hidden ? 'Show' : 'Hide'}
            onPress={() => setHidden(value => !value)}
          />

          <Text style={styles.label}>
            4. keyboardType="url" + secureTextEntry={'{false}'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="https://"
            keyboardType="url"
            secureTextEntry={false}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
    gap: 8,
  },
  label: {
    marginTop: 12,
    fontSize: 15,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 18,
    color: '#000000',
  },
});

export default App;
