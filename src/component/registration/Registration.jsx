import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';
import { useState } from "react";

const Registration = () => {
    const [isError,setError] = useState('');
    const [show,setIsShow] = useState(false);
    const [isSuccess,setIsSuccess] = useState("");
    const auth = getAuth(app);
    const handleFromValue = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(password.length<0){
            setError("Password must be 6 character");
            return;
        }else if(!/[A-Z]/.test(password)){
            setError("Password must one upper character ");
            return;
        }
        setError("");
        setIsSuccess("");
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            setIsSuccess("User created successfully");
            console.log(user)
        })
        .catch(error=>{
            setError(error.message);
        })
        
    }
    return (
        <>
            <div className="" >
                <div className= " mx-auto w-1/2 " >
                    <form onSubmit={handleFromValue} >
                        <input className='my-3 px-7 py-2 w-96 outline-none border border-red-100  '  
                        placeholder="Your Email" type="email" name="email" id="email" /> <br />
                        <input 
                            className='px-7 my-3 py-2 w-96 outline-none border border-red-100'
                            placeholder="Enter password" 
                            type= {show?"text":"password"}  name="password" 
                            id="password" 
                        />
                            <span onClick={ ()=>setIsShow(!show) } >Show</span>
                        <br />
                        <input className=' bg-[#11de1f] py-2 px-7 my-4 hover:border rounded-md   ' type="submit" value="Registration" />
                    </form>
                    { 
                        isError && <div>
                            <p className="text-[red] text-center mt-2 ml-4 " > { isError} </p>
                        </div>
                    }
                    {
                        isSuccess && <div>
                            <p className=" text-[#3ede3e] " >{isSuccess}</p>
                        </div>
                    }
                </div>
                    
            </div>
        </>
    )
}

export default Registration
