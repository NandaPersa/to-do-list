import styles from './styles.module.css';
import { Check, Trash } from 'phosphor-react';
import { TasksProps } from '../../App';
interface Props {
    item: TasksProps;
    tasks: TasksProps[];
    setTasks: (a: TasksProps[]) => void;
}

const Task = ({item, setTasks, tasks}: Props) => {

    const handleCheckboxChange = () => {
        const newTasks = tasks.map((taskItem) => {
            if(taskItem.id !== item.id) return taskItem;
            const aux = item;
            aux.status = taskItem.status === 'Pending' ? 'Concluded' : 'Pending'
            return aux;
        })

        setTasks(newTasks)
    }

    const handleDeleteTask = (id: number) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

  return (
    <div className={styles.container}>
        <div className={styles.checkboxWrapper}>
            <input 
                type='checkbox' 
                name='checkbox' 
                className={styles.radioButton}
                onChange={handleCheckboxChange}
            />
            {item.status === 'Concluded' && (
                <Check color='#FFFFFF' weight='bold' />
            )}
        </div>
        <p className={item.status === 'Pending' ? styles.description : styles.concluded}>{item.description}</p>
        <Trash onClick={() => handleDeleteTask(item.id)} />
    </div>
  );
}

export default Task;