
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { axios } from '../App';
import styles from './Task.module.css';

interface TaskItem {
    id: number;
    label: string;
    is_complete: boolean;
    onUpdateTask: (isComplete: boolean) => void;
    onDeleteTask: (id: number, is_complete: boolean) => void;
}


export function Task({ id, label, is_complete, onDeleteTask, onUpdateTask }: TaskItem) {
    const [checked, setChecked] = useState(is_complete);

    async function handleConclude() {
        setChecked(!checked);

        try {
            await axios.put(`tasks/${id}`, {
                label,
                is_complete: !checked
            }).then(response => onUpdateTask(!checked))
        } catch (error) {
            alert('Houve um erro ao atualizar a tarefa')
        }
    }

    function handleDeleteTask() {
        onDeleteTask(id, is_complete)
    }

    return (
        <div className={styles.taskSingle}>
            <div className={styles.checkContent}>
                <input type="checkbox" onClick={handleConclude} defaultChecked={checked} />
                <label>{label}</label>
            </div>
            <button onClick={handleDeleteTask} title='Deletar Tarefa'>
                <Trash size={24} />
            </button>
        </div>

    )
}