import styles from './Counter.module.css';

interface CounterProps {
    amount: number;
    completeTasks: number;
}
export function Counter({ amount, completeTasks }: CounterProps) {

    return (
        <header className={styles.headerCounter}>
            <div className={styles.info}>
                <h3>Tarefas criadas</h3>
                <div className={styles.counter}>
                    <span>{amount}</span>
                </div>
            </div>

            <div className={styles.info}>
                <h3>Concluídas</h3>
                <div className={styles.counter}>
                    <span>{completeTasks}</span>
                </div>
            </div>
        </header>
    )
}