import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import BrandComponent from '../components/BrandComponent';
import NavigationItemComponent from '../components/NavigationItemComponent';

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandComponent></BrandComponent>
        </View>
        <View style={styles.navigation}>
          <NavigationItemComponent
            title="Home"
            icon="accessibility-sharp"
          ></NavigationItemComponent>
          <NavigationItemComponent title="Product"></NavigationItemComponent>
          <NavigationItemComponent title="test"></NavigationItemComponent>
          <NavigationItemComponent title="test"></NavigationItemComponent>
          <NavigationItemComponent title="test"></NavigationItemComponent>
          <NavigationItemComponent title="test"></NavigationItemComponent>
        </View>
        <View style={styles.order}>
          <Text style={styles.h1}>Title</Text>
          <ScrollView
            contentContainerStyle={{ flexDirection: 'row', gap: '20' }}
            horizontal={true}
          >
            <View style={styles.orderItem}>
              <View style={styles.orderItemImage}></View>
              <View style={styles.orderItemDescription}></View>
            </View>
            <View style={styles.orderItem}>
              <View style={styles.orderItemImage}></View>
              <View style={styles.orderItemDescription}></View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.favorite}>
          <Text style={styles.h1}>Title</Text>
          <View style={styles.bannerContainer}></View>
        </View>
        <View style={styles.food}>
          <Text style={styles.h1}>Title</Text>
          <View style={{ gap: 20 }}>
            <View>
              <View style={styles.foodItem}>
                <View style={styles.foodItemImage}></View>
                <View style={styles.foodItemDescription}></View>
              </View>
              <View style={styles.foodItem}>
                <View style={styles.foodItemImage}></View>
                <View style={styles.foodItemDescription}></View>
              </View>
              <View style={styles.foodItem}>
                <View style={styles.foodItemImage}></View>
                <View style={styles.foodItemDescription}></View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: '#011638',
    flex: 1,
  },
  header: {
    backgroundColor: '#011638',
    height: 160,
    justifyContent: 'center',
    padding: 20,
  },
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#12366dff',
    padding: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    marginBottom: 20,
  },
  order: {
    backgroundColor: 'red',
    padding: 20,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 280,
    height: 100,
  },
  orderItemImage: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
  },
  orderItemDescription: {
    backgroundColor: 'white',
    flex: 1,
  },
  favorite: {
    backgroundColor: 'white',
    padding: 20,
  },
  bannerContainer: {
    backgroundColor: 'green',
    height: 140,
    borderRadius: 20,
  },
  food: {
    backgroundColor: 'orange',
    padding: 20,
  },
  foodItem: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginBottom: 16,
    width: 280,
    height: 100,
  },
  foodItemImage: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  foodItemDescription: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default HomeScreen;
