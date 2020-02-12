
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(task => (
                <Todo toggleCompleted={props.toggleCompleted}className='todo'{...props} key={task.id} task={task}/>
            ))}
        </div>
    );
};
export default TodoList; 