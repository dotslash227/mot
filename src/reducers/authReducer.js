const authState = {
    uid: '',
    name: '',
    email: '',
    isLoggedIn: false
}


const authReducer = (state=authState,action) =>{
    switch(action.type){
        case "LOGIN":{
            user = action.payload
            state = {uid: user.uid, name: user.name, email: user.email, isLoggedIn: true}
            break;
        }
        case "LOGOUT":{
            state = {
                ...state,
                uid: '', name:'', email: '',
                isLoggedIn: false,
            }
            break;
        }        
    }
    return state;
}

export default authReducer;