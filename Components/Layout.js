import { useMemo } from "react";
import { useState } from "react";

const Layout = ({children}) => {
    
    return (
        <div className="content">
            {children}
            
        </div>
     );
}
 
export default Layout;