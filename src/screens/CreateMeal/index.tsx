import { Header } from '@components/Header';
import { CreateMealContainer, CreateMealContent } from './styles';

export function CreateMeal() {
  return (
    <CreateMealContainer>
      <Header title='Nova refeição' />
      <CreateMealContent></CreateMealContent>
    </CreateMealContainer>
  );
}
