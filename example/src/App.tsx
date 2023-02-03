import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { QuestionsAndAnswers } from 'react-native-questions-and-answers';
import { questions } from './types/Q&A';

export default function App() {
  return (
    <View style={styles.container}>
      <QuestionsAndAnswers
        itens={questions}
        OpenMultiQuestions
        ColorCircule="#ff0000"
        FontSizeAnswer={12}
        FontSizeQuestion={14}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    marginStart: 30,
    marginTop: 30,
  },
});
