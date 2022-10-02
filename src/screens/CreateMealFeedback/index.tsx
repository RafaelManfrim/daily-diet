import { useNavigation, useRoute } from '@react-navigation/native';

import happyPng from '@assets/happy.png';
import sadPng from '@assets/sad.png';

import {
  CreateMealFeedbackContainer,
  FeedbackTitle,
  FeedbackText,
  FeedbackIllustration,
  GoToHomeButton,
  GoToHomeButtonText
} from './styles';

type CreateMealFeedbackParams = {
  isInDiet: boolean
}

export function CreateMealFeedback() {
  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate("home")
  }

  const route = useRoute()
  const { isInDiet } = route.params as CreateMealFeedbackParams

  return (
    <CreateMealFeedbackContainer>
      <FeedbackTitle isInDiet={isInDiet}>
        {isInDiet ? "Continue assim!" : "Que pena!"}
      </FeedbackTitle>
      <FeedbackText>
        {isInDiet ?
          "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        }
      </FeedbackText>
      <FeedbackIllustration source={isInDiet ? happyPng : sadPng} />
      <GoToHomeButton onPress={handleGoToHome}>
        <GoToHomeButtonText>Ir para a página inicial</GoToHomeButtonText>
      </GoToHomeButton>
    </CreateMealFeedbackContainer>
  );
}
