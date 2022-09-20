import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const CreateMealContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const CreateMealContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`