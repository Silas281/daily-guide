import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, selectAllGoals } from '../../features/goals/goalsSilce';


export default function AddGoalForm() {
    // const useDispatch = useDispatch();
    const [goal, setGoal] = useState('');
    const dispatch = useDispatch();
    const goals = useSelector(selectAllGoals);
    const size = goals.length;


    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (goal !== "") {
            //create a new goal
            const newGoal = {
                id: `${size + 1}`,
                text: goal,
                isCompleted: false
            }
            //alert(JSON.stringify(newGoal))

            //dispatch
            dispatch(addGoal(newGoal))
            setGoal("")

        }

    }
    return (
        <form className='add-goal-form' onSubmit={handleSubmit} >
            <label htmlFor='goal' >What are your goals Today? </label>
            <br />
            <div className='inputs-container'>
                <input className='goal-input' placeholder='Enter here...' name='goal' value={goal} onChange={(e) => setGoal(e.target.value)} />
                <button className='submit-btn' type='submit'>Add</button>
            </div>
        </form>
    )
}
