import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from "styled-components/native";
import { ArrowUpRight, Plus } from "phosphor-react-native"

export const HomeContainer = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
`;

export const HomeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const Logo = styled.Image``;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const StatisticsButton = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const StatisticsButtonIcon = styled(ArrowUpRight).attrs(({ theme }) => {
  return {
    size: 24,
    color: theme.COLORS.GREEN_DARK
  }
})`
  align-self: flex-end;
`

export const StatisticsButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-top: -24px;
`;

export const StatisticsButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const HomeContent = styled.View``;

export const HomeListHeader = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const HomeListHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  margin-bottom: 8px;
`;

export const HomeListHeaderButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px 24px;
`;

export const HomeListHeaderButtonIcon = styled(Plus).attrs(({ theme }) => {
  return {
    size: 18,
    color: theme.COLORS.WHITE
  }
})``

export const HomeListHeaderButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-left: 12px;
`;

export const HomeList = styled.FlatList``;
