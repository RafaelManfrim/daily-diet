import { useNavigation } from '@react-navigation/native';
import { StatisticCard } from '@components/StatisticCard';
import { useMealsContext } from '@contexts/MealsContext';
import { percentageFormatter } from '@utils/formatter';

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
  const { meals, mealsInDietPercentage } = useMealsContext()
  const navigation = useNavigation();

  const mealsInDiet = meals.filter(item => item.isInDiet)
  const mealsNotInDiet = meals.filter(item => !item.isInDiet)

  let bestSequenceInDiet = 0

  meals.reduce((acc, item) => {
    if (item.isInDiet) {
      return acc + 1
    } else {
      bestSequenceInDiet = acc > bestSequenceInDiet ? acc : bestSequenceInDiet
      return 0
    }
  }, 0)

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <StatisticsContainer>
      <StatisticsHeader>
        <StatisticsBackButton onPress={handleBackToHome}>
          <StatisticsBackIcon />
        </StatisticsBackButton>
        <StatisticsHeaderTitle>
          {percentageFormatter(mealsInDietPercentage)}
        </StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>das refeições dentro da dieta</StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContent>
        <StatisticsContentTitle>Estatísticas gerais</StatisticsContentTitle>
        <StatisticCard number={bestSequenceInDiet} description="melhor sequência de pratos dentro da dieta" />
        <StatisticCard number={meals.length} description="refeições registradas" />
        <MealsInDietCollumsContainer>
          <StatisticCard number={mealsInDiet.length} description="refeições dentro da dieta" variant='good' />
          <StatisticCard number={mealsNotInDiet.length} description="refeições fora da dieta" variant='bad' style={{ marginLeft: "8%" }} />
        </MealsInDietCollumsContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
