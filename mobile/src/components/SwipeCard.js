import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

export function SwipeCard({ profile, onSwipe }) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 10 || Math.abs(gesture.dy) > 10,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false
      }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 110) return animateOut('right');
        if (gesture.dx < -110) return animateOut('left');

        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    })
  ).current;

  const animateOut = (direction) => {
    Animated.timing(pan, {
      toValue: { x: direction === 'right' ? 500 : -500, y: 0 },
      duration: 180,
      useNativeDriver: false
    }).start(() => {
      pan.setValue({ x: 0, y: 0 });
      onSwipe(direction);
    });
  };

  const rotate = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-9deg', '0deg', '9deg']
  });

  return (
    <Animated.View
      style={[styles.card, { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate }] }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.photoPlaceholder}>
        <Text style={styles.photoEmoji}>📸</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{profile.name}, {profile.age}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
        <Text style={styles.location}>📍 {profile.location}</Text>
        <Text style={styles.tags}>{profile.interests.join(' • ')}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 420,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  photoPlaceholder: {
    height: 250,
    backgroundColor: '#1f2a44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoEmoji: {
    fontSize: 42
  },
  info: {
    padding: 16,
    gap: 8
  },
  name: {
    color: theme.colors.textPrimary,
    fontWeight: '700',
    fontSize: 24
  },
  bio: {
    color: theme.colors.textSecondary
  },
  location: {
    color: theme.colors.textSecondary,
    fontWeight: '600'
  },
  tags: {
    color: theme.colors.brand,
    fontWeight: '600'
  }
});
