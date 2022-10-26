import { useEffect, useState } from 'react';
import { pathApi, token } from '../App';
import styles from './Counter.module.css';

interface Task {
    id: number;
    label: string;
    is_complete: boolean;
}

export function Counter() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const amount = tasks.length;

    useEffect(() => {
        fetch(pathApi + 'tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => response.json())
            .then(data => setTasks(data.data))
    }, []);

    const completeTasks = tasks.filter(complete => complete.is_complete).length

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