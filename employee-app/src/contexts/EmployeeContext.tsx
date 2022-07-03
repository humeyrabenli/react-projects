import React, { FC } from "react";
import { createContext,useState } from "react";

export type IEmployeeContext ={
     id:number,
     name:string,
     email:string,
     address:string,
     phone:string
 }

 const defaultValue= {
    id:1, name:'Maria',email:'maria@maria.com',address:'Via monte',phone:'(850) 11-12'
 }

const EmployeeContext = React.createContext<Partial<IEmployeeContext>>({});

 export const EmployeeContextProvider:FC=({children})=>{
     
   const [employees]=useState<IEmployeeContext>({id:1, name:'Maria',email:'maria@maria.com',address:'Via monte',phone:'(850) 11-12'},{id:2, name:'ad'})

    return (
       <EmployeeContext.Provider value={employees}>
            {children}
          </EmployeeContext.Provider>

    )
 }