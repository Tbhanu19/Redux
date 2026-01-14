import { useSelector } from "react-redux"

function Account(){

    let data=useSelector((state)=>{
        return state;
    })
    return(
        <>
        <div>
            <h2>Account Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>user name </th>
                        <th>Mobile</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.fullName}</td>
                        <td>{data.Mobile}</td>

                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Account;