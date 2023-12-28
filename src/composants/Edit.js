import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Editeaction } from '../config/Actions'
import { useNavigate, useParams } from 'react-router'
import '../styles/Edit.css'

export default function Edit() {
    const {matt} = useParams()
    const data = useSelector(d => d.employes.find(e => e.mat === parseInt(matt)))
    const [mat, setMat]=useState(data.mat)
    const [name, setName]=useState(data.name)
    const [dep, setDep]=useState(data.dep)
    const disp = useDispatch()
    const navigate = useNavigate()
    

    const handelUp = (e) => {
        e.preventDefault()
        if(name && mat && dep){
            const confirm = window.confirm('Are you sure?')
            if(confirm){
                disp(Editeaction({
                    mat : parseInt(matt),
                    name : name,
                    dep: dep
                }))
                navigate('/')
                alert(' Update successfully')
            }
        }else{
            alert('Add matrcul & name & departement')
        }

    }

  return (
    <div>
    <form>
        <table>
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
            <>
                <>
                    <button onClick={(e) => handelUp(e)}>update</button>
                </>
            </>
        </table>
    </form>
</div>
  )
}
