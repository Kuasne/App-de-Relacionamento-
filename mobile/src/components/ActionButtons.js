import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

export function ActionButtons({ onPass, onLike, disabled }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPass}
        disabled={disabled}
        style={({ pressed }) => [styles.button, styles.pass, pressed && styles.pressed, disabled && styles.disabled]}
      >
        <Text style={styles.passText}>Passar</Text>
      </Pressable>

      <Pressable
        onPress={onLike}
        disabled={disabled}
        style={({ pressed }) => [styles.button, styles.like, pressed && styles.pressed, disabled && styles.disabled]}
      >
        <Text style={styles.likeText}>Curtir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  button: {
    width: 130,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pass: {
    backgroundColor: '#2b3448'
  },
  like: {
    backgroundColor: theme.colors.brand
  },
  passText: {
    color: '#fff',
    fontWeight: '700'
  },
  likeText: {
    color: '#fff',
    fontWeight: '700'
  },
  pressed: {
    opacity: 0.8
  },
  disabled: {
    opacity: 0.45
  }
});
