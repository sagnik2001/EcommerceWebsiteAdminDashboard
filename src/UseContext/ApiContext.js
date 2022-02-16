import axios from "axios"
import {React,createContext,useEffect,useContext,useState} from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../Api/apiconfig"

const ApiContext = createContext({

})

export const useApi = ()=>useContext(ApiContext)


export default function ApiContextProvider(props){

    const navigate = useNavigate()
    const [ data ,setdata ] = useState([])
    
    const [ authenticated, setauthenticated] = useState(false)
    const [signInerror,setsignInerror] = useState('')
    const [ erroralertSignIn ,seterroralertSignIn] = useState(false)
    const [signUperror,setsignUperror] = useState('')
    const [ erroralertSignUp ,seterroralertSignUp] = useState(false)

    const SignInContext = (data,setemail,setpassword)=>{
       
        const body = JSON.stringify(data)
      

          axios.post(
            `${api}/admin/signin`,
            body, 
            {
                headers: { 
                    
                    'Content-Type' : 'application/json' 
                }
            })
       
        .then(res=>{
            setemail('')
            setpassword('')
            seterroralertSignIn(false)
            setsignInerror('')
        const {token , user} = res.data
        console.log(token,user);
        setauthenticated(true)
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
        setdata(user)
        })
        .catch(err=>{
            setauthenticated(false)
            seterroralertSignIn(true)
           setsignInerror(err.response.data.error)
        })
  
    }

    const RegisterContext = (data,setemail,setpassword,setfirstName,setlastName)=>{
       
        const body = JSON.stringify(data)
      

          axios.post(
            `${api}/admin/signup`,
            body, 
            {
                headers: { 
                    
                    'Content-Type' : 'application/json' 
                }
            })
       
        .then(res=>{
            setfirstName('')
            setlastName('')
            setemail('')
            setpassword('')
            seterroralertSignIn(false)
            setsignInerror('')
            console.log(res)
            navigate("/signin")
            
        })
        .catch(err=>{
            setauthenticated(false)
            seterroralertSignUp(true)
           setsignUperror(err.response.data.error)
        console.log(err)
        })
  
    }

   
    const value = {
        SignInContext,
        authenticated,
        signInerror,
        erroralertSignIn,
        seterroralertSignIn,
        signUperror,
        erroralertSignUp,
        seterroralertSignUp,
        RegisterContext
    }

    return (
        <ApiContext.Provider value = {value}>
            {props.children}
        </ApiContext.Provider>
    )

}

