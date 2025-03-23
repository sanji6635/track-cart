import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [trackData, setTrackData] = useState(
    JSON.parse(localStorage.getItem("trackingData")) || null
  );

  return (
    <DataContext.Provider value={{ trackData, setTrackData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

// import { createContext,useContext,useState } from "react";

// export const AuthContext=createContext();

// export const useAuthContext=()=>{
//     return useContext(AuthContext);
// }

// export const AuthContextProvider=({children})=>{
//     const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("chat-user")) || null)

//     return (
//     <AuthContext.Provider value={{authUser,setAuthUser}} >
//         {children}
//     </AuthContext.Provider>
//     )
// }
