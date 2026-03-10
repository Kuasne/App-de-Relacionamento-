import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SwipeCard } from './src/components/SwipeCard';
import { ActionButtons } from './src/components/ActionButtons';
import { mockCandidates } from './src/services/mockCandidates';
import { theme } from './src/theme/theme';

export default function App() {
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [passes, setPasses] = useState(0);

  const currentProfile = useMemo(() => mockCandidates[index], [index]);

  const handleSwipe = (direction) => {
    if (!currentProfile) return;

    if (direction === 'right') setLikes((prev) => prev + 1);
    if (direction === 'left') setPasses((prev) => prev + 1);
    setIndex((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>App de Relacionamento</Text>
        <Text style={styles.subtitle}>MVP Front (React Native)</Text>

        <View style={styles.cardArea}>
          {currentProfile ? (
            <SwipeCard profile={currentProfile} onSwipe={handleSwipe} />
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Acabaram os perfis</Text>
              <Text style={styles.emptyText}>Em breve novos perfis para descobrir.</Text>
            </View>
          )}
        </View>

        <ActionButtons
          disabled={!currentProfile}
          onPass={() => handleSwipe('left')}
          onLike={() => handleSwipe('right')}
        />

        <View style={styles.stats}>
          <Text style={styles.statsText}>Curtidas: {likes}</Text>
          <Text style={styles.statsText}>Passes: {passes}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '700'
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginBottom: 20
  },
  cardArea: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyState: {
    height: 420,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.card
  },
  emptyTitle: {
    color: theme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '700'
  },
  emptyText: {
    color: theme.colors.textSecondary,
    marginTop: 8
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  statsText: {
    color: theme.colors.textSecondary,
    fontWeight: '600'
  }
});
