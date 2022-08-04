import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card, Header} from 'components';
import {ICPlus, ICSearch} from 'assets';
import {Data} from 'constants/index';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';

const Contact = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={styles.container}>
      <Header
        title="Contacts"
        iconButtonLeft={<ICSearch />}
        iconButtonRight={<ICPlus />}
      />
      <FlatList
        maxToRenderPerBatch={10}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={Data}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('ContactDetails', {data: item})}
          />
        )}
      />
    </View>
  );
};

export default Contact;
