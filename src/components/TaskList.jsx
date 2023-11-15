import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList() {
  
  const { tasks} = useContext(TaskContext)

  if (tasks.length == 0) {
    return <h1 className='text-black text-4xl font-bold text-center'>No hay tareas</h1>;
  }
  return (
    <div className='max-w-md mx-auto grid grid-cols-1 gap-2 '>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
