import React, { useState } from 'react'
import { Mycontext } from './Mycontext'

function Store({children}) {
    const [FormData , setFormData] = useState({
      username:"",
      email:"",
      password:"",
      confirmPassword:""
    });
    
    const[welcome , setwelcome] =useState(false);
    
  return (
    <Mycontext.Provider value = {{FormData , setFormData , welcome , setwelcome}}>
        {children}
    </Mycontext.Provider>
  )
}

export default Store