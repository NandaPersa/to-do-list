import Header from "./components/Header"
import Task from "./components/Task"
import TextField from "./components/TextField"
import clipBoardImg from './assets/Clipboard.png'

import styles from './styles.module.css'
import { useEffect, useState } from "react"

export type TasksProps = {
  id: number,
  description: string;
  status: 'Concluded' | 'Pending'
}

function App() {
  const [tasks, setTasks] = useState<Array<TasksProps>>([])
  const [countTasks, setCountTasks] = useState<number>(0);
  const [countTaskConcluded, setCountTaskConcluded] = useState<number>(0)

  useEffect(() => {
    const contAux = tasks.length;
    const concludedTaskAux = tasks.filter((task) => task.status === 'Concluded');
    const countConcludedAux = concludedTaskAux.length;
    setCountTasks(contAux);
    setCountTaskConcluded(countConcludedAux);
    console.log(tasks)
  }, [tasks])
  return (
    <>
      <Header />
      <TextField  setTasks={setTasks} tasks={tasks}/>
      <div className={styles.container}>
        <div className={styles.headerList}>
          <div className={styles.createdTask}>
            <p>Tarefas Criadas</p>
            <span className={styles.counter}>{countTasks}</span>
          </div>
          <div className={styles.concludedTask}>
            <p>Concluídas</p>
            <span className={styles.counter}>{countTaskConcluded} de {countTasks}</span>
          </div>
        </div>
        {tasks.length > 0 ? (
          tasks.map(item => (
            <Task key={item.id} item={item} tasks={tasks} setTasks={setTasks} />
          ))
      ) : (
        <div className={styles.tasksNotFound}>
          <img src={clipBoardImg} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      )}
      
      </div>
    </>
  )
}

export default App
