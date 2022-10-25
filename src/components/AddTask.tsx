import styles from './AddTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function AddTask() {
    return (
        <div className={styles.content}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                <span>Criar</span>
                <PlusCircle size={16} className={styles.icon} />
            </button>
        </div>
    )
}