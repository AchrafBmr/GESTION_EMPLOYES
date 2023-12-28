import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addaction } from '../config/Actions'


export default function Add() {
    const [mat, setMat]=useState('')
    const [name, setName]=useState('')
    const [dep, setDep]=useState('')
    const disp = useDispatch()
    const emp = useSelector(d => d.employes)
    let exist = emp.find((e)=> e.mat === parseInt(mat))


    const handelAdd = (e) => {
        e.preventDefault()
        if(name && mat && dep){
            if(exist){
                alert('employes exist')
            }else{
                disp(Addaction({
                    mat : parseInt(mat),
                    name : name,
                    dep: dep
                }))
                setDep('')
                setMat('')
                setName('')
                alert('Add successfully')
            }
        }else{
            alert('Add matrcul & name & departement')
        }
        
    }
  return (
    <form>
        <tr>
            <td>matrcul</td>
            <td><input type='text' value={mat} onChange={e => setMat(e.target.value)}/></td>
        </tr>

        <tr>
            <td>name</td>
            <td><input type='text' value={name} onChange={e => setName(e.target.value)}/></td>
        </tr>

        <tr>
            <td>departement</td>
            <td><input type='text' value={dep} onChange={e => setDep(e.target.value)}/></td>
        </tr>
        <button onClick={(e)=>handelAdd(e)}>Add</button>
      
    </form>
  )
}
