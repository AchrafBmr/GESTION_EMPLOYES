const intit={
    employes:[
        {mat:100 , name:'rami' , dep:'achat'},
        {mat:101 , name:'dawd' , dep:'vante'}
    ]    
}

export const reducer = (state = intit , action) =>{
    switch(action.type){
        case 'Addaction':
            return {...state,employes:[...state.employes,action.payload]}

        case 'Editeaction':
            const finds = state.employes.find(e=>e.mat === parseInt(action.payload.mat))
            if(finds){
                finds.mat= action.payload.mat
                finds.name = action.payload.name;
                finds.dep = action.payload.dep
            }
            return state

        case 'Deleteaction':
            return {...state,employes:[...state.employes.filter(e=>e.mat !== parseInt(action.payload))]}
        default:
            return state
    }
}