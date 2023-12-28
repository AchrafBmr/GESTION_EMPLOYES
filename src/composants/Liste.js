import { useDispatch, useSelector } from "react-redux"
import { Deleteaction } from "../config/Actions"
import { Link } from "react-router-dom"
import '../styles/List.css'

export default function List() {
        const emp = useSelector(d=>d.employes)
        const n = useSelector(d=>d.employes.length)
        const disp = useDispatch()

        
        const handeldelete = (e) => {
            const confirm = window.confirm('Are you sure?')
            if(confirm){disp(Deleteaction(e.mat))}
        }

  return (
      <div className="table">
      <table>
        <thead>
          <tr>
            <th>matrcul</th>
            <th>name</th>
            <th>departement</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((e) => (
            <tr key={e.mat}>
              <td>{e.mat}</td>
              <td>{e.name}</td>
              <td>{e.dep}</td>
              <td>
                <Link to={`/Edit/${e.mat}`}>
                  <button>edit</button>
                </Link>
                <button onClick={() => handeldelete(e)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <h3>numbres employes: {n}</h3>
      </table>
  </div>
  )
}
