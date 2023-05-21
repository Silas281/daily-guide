import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteGoal, completeAGoal } from './goalsSilce';

export default function Goal({ goal }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        //alert(goal.id)
        dispatch(deleteGoal(goal));
    }

    const handleMarkGoalComplete = () => {
        dispatch(completeAGoal(goal));
    }

    return (
        <div className={`${goal.isCompleted ? 'goal-done' : 'goal'}`} >
            <p>{goal.text}</p>
            <div className='actions'>
                <button className='remove' onClick={handleDelete}>Remove <MdDelete /></button>
                <button className='done' onClick={handleMarkGoalComplete}>{`${goal.isCompleted ? 'Redo' : 'Done'}`} <MdDone /></button>
            </div>
        </div>
    )
}
