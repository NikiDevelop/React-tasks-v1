import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import 'primeicons/primeicons.css';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  
  return (
    <div className='bg-yellow-300 text-black p-4 rounded-md shadow-md relative'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-700 text-sm'>{task.description}</p>
      <button className='bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500 absolute bottom-4 right-4'
       onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>      
    </div>    
  );
}
export default TaskCard;
