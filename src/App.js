import React from "react";
import FetchData from "./Components/FetchData"
const App =()=>{
    return(
        <div>
             <h1 className="text-center bg-gray-900 text-white text-4xl pt-5 lg:text-6xl">
                    User Profile
              </h1>
          <FetchData/>

        </div>
    )
}
export default App