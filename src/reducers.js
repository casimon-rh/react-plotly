var initialState = {
    location: '',
    data: {
        data: {}
    },
    dates: [],
    temps: [],
    selected: {
        date: '',
        temp: null
    }
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LOCATION':
            return {
                ...state,
                location: action.location
            };
        case 'SET_DATA':
            return {
                ...state,
                data: action.data || initialState.data
            };
        default:
            return state;
    }
}