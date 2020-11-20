import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/auth';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import { View, ActivityIndicator } from 'react-native';

function Routes() {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator  size='large' color='#353535'/>
      </View>
    );
  };

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
};

export default Routes;
