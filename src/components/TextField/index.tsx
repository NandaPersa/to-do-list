/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useState } from 'react';
import { TasksProps } from '../../App';
import styles from './styles.module.css';
import { PlusCircle } from 'phosphor-react';

interface Props {
    setTasks: (a: TasksProps[]) => void;
    tasks: TasksProps[];
}

const TextField = ({setTasks, tasks}: Props) => {
  const [newTask, setNewTask] = useState<string>('');
  

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleCreateTask(event: any) {
        event?.preventDefault();
        const idCount = tasks.length;
        // @ts-ignore
        const newTask = (event?.target.task.value)
        if(newTask) {
          setTasks([...tasks, { id: idCount + 1, description: newTask, status: 'Pending' }]);
          setNewTask('');
      } else {
        alert('O campo deve ser preechido');
      }
    }
  return(
    <form onSubmit={handleCreateTask}  className={styles.container}>
          <input 
          placeholder='Adicione uma nova tarefa' 
          className={styles.input} 
          name='task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autoComplete='off'
          />
        <button type='submit' className={styles.button}>Criar <PlusCircle weight='bold' /></button>
    </form>
  );
}

export default TextField;

