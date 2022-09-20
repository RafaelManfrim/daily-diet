import { useNavigation } from "@react-navigation/native";

import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.jpeg";

import {
  HomeContainer,
  HomeHeader,
  Logo,
  Avatar,
  StatisticsButton,
  StatisticsButtonIcon,
  StatisticsButtonTitle,
  StatisticsButtonText,
  HomeContent,
  HomeListHeader,
  HomeListHeaderTitle,
  HomeListHeaderButton,
  HomeListHeaderButtonIcon,
  HomeListHeaderButtonText,
  HomeList,
} from "./styles";

export function Home() {
  const navigation = useNavigation();

  function handleNavigateToStatistics() {
    navigation.navigate("statistics");
  }

  function handleNavigateToCreateMeal() {
    navigation.navigate("createMeal");
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <Logo source={logoImg} />
        <Avatar source={avatarImg} />
      </HomeHeader>

      <StatisticsButton onPress={handleNavigateToStatistics}>
        <StatisticsButtonIcon />
        <StatisticsButtonTitle>90,86%</StatisticsButtonTitle>
        <StatisticsButtonText>
          das refeições dentro da dieta
        </StatisticsButtonText>
      </StatisticsButton>

      <HomeContent>
        <HomeListHeader>
          <HomeListHeaderTitle>Refeições</HomeListHeaderTitle>
          <HomeListHeaderButton onPress={handleNavigateToCreateMeal}>
            <HomeListHeaderButtonIcon />
            <HomeListHeaderButtonText>Nova refeição</HomeListHeaderButtonText>
          </HomeListHeaderButton>
        </HomeListHeader>
        <HomeList />
      </HomeContent>
    </HomeContainer>
  );
}
