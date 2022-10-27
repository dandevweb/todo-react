import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { TaskEmpty } from './components/TaskEmpty';
import { Counter } from './components/Counter';
import { Task } from './components/Task';
import { useEffect, useState } from 'react';
import Axios from 'axios';

export const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY2Njc3ODgxNiwiZXhwIjoxNjY5MzcwODE2LCJuYmYiOjE2NjY3Nzg4MTYsImp0aSI6InBIaVNabUhFV2NRS0ZuR0UiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.V1KAGu7kbz1i1Ld6QzG4HcQmdA9nvLOyT84CztsP9EY';

export const axios = Axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
});

interface TaskProps {
  id: number;
  label: string;
  is_complete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const amount = tasks.length;
  const [completeTasks, setCompleteTasks] = useState(0);

  useEffect(() => {
    axios('tasks').then(response => {
      setTasks(response.data.data)
      setCompleteTasks((response.data.data).filter(complete => complete.is_complete).length)
    })
  }, [])

  function createTask(task: TaskProps) {
    setTasks([task, ...tasks])
  }

  function updateTask(isComplete: boolean) {
    isComplete ? setCompleteTasks(completeTasks + 1) : setCompleteTasks(completeTasks - 1)

  }

  function deleteTask(id: number, is_complete: boolean) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });

    const isComplete = is_complete ? completeTasks - 1 : completeTasks;

    axios.delete(`tasks/${id}`).then(response => {
      setTasks(tasksWithoutDeletedOne);
      setCompleteTasks(isComplete);
    })
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <AddTask onCreateTask={createTask} />

        <div className={styles.content}>

          <Counter
            amount={amount}
            completeTasks={completeTasks}
          />

          {amount === 0 ?
            <TaskEmpty /> :

            <div className={styles.tasksContent}>
              {tasks.map(task => {
                return (
                  <Task
                    onUpdateTask={updateTask}
                    onDeleteTask={deleteTask}
                    key={task.id}
                    {...task}
                  />
                )
              })}
            </div>
          }
        </div>
      </div>
    </>
  )
}

