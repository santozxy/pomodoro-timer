import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { HistoryContainer, HistoryTableContainer, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryTableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmout} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedCycleDate && (
                      <Status statusColor="green"> Concluído</Status>
                    )}

                    {cycle.interruptedCycleDate && (
                      <Status statusColor="red"> Interrompido</Status>
                    )}

                    {!cycle.finishedCycleDate &&
                      !cycle.interruptedCycleDate && (
                        <Status statusColor="yellow"> Em andamento</Status>
                      )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryTableContainer>
    </HistoryContainer>
  );
}
