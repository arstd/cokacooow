import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const NavigationItemComponent = ({title = 'default', icon = 'default'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navItem}>
      <Pressable style={{flex: 1}} onPress={() => navigation.navigate(title)}>
      <View style={styles.navItemImage}>
        <Ionicons
          name={icon}
          size={50}
          color={'white'}
        ></Ionicons>
      </View>
      <View style={styles.navItemLabel}>
        <Text style={styles.label}>{title}</Text>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    width: 100,
    height: 100
  },
  navItemImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemLabel: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavigationItemComponent;
