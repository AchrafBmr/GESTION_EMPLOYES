export function Addaction(add){
    return {type: "Addaction" , payload:add}
}

export function Editeaction(edit){
    return {type: "Editeaction" , payload:edit}
}

export function Deleteaction(dlt){
    return {type: "Deleteaction" , payload:dlt}
}