import type { StylesProps } from 'src/styles';

interface QuestionAndAnswer {
  id: number;
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
