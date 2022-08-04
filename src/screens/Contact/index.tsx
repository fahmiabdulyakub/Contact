import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Card, Header} from 'components';
import {ICPlus, ICSearch} from 'assets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';
import {useSelector} from 'react-redux';
import {RootState} from 'store/reducers';
import {DataUserType} from 'types/DataUserType';
import {Data} from 'constants/index';

const Contact = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const {user} = useSelector((state: RootState) => state.userReducer);
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useState<DataUserType[]>();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const onRefresh = () => {
    setRefresh(true);
    setUserData(Data);
    setRefresh(false);
  };
  return (
    <View style={styles.container}>
      <Header
        title="Contacts"
        iconButtonLeft={<ICSearch />}
        iconButtonRight={<ICPlus />}
      />
      <FlatList
        refreshing={refresh}
        onRefresh={onRefresh}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={userData}
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
