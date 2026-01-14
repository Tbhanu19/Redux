import { useState } from "react"
import { useDispatch } from "react-redux"

function Form (){

    let dispatch=useDispatch();

    const [amount,setAmount]=useState(0);
    const [fullname,setFullName]=useState("");  
    const [mobile,setMobile]=useState(0);  
    return (
        <>
        <div>
           <h2>Form</h2>
           <input type ="number" placeholder="enter amount" value={amount} 
           onChange={(e)=>{ let data=e.target.value;
            setAmount(data);
           }}/>
        </div>
        <button className="btn btn-success col-1"  onClick={()=>{
            dispatch({type:"deposit",payload:amount})
            setAmount("");
        }}>Deposit</button>
        <button className="btn btn-danger col-1 m-2" onClick={()=>{
            dispatch({type:"withdraw",payload:amount})
            setAmount("");
        }}>Withdraw</button>
        <div>
            <input type="text" placeholder="enter fullname" value ={fullname} 
            onChange={(e)=>{let data =e.target.value;
                setFullName(data)
            }}/>
           <button className="btn btn-primary" onClick={()=>{
            dispatch({type:"nameUpdate",Payload:fullname})
            setFullName("");
           }}>Update</button>
        </div>
        <div>
            <input type="number" placeholder="enter mobile number" value={mobile} 
            onChange={(e)=>{let data = e.target.value;
                setMobile(data)
            }}/>
           <button className="btn btn-primary" onClick={()=>{
            dispatch({type:"mobileUpdate",Payload:mobile})
            setMobile("");
           }}>Update</button>
        </div>
        <button claassName="btn btn-danger mt-2" onClick={()=>{
            dispatch({type:"reset"})
            setMobile("");
        }}>Reset</button>
        </>
    )
}

export default Form;