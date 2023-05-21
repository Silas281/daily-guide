import React from 'react';

import { useSelector } from 'react-redux';
import { selectAllGoals } from './goalsSilce';
import Goal from './Goal';
import Weather from '../weather/Weather';


export default function Goals() {
    //get goals
    const goals = useSelector(selectAllGoals);
    //console.log(goals.filter(goal => goal.id === "1"))






    return (
        <div className='goals-weather'>

            <div className='goals-main'>
                <h3>Goals</h3>
                <div className='goals'>
                    {Object.values(goals).map((goal) =>
                    (
                        <Goal key={goal.id} goal={goal} />
                    )
                    )}
                </div>
            </div>
            <Weather />
        </div>


    )
}
