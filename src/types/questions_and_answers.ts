interface Text {
  FontSizeQuestion?: number;
  FontSizeAnswer?: number;
  FontWeightQuestion?:
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
  FontWeightAnswer?:
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
  ColorCircule?: string;
  SizeCircule?: number;
  BorderRadiusLine?: number;
}

interface QuestionAndAnswer {
  key: number;
  open: boolean;
  question: string;
  answer: string;
}

export interface Props extends StylesProps {
  itens: QuestionAndAnswer[];
  showsVerticalScrollIndicator?: boolean;
  Line?: boolean;
  OpenMultiQuestions?: boolean;
}

export interface Item {
  item: QuestionAndAnswer;
}
