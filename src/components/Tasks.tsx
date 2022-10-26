import { Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { pathApi, token } from '../App';
import styles from './Tasks.module.css';

interface Task {
    id: number;
    label: string;
    is_complete: boolean;
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

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
    }, [])

    return (
        <div className={styles.tasksContent}>
            {tasks.map(task => {
                return (
                    <div key={task.id} className={styles.taskSingle}>
                        <div className={styles.checkContent}>
                            <input type="checkbox" />
                            <label htmlFor="">{task.label}</label>
                        </div>
                        <button title='Deletar Tarefa'>
                            <Trash size={24} />
                        </button>
                    </div>
                )
            })}

        </div>
    )
}