import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {

    const history= useHistory();
    const signin=() => {
    localStorage.setItem('signin',false)
    history.push('/')
    alert("are you sure you want to sign out")
    }
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create" /*style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}*/>New Blog</Link>
                {/* <Link to="/">Sign-In</Link> */}
                <Link to="/"><button className='sign-in' onClick={signin}>Sign-In</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;