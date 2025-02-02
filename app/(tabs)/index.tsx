import { StyleSheet, View, Text } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-center mt-3 text-2xl font-light text-orange-300'>
        Tab One
      </Text>
      <View style={styles.separator} />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
