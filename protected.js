import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Protected = (props) => {
    const {Component } = props
    const history = useHistory();
    useEffect(()=> {
        let signin = localStorage.getItem('signin');
        if(signin === "false"){
            history.push('/');
        }
    });
    return ( 
        <div>
            <Component/>
        </div>
     );
}
 
export default Protected;