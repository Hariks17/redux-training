const CounterReducers = (state=0,action) => {
    switch(action.type){
        case 'Increment':
            return state+1; 
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
    
}

export default CounterReducers
