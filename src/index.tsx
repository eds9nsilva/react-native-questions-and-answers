import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import type { Item, Props } from 'src/types/questions_and_answers';
import { styles } from './styles';

export const QuestionsAndAnswers = ({
  itens,
  Top,
  Bottom,
  Line,
  BottomLine,
  TopLine,
  HeightLine,
  ColorLine,
  BorderRadiusLine,
  showsVerticalScrollIndicator,
  FontSize,
  FontWeight,
  Color,
  OpenMultiQuestions,
}: Props) => {
  const [itensState, setItensState] = useState(itens);

  const renderItem = ({ item }: Item) => {
    const openDoubt = (id: number, open: boolean) => {
      setItensState(
        OpenMultiQuestions
          ? itensState.map(doubt => ({
              ...doubt,
              open: doubt.id === id ? !open : doubt.open,
            }))
          : itensState.map(doubt => ({
              ...doubt,
              open: doubt.id === id ? !open : false,
            })),
      );
    };

    return (
      <TouchableOpacity onPress={() => openDoubt(item.id, item.open)}>
        <View style={styles({ Top, Bottom }).container}>
          <View style={styles({}).flexDirectionAndAlignItems}>
            <View style={styles({}).circle} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles({ FontSize, FontWeight, Color }).text}>
                {item.question}
              </Text>
              {item.open && (
                <Text style={styles({ FontSize, FontWeight, Color }).text}>
                  {item.answer}
                </Text>
              )}
            </View>
          </View>
          {Line && (
            <View
              style={
                styles({
                  BottomLine,
                  TopLine,
                  HeightLine,
                  ColorLine,
                  BorderRadiusLine,
                }).line
              }
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
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      />
    </>
  );
};
