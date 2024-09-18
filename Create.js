import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const[title , setTitle] = useState('');
    const[body , setBody] = useState('');
    const[author , setAuthor] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault()
      const blog = {title,body,author};
      
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
        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("new blog added")
            setIsPending(false)
            // history.go(-1);
            history.push('/home')
        })
        
    }
    return (
        <div className="create">
            <h2>ADD a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" placeholder="enter title of the blog" required value={title}
                onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body:</label>
                <textarea required 
                placeholder="write your blog"
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <label>Blog Author:</label>
                <input type="text" placeholder="enter author's name" required value={author}
                onChange={(e) => setAuthor(e.target.value)}/>
                
                {/* <label>Blog Author:</label>
                <select value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="monishka">monishka</option>
                    <option value="sneha">sneha</option>
                </select> */}

                {/* <button>Add Blog</button> */}

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            
               

            </form>
        </div>
    );
}

export default Create;