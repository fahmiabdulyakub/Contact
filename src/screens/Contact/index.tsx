import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card, Header} from 'components';
import {ICPlus, ICSearch} from 'assets';
import {Data} from 'constants/index';

const Contact = () => {
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
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default Contact;
