import { Trash } from 'phosphor-react';
import styles from './TaskSingle.module.css';

export function TaskSingle() {
    return (
        <div className={styles.tasksContent}>
            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <Trash size={24} />
            </div>

            <div className={styles.taskSingle}>
                <input type="checkbox" />
                <label htmlFor="">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <Trash size={24} />
            </div>
        </div>
    )
}