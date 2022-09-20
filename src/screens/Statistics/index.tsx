import { StatisticCard } from '@components/StatisticCard';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import {
  StatisticsContainer,
  StatisticsHeader,
  StatisticsBackButton,
  StatisticsBackIcon,
  StatisticsHeaderTitle,
  StatisticsHeaderSubtitle,
  StatisticsContent,
  StatisticsContentTitle,
  MealsInDietCollumsContainer
} from './styles';

export function Statistics() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <StatisticsContainer>
      <StatisticsHeader>
        <StatisticsBackButton onPress={handleBackToHome}>
          <StatisticsBackIcon />
        </StatisticsBackButton>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>das refeições dentro da dieta</StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContent>
        <StatisticsContentTitle>Meals in diet</StatisticsContentTitle>
        <StatisticCard number={1} description="Breakfast" />
        <StatisticCard number={1} description="Breakfast" />
        <MealsInDietCollumsContainer>
          <StatisticCard number={1} description="Breakfast" />
          <StatisticCard number={2} description="Lunch" />
        </MealsInDietCollumsContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
