import { useContext } from "react";
import { Play, HandPalm } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  HomeContainer,
  Message,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import Countdown from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

export function Home() {
  const { activeCycle, finishedCycle, createNewCycle, interruptedCycle } =
    useContext(CyclesContext);

  const newTaskFormValidationSchema = zod.object({
    task: zod.string().min(6, "Informe a tarefa").max(30),
    minutesAmount: zod
      .number()
      .min(1, "O ciclo precisa ser no mínimo de 5 minutos")
      .max(60, "O ciclo precisa ser no máximo de 60 minutos"),
  });

  type NewCycleFormData = zod.infer<typeof newTaskFormValidationSchema>;

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");
  const isButtonSubmitDisabled = !task || !minutesAmount;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptedCycle}>
            {" "}
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isButtonSubmitDisabled}>
            {" "}
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
      <Message>
        {finishedCycle
          ? "Parabéns, você concluiu o projeto dentro da estimativa de tempo, você pode visualizar seu projeto na aba History"
          : ""}
      </Message>
    </HomeContainer>
  );
}
