export const userReducer = (state, action) =>{
    switch (action.type) {
        case 'add_player1':
            return [
                ...state, {
                    name: action.name
                }
            ]
        case 'add_player2' :
            return [
                ...state, {
                    name: action.name
                    
                }
            ]
            default:
                return state;
    }
}