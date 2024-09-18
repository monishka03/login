import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>That page cannot be found</p>
            <p> click on : <span><Link to ='/'>Back to Home Page</Link> </span></p>
        </div>
    );
}
 
export default NotFound;
