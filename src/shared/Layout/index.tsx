import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';

const Layout: React.FC = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export { Layout };
