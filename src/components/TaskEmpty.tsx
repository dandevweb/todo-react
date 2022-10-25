import styles from './TaskEmpty.module.css';
import clipboardImg from '../assets/clipboard.svg';

export function TaskEmpty() {
    return (
        <div className={styles.tasksEmpty}>
            <div className={styles.tasksEmptyContent}>
                <img src={clipboardImg} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}