import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'
import { AddTodo } from './components/addTodo';
import { ListTodo } from './components/listTodo';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error('Failed to parse tasks from localStorage: ', error);
      }
    }

    return [];
  });

  const addTask = (taskText: string) => {
    if (taskText.trim()) {
      setTasks([...tasks, {
        text: taskText, completed: false,
        id: uuid()
      }]);
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed }: task 
    ));
  }

  return (
    <div className="app">
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <div className="input-container">
        <AddTodo addTask={addTask} />
        <ListTodo todo={tasks} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  )
}

export default App
