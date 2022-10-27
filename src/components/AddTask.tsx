import styles from './AddTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { axios } from '../App';

interface TaskProps {
    id?: number;
    label: string;
    is_complete?: boolean;
}

interface CreateTask {
    onCreateTask: (task: TaskProps) => void;
}

export function AddTask({ onCreateTask }: CreateTask) {

    async function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const data = Object.fromEntries(formData);

        try {
            await axios.post('tasks', {
                label: data.label
            })
                .then(response => onCreateTask(response.data.data))
        } catch (error) {
            alert('Houve um erro ao criar a tarefa')
        }


    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.content}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                name='label'
            />
            <button type='submit'>
                <strong>Criar</strong>
                <PlusCircle size={20} className={styles.icon} />
            </button>
        </form>
    )
}