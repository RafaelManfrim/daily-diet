import { ViewProps } from 'react-native';
import {
  StatisticCardContainer,
  StatisticCardNumber,
  StatisticCardDescription
} from './styles';

type StatisticCardProps = ViewProps & {
  number: number;
  description: string;
  variant?: 'default' | 'good' | 'bad';
}

export function StatisticCard({
  number,
  description,
  variant = 'default',
  ...rest
}: StatisticCardProps) {
  return (
    <StatisticCardContainer variant={variant} {...rest}>
      <StatisticCardNumber>{number}</StatisticCardNumber>
      <StatisticCardDescription>{description}</StatisticCardDescription>
    </StatisticCardContainer>
  );
}
