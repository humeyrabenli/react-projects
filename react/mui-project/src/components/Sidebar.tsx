import React from 'react'


type props = {
  
    title: string;
    description: string;
    archives: {
        title: string;
        url: string;
    }[];
    social: {
        name: string;
        icon: string;
        };
    
}

const Sidebar:React.FC<props> = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar