import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const CreateMealContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const CreateMealContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`

export const CreateMealForm = styled.ScrollView`
  flex: 1;
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  `};
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
  width: 100%;
`;

export const DescriptionInput = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  `};
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
`

export const CollumnsContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 48%;
`

export const RadioTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const CreateMealButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px 24px;
`

export const CreateMealButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`