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
            return {
                ...taskItem,
                status: (taskItem.status === 'Pending' ? 'Concluded' : 'Pending') as 'Concluded' | 'Pending'
            };
        });

        setTasks(newTasks);
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
                checked={item.status === 'Concluded'}
                className={styles.radioButton}
                onChange={handleCheckboxChange}
            />
            {item.status === 'Concluded' && (
                <Check className={styles.checkIcon} weight='bold' size={12} />
            )}
        </div>
        <p className={item.status === 'Pending' ? styles.description : styles.concluded}>{item.description}</p>
        <Trash className={styles.trashIcon} size={24} onClick={() => handleDeleteTask(item.id)} />
    </div>
  );
}

export default Task;