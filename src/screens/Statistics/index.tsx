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
        <StatisticsContentTitle>Estatísticas gerais</StatisticsContentTitle>
        <StatisticCard number={1} description="melhor sequência de pratos dentro da dieta" />
        <StatisticCard number={1} description="refeições registradas" />
        <MealsInDietCollumsContainer>
          <StatisticCard number={1} description="refeições dentro da dieta" variant='good' />
          <StatisticCard number={2} description="refeições fora da dieta" variant='bad' style={{ marginLeft: "8%" }} />
        </MealsInDietCollumsContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
