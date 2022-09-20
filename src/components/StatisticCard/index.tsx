import {
  StatisticCardContainer,
  StatisticCardNumber,
  StatisticCardDescription
} from './styles';

type StatisticCardProps = {
  number: number;
  description: string;
  offTheDiet?: boolean;
}

export function StatisticCard({
  number,
  description,
  offTheDiet = false
}: StatisticCardProps) {
  return (
    <StatisticCardContainer>
      <StatisticCardNumber>{number}</StatisticCardNumber>
      <StatisticCardDescription>{description}</StatisticCardDescription>
    </StatisticCardContainer>
  );
}
