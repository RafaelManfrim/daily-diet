import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Header } from '@components/Header';
import { FormGroup } from '@components/FormGroup';
import { MealCategoryButton } from '@components/MealCategoryButton';
import { useMealsContext } from '@contexts/MealsContext';

import { CollumnsContainer, CreateMealButton, CreateMealButtonText, CreateMealContainer, CreateMealContent, CreateMealForm, Input, DescriptionInput, RadioTitle } from './styles';

export function CreateMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [typeSelected, setTypeSelected] = useState<'good' | 'bad'>('good')

  const { addMeal } = useMealsContext()

  const navigation = useNavigation()

  function showDatePicker() {
    setDatePickerVisibility(true);
  };

  function hideDatePicker() {
    setDatePickerVisibility(false);
  };

  function handleConfirmDate(date: Date) {
    setDate(date)
    hideDatePicker();
  };

  function showTimePicker() {
    setTimePickerVisibility(true);
  };

  function hideTimePicker() {
    setTimePickerVisibility(false);
  };

  function handleConfirmTime(time: Date) {
    setTime(time)
    hideTimePicker();
  };

  function handleTypeSelect(type: 'good' | 'bad') {
    setTypeSelected(type)
  }

  const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR })

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const formattedTime = `${hours}:${minutes}`

  function handleCreateMeal() {
    const meal = {
      id: String(new Date().getTime()),
      name,
      description,
      date: new Date(`${formattedDate} ${formattedTime}`),
      isInDiet: typeSelected === 'good' ? true : false,
    }

    addMeal(meal)

    navigation.navigate("createMealFeedback", { isInDiet: meal.isInDiet })
  }

  return (
    <CreateMealContainer>
      <Header title='Nova refei????o' />
      <CreateMealContent>
        <CreateMealForm>
          <FormGroup label="Nome">
            <Input
              value={name}
              onChangeText={setName}
            />
          </FormGroup>
          <FormGroup label="Descri????o">
            <DescriptionInput
              multiline
              vaule={description}
              onChangeText={setDescription}
              numberOfLines={3}
            />
          </FormGroup>
          <CollumnsContainer>
            <FormGroup label="Data">
              <Input
                onPressIn={showDatePicker}
                value={formattedDate}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </FormGroup>
            <FormGroup label="Hora" style={{ marginLeft: "8%" }}>
              <Input
                onPressIn={showTimePicker}
                value={formattedTime}
              />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
            </FormGroup>
          </CollumnsContainer>
          <RadioTitle>Est?? dentro da dieta?</RadioTitle>
          <CollumnsContainer>
            <FormGroup label="Dieta">
              <MealCategoryButton isActive={typeSelected === 'good'} type="good" title="Sim" onPress={() => handleTypeSelect('good')} />
            </FormGroup>
            <FormGroup label="Fora">
              <MealCategoryButton isActive={typeSelected === 'bad'} type="bad" title="N??o" onPress={() => handleTypeSelect('bad')} style={{ marginLeft: "8%" }} />
            </FormGroup>
          </CollumnsContainer>
        </CreateMealForm>
        <CreateMealButton onPress={handleCreateMeal}>
          <CreateMealButtonText>Cadastrar refei????o</CreateMealButtonText>
        </CreateMealButton>
      </CreateMealContent>
    </CreateMealContainer>
  );
}
