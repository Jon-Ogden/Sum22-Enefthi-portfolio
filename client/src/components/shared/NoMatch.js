import { Link } from "react-router-dom";
import "../../Css/shiftleft.css"

const NoMatch = () => (
    <div className="shiftleft">
    <h3>Page Not Found (react route not found)</h3>
    <Link to ='/'>Home</Link>
    </div>

  )
  
  export default NoMatch;