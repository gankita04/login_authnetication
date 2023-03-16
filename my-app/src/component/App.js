
import { Outlet } from "react-router-dom";

import Header from "./Header";


function App(){
    return(
       
        <div className="">
        <Header/>
       
        <Outlet></Outlet>
        
        
        

        </div>
        
          )
} 


export default App; //when single componet then we use default