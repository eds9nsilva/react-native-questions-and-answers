import { StyleSheet } from 'react-native';

interface Text {
  FontSize?: number;
  FontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  Color?: string;
}

export interface StylesProps extends Text {
  Top?: number;
  Bottom?: number;
  BottomLine?: number;
  TopLine?: number;
  HeightLine?: number;
  ColorLine?: string;
  BorderRadiusLine?: number;
}

export const styles = ({
  Top = 8,
  Bottom = 8,
  BottomLine = 12,
  TopLine = 12,
  HeightLine = 1,
  ColorLine = 'black',
  BorderRadiusLine = 0,
  FontSize = 14,
  FontWeight = 'normal',
  Color = 'black',
}: StylesProps) =>
  StyleSheet.create({
    line: {
      backgroundColor: ColorLine,
      height: HeightLine,
      marginBottom: BottomLine,
      marginTop: TopLine,
      borderRadius: BorderRadiusLine,
    },
    text: {
      fontSize: FontSize,
      fontWeight: FontWeight,
      color: Color,
      maxWidth: '91%',
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 16,
      marginRight: 12,
      backgroundColor: '#000',
    },
    container: {
      marginTop: Top,
      marginBottom: Bottom,
    },
    flexDirectionAndAlignItems: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
