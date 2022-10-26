import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { TaskEmpty } from './components/TaskEmpty';
import { Counter } from './components/Counter';
import { Tasks } from './components/Tasks';

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

