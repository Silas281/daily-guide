import { createSlice } from "@reduxjs/toolkit";


export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        goals: [
            { id: "1", text: "Setup IMac Os 10.3", isCompleted: false },
            { id: "2", text: "Bible Reading", isCompleted: false },
            { id: "3", text: "Submit Hostel Clearance form", isCompleted: false }
        ],
        filteredStatus: '',
    },
    reducers: {
        addGoal: (state, action) => {
            console.log("Action add");
            state.goals.push(action.payload);
        },
        deleteGoal: (state, action) => {
            const updatedGoal = state.goals.filter(g => g.id !== action.payload.id);
            state.goals = updatedGoal;
        },
        completeAGoal: (state, action) => {
            console.log("Action mark coplete");
            const updatedGoals = state.goals.map(item => {
                if (item.id === action.payload.id) {
                    //console.log(item)
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            });
            //console.log(updatedGoals)
            state.goals = updatedGoals;
        }
    }
});

//Selectors
export const selectAllGoals = (state) => state.goals.goals;

export const selectAllCompletedGoals = (state) => state.goals.goals.filter(goal => goal.isCompleted !== true);

//Actions
export const { addGoal, deleteGoal, completeAGoal } = goalsSlice.actions;

//reducer
export default goalsSlice.reducer;