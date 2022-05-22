import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Form } from '@components/Form';
import { Result } from '@components/Result';
import { Layout } from '@shared/Layout';
import { CalculationProvider } from '@contexts/CalculationContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <CalculationProvider>
          <Form />
          <Result />
        </CalculationProvider>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
