import React from 'react';

import styles from './styles.module.css';
import { PlusCircle } from 'phosphor-react';

const TextField: React.FC = () => {
  return(
    <div className={styles.container}>
        <input placeholder='Adicione uma nova tarefa' className={styles.input} />
        <button className={styles.button}>Criar <PlusCircle weight='bold' /></button>
    </div>
  );
}

export default TextField;