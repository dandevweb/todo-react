import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
    return (
        <div className={styles.tasksContent}>
            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <button title='Deletar Tarefa'>
                    <Trash size={24} />
                </button>
            </div>

            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <button title='Deletar Tarefa'>
                    <Trash size={24} />
                </button>
            </div>

            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <button title='Deletar Tarefa'>
                    <Trash size={24} />
                </button>
            </div>

            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <button title='Deletar Tarefa'>
                    <Trash size={24} />
                </button>
            </div>
        </div>
    )
}