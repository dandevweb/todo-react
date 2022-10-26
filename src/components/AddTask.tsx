import styles from './AddTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function AddTask() {
    return (
        <div className={styles.content}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                <strong>Criar</strong>
                <PlusCircle size={20} className={styles.icon} />
            </button>
        </div>
    )
}