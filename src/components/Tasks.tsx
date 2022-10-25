import styles from './Tasks.module.css';
import { TaskSingle } from './TaskSingle';
import { TaskEmpty } from './TaskEmpty';

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

            {/* <TaskEmpty /> */}


            <TaskSingle />

        </div>
    )
}