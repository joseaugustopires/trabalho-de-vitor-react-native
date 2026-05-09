import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  Pressable,
  useColorScheme,
  useWindowDimensions,
  Platform,
} from 'react-native';

const posts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600',
  },
];

const lightColors = {
  background: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  mutedText: '#64748b',
  primary: '#2563eb',
  primaryText: '#ffffff',
  border: '#e2e8f0',
  statBox: '#eff6ff',
};

const darkColors = {
  background: '#020617',
  card: '#0f172a',
  text: '#f8fafc',
  mutedText: '#94a3b8',
  primary: '#60a5fa',
  primaryText: '#020617',
  border: '#1e293b',
  statBox: '#111827',
};

export default function App() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();

  const [isFollowing, setIsFollowing] = useState(false);

  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  const screenPadding = 18;
  const postGap = 4;
  const postSize = (width - screenPadding * 2 - postGap * 2) / 3;

  return (
    <SafeAreaView
      style={[
        styles.screen,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          {
            paddingHorizontal: screenPadding,
          },
        ]}
        ListHeaderComponent={
          <>
            <ProfileHeader colors={colors} />

            <StatsGrid colors={colors} />

            <Pressable
              onPress={() => setIsFollowing(!isFollowing)}
              style={({ pressed }) => [
                styles.followButton,
                {
                  backgroundColor: isFollowing ? 'transparent' : colors.primary,
                  borderColor: colors.primary,
                  opacity: pressed ? 0.75 : 1,
                  transform: [{ scale: pressed ? 0.97 : 1 }],
                },
              ]}
            >
              <Text
                style={[
                  styles.followButtonText,
                  {
                    color: isFollowing ? colors.primary : colors.primaryText,
                  },
                ]}
              >
                {isFollowing ? 'Seguindo' : 'Seguir'}
              </Text>
            </Pressable>

            <Text
              style={[
                styles.sectionTitle,
                {
                  color: colors.text,
                },
              ]}
            >
              Posts recentes
            </Text>
          </>
        }
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.postWrapper,
              {
                width: postSize,
                height: postSize,
                marginRight: (index + 1) % 3 === 0 ? 0 : postGap,
                marginBottom: postGap,
              },
            ]}
          >
            <Image source={{ uri: item.image }} style={styles.postImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function ProfileHeader({ colors }) {
  return (
    <View
      style={[
        styles.profileCard,
        platformShadow,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600',
        }}
        style={styles.avatar}
      />

      <Text
        style={[
          styles.name,
          {
            color: colors.text,
          },
        ]}
      >
        Victor Sassi
      </Text>

      <Text
        style={[
          styles.role,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Desenvolvedor Mobile
      </Text>

      <Text
        style={[
          styles.bio,
          {
            color: colors.mutedText,
          },
        ]}
      >
        Criando interfaces mobile com React Native, StyleSheet, Flexbox e boas
        práticas de UI.
      </Text>
    </View>
  );
}

function StatsGrid({ colors }) {
  return (
    <View style={styles.statsGrid}>
      <StatCard label="Posts" value="128" colors={colors} />
      <StatCard label="Seguidores" value="8.4k" colors={colors} />
      <StatCard label="Seguindo" value="312" colors={colors} />
    </View>
  );
}

function StatCard({ label, value, colors }) {
  return (
    <View
      style={[
        styles.statCard,
        platformShadow,
        {
          backgroundColor: colors.statBox,
          borderColor: colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.statValue,
          {
            color: colors.text,
          },
        ]}
      >
        {value}
      </Text>

      <Text
        style={[
          styles.statLabel,
          {
            color: colors.mutedText,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const platformShadow = Platform.select({
  ios: {
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  android: {
    elevation: 5,
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  listContent: {
    paddingTop: 18,
    paddingBottom: 30,
  },

  profileCard: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 18,
  },

  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginBottom: 16,
  },

  name: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 4,
  },

  role: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  bio: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },

  statsGrid: {
    flexDirection: 'row',
    marginBottom: 18,
  },

  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 4,
  },

  statValue: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 13,
    fontWeight: '700',
  },

  followButton: {
    height: 56,
    borderRadius: 18,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },

  followButtonText: {
    fontSize: 17,
    fontWeight: '900',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 12,
  },

  postWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#cbd5e1',
  },

  postImage: {
    width: '100%',
    height: '100%',
  },
});
