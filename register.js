import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Register = () => {
    const[id , setId] = useState('');
    const[fullname , setFullname] = useState('');
    const[mail , setMail] = useState('');
    const[iserror , setIsError] = useState('');
    const[phone , setPhone] = useState('');
    const[password , setPassword] = useState('');
    const[ConfirmPassword , setConfirmPassword] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleConfirmPasswordChange = (e) => {
        if(e.target.value !== password){
            setIsError('did not match')
        }else{
            setIsError('match')
        }
        setConfirmPassword(e.target.value); 
      };

    const handleSubmit = (e) => {
      e.preventDefault()
      const reg = {id,fullname,mail,phone,password,ConfirmPassword};
      
      setIsPending(true);
    //   setTimeout(() => {
    //     fetch('http://localhost:8000/blogs',{
    //         method: "POST",
    //         headers : {"Content-Type":"application/json"},
    //         body: JSON.stringify(blog)
    //     }).then(()=> {
    //         console.log("new blog added")
    //         setIsPending(false)
    //     })
    //   }, 500);
        fetch('http://localhost:5000/reg',{
            method: "POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(reg)
        }).then(()=> {
            console.log("new blog added")
            setIsPending(false)
            // history.go(-1);
            history.push('/')
        })

        if(password !== ConfirmPassword) {
           return setIsError('Passwords do not match');
            
          }
    }

    return (
        <div className="create">
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" placeholder="enter your name" required value={id}
                onChange={(e) => setId(e.target.value)}/>

                <label>Fullname:</label>
                <input type="text" placeholder="enter your Fullname" required value={fullname}
                onChange={(e) => setFullname(e.target.value)}/>

                <label>Mail:</label>
                <input type="email" required 
                placeholder="enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}/>
            
                <label>Phone number:</label>
                <input type="number" placeholder="enter your number" required value={phone}
                onChange={(e) => setPhone(e.target.value)}/>

                <label>Password :</label>
                <input type="password" placeholder="enter password" required value={password} 
                onChange={(e) => setPassword(e.target.value)}/> 

                <label>Confirm Password</label>
                <input type="password" placeholder="confirm password" required value={ConfirmPassword}
                onChange={handleConfirmPasswordChange}/>

                


                            
                
                {/* <label>Blog Author:</label>
                <select value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="monishka">monishka</option>
                    <option value="sneha">sneha</option>
                </select> */}

                {/* <button>Add Blog</button> */}
                {iserror && <p>{iserror}</p>}
                {!isPending && <button>register </button>}
                {isPending && <button disabled>Adding account...</button>}
            
               

            </form>
        </div>
    );
}

export default Register ;