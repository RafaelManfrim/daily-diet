import { TouchableOpacityProps } from 'react-native';

import {
  MealCategoryButtonContainer,
  MealCategoryButtonIndicator,
  MealCategoryButtonTitle
} from './styles';

type MealCategoryButtonProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
  type: string;
}

export function MealCategoryButton({ title, type, isActive = false, ...rest }: MealCategoryButtonProps) {
  return (
    <MealCategoryButtonContainer isActive={isActive} type={type} {...rest}>
      <MealCategoryButtonIndicator type={type} />
      <MealCategoryButtonTitle>{title}</MealCategoryButtonTitle>
    </MealCategoryButtonContainer>
  );
}
