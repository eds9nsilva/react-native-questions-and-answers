import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { QuestionsAndAnswers } from 'react-native-questions-and-answers';
import { questions } from './types/Q&A';

export default function App() {
  return (
    <View style={styles.container}>
      <QuestionsAndAnswers
        itens={questions}
        ColorCircule="#ff0000"
        OpenMultiQuestions
        SizeCircule={30}
        FontSizeAnswer={12}
        FontSizeQuestion={14}
        FontWeightQuestion="bold"
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
