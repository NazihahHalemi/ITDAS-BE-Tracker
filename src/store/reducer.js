
const initialState = {
    user:{},
    badge:{},
    items1:[],
    rack:{},
    rackItems:[],

};


const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){

            case 'FETCH_DATA_USER': 

            newState.user = action.value;
            
            break;

            // case 'FETCH_BADGE_USER': 

            // newState.badge = action.value;
            // newState.items1 = action.value.Items1
            
            // break;

            case 'FETCH_DATA_RACK': 

            newState.rack = action.value;
            //newState.rackItems = action.value.RACK_ID

            break;
            
        
        
    }
    return newState;
};

export default reducer;