/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import type { Item, Props } from 'src/types/questions_and_answers';

export const QuestionsAndAnswers = ({
  itens,
  Line,
  showsVerticalScrollIndicator = false,
  OpenMultiQuestions = false,
  Top = 8,
  Bottom = 8,
  BottomLine = 12,
  TopLine = 12,
  HeightLine = 1,
  ColorLine = 'black',
  ColorCircule = 'black',
  BorderRadiusLine = 0,
  FontSizeQuestion = 14,
  FontSizeAnswer = 12,
  FontWeightQuestion = '400',
  FontWeightAnswer = 'normal',
  Color = 'black',
}: Props) => {
  const [itensState, setItensState] = useState(itens);

  const renderItem = ({ item }: Item) => {
    const openDoubt = (key: number, open: boolean) => {
      setItensState(
        OpenMultiQuestions
          ? itensState.map((doubt) => ({
              ...doubt,
              open: doubt.key === key ? !open : doubt.open,
            }))
          : itensState.map((doubt) => ({
              ...doubt,
              open: doubt.key === key ? !open : false,
            }))
      );
    };

    return (
      <TouchableOpacity onPress={() => openDoubt(item.key, item.open)}>
        <View style={{ marginTop: Top, marginBottom: Bottom, maxWidth: '96%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 16,
                marginRight: 12,
                backgroundColor: ColorCircule,
              }}
            />
            <View style={{ flexDirection: 'column', width: '90%' }}>
              <Text
                style={{
                  fontSize: FontSizeQuestion,
                  fontWeight: FontWeightQuestion,
                  color: Color,
                  maxWidth: '95%',
                }}
              >
                {item.question}
              </Text>
              {item.open && (
                <Text
                  style={{
                    fontSize: FontSizeAnswer,
                    fontWeight: FontWeightAnswer,
                    color: Color,
                    marginTop: 4,
                    maxWidth: '95%',
                  }}
                >
                  {item.answer}
                </Text>
              )}
            </View>
          </View>
          {Line && (
            <View
              style={{
                backgroundColor: ColorLine,
                height: HeightLine,
                marginBottom: BottomLine,
                marginTop: TopLine,
                borderRadius: BorderRadiusLine,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={itensState}
        keyExtractor={(item) => String(item.key)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      />
    </>
  );
};
