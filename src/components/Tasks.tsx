import styles from './Tasks.module.css';
import clipboardImg from '../assets/clipboard.svg';

export function Tasks() {
    return (
        <div className={styles.content}>
            <header>
                <div className={styles.info}>
                    <h3>Tarefas criadas</h3>
                    <div className={styles.counter}>
                        <span>0</span>
                    </div>
                </div>

                <div className={styles.info}>
                    <h3>Concluídas</h3>
                    <div className={styles.counter}>
                        <span>0</span>
                    </div>
                </div>
            </header>

            <div className={styles.tasksEmpty}>
                <div className={styles.tasksEmptyContent}>
                    <img src={clipboardImg} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}