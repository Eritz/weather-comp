import * as actionTypes from '../actions/actions';

// Example finalList: [{id: uuid.v1(), location: '', lat: '', long: '', info: [], isActive: false, hasInfo: false,}]
const initialState = {
    finalList: [],
    isLoading: false,
    isAmerican: true,
}

// Reducer for the Menu and WeatherSection
const reducer = (state=initialState, action) => {
    switch (action.type) {
        
        // Change isLoading to true because WEB_PENDING is initiated.
        case actionTypes.WEB_PENDING:
            return {
                ...state,
                isLoading: action.value,
            }
        
        // Change isLoading to false after an Error is encountered
        case actionTypes.WEB_PENDING_ERROR:
            alert(action.error);
            return {
                ...state,
                isLoading: action.value,
            }

        /** Iterate over the passed-in-list from clicking the "Add to Menu" button.
         *  Check if the longitude(can change to latitude) is empty or not.
         *  Some results surprisingly have longitude/latitiude such as "aaaaaaa".
         *  Input the filtered array as part of the finalList
         */ 
        case actionTypes.PARSE_ALL:
            const passedArray = [...action.passed];
            let newArray = passedArray.filter(ele => ele.long !== ''); // Check if the longitude is empty
            // Shorten the location string 
            newArray = newArray.map(ele=> {
                let comma = 0;
                let len = ele.location.length;
                let i;
                for (i=0; i< len; i++) {                  
                    if (ele.location.charAt(i) === ',') {
                        comma++;
                    }
                    if (comma === 2) {
                        ele.location = ele.location.substr(0,i)
                        return ele;
                    }
                }
                return ele;
            })

            let newFinal = [...state.finalList];
            newFinal = newFinal.concat(newArray);
            
            return {
                ...state,
                finalList: newFinal,
            }
        
        /** Change isActive and hasInfo to the opposite value
         *  after the thunk (changeActiveFromList) completes.
         */
        case actionTypes.CHANGE_ACTIVE:
            const updatedList = [...state.finalList];
            const index = updatedList.findIndex(ele => ele.id === action.value);
            
            const active = updatedList[index].isActive;

            if (active === false) {
                updatedList[index].info.currently = action.response.currently;
                updatedList[index].info.hourly = action.response.hourly;
                updatedList[index].info.daily = action.response.daily;
            } 

            updatedList[index].hasInfo = !active;
            updatedList[index].isActive = !active;

            return {
                ...state,
                finalList: updatedList,
                isLoading: false,
            }

        // Change units from metric to imperial or vice-versa based on click
        case actionTypes.CHANGE_UNITS:
            let imperialUnits = !(state.isAmerican);
            return {
                ...state,
                isAmerican: imperialUnits,
            }
        
        // Delete selected items
        case actionTypes.DELETE_SELECTED: 
            const newFinalList = [...state.finalList];
            let indexToDelete = newFinalList.findIndex(ele => ele.id === action.value);

            newFinalList.splice(indexToDelete, 1)
            return {
                ...state,
                finalList: newFinalList,
            }
        
        // Delete all from the list
        case actionTypes.DELETE_ALL_LIST:
            let emptyList = [];
            
            return {
                ...state,
                finalList: emptyList,
            }

        default:
            return state;
    }
        
}

export default reducer;