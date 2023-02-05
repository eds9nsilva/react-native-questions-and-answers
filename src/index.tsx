/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, Image, View } from 'react-native';
import type { Item, Props } from 'src/types/questions_and_answers';
import right from './Icons/right.png';
import down from './Icons/down.png';

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
  SizeCircule = 22,
  BorderRadiusLine = 0,
  FontSizeQuestion = 14,
  FontSizeAnswer = 12,
  FontWeightQuestion = '400',
  FontWeightAnswer = 'normal',
  Color = 'black',
}: Props) => {
  const [itensState, setItensState] = useState(itens);

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

  const renderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity onPress={() => openDoubt(item.key, item.open)}>
        <View style={{ marginTop: Top, marginBottom: Bottom, maxWidth: '96%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: SizeCircule,
                height: SizeCircule,
                borderRadius: SizeCircule * 2,
                marginRight: 12,
                backgroundColor: ColorCircule,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={item.open ? down : right}
                style={{ width: SizeCircule / 2, height: SizeCircule / 2 }}
              />
            </View>
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
