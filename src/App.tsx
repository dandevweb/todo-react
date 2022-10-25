import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />

        <Tasks />
      </div>
    </>
  )
}

