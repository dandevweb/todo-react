import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { TaskEmpty } from './components/TaskEmpty';
import { Counter } from './components/Counter';
import { Tasks } from './components/Tasks';

export const pathApi = 'http://localhost:8000/api/';
export const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY2Njc3ODgxNiwiZXhwIjoxNjY5MzcwODE2LCJuYmYiOjE2NjY3Nzg4MTYsImp0aSI6InBIaVNabUhFV2NRS0ZuR0UiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.V1KAGu7kbz1i1Ld6QzG4HcQmdA9nvLOyT84CztsP9EY';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />

        <div className={styles.content}>

          <Counter />

          {/* <TaskEmpty /> */}

          <Tasks />

        </div>
      </div>
    </>
  )
}

