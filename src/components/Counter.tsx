import styles from './Counter.module.css';

export function Counter() {
    return (
        <header className={styles.headerCounter}>
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
    )
}