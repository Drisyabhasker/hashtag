import React,{useContext,useState,useEffect} from 'react'
import './signup.css'
import ListContext from '../Context/Context'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fanco from '../../src/logo1.jpeg'
import axios from 'axios'

function Signup() {

    const [List, setList] = useContext(ListContext)

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        timezone: '',
        captcha: 'true'
      })
      useEffect (()=> {
        
      axios.post('https://admin.fanconvo.com/api/v3/sign-up/fan', state)
        .then(function (response) {
          console.log(response);
          setList((previos)=>[...previos,state])
        })},[])

      const handleChange = (e) => {
        setState((prev) =>({   
          ...prev,
          [e.target.name] : e.target.value
        }))
      }


      const onclick =(e) =>{
        e.preventDefault()
        
        //const value = e.target.value;
        setList(previos=>([...previos,
         state]
         ))}

      

console.log(List);

    return (
      <div>
        <div className="auth-inn">
          
          
        
    <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="cardname">
        <header className="card-header">
          <h4 className="card-title mt-2">Fan Sign-Up</h4>
        </header>
        
            <form onSubmit={onclick} >
            
            <div className="form-row">
            <div className="form-group ">
              <div className="col form-group">
                
             
                <label >First name </label>
                <input style={{borderColor: 'green', borderWidth : 3}}
                className="block-example border border-primary"
               className="rounded-pill"
                type="text" 
                name="firstName" 
                value={state.firstName}
                onChange={handleChange}
               
                className="form-control" placeholder="First Name" />
              </div>
              <div className="col form-group">
                <label>Last name</label>
                <input style={{borderColor: 'green', borderWidth : 3}} 
                type="text" 
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                className="form-control" 
                placeholder=" Last Name" />
              </div>
              </div>
              </div>
            
            <div className="form-group">
            
              <label>Username</label>
              <input style={{borderColor: 'green', borderWidth : 3}}
                type="text"
                name="username" 
                value={state.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
            
              <label>Email</label>
              <input style={{borderColor: 'green', borderWidth : 3}}
                type="email"
                name="email" 
                value={state.email}
                onChange={handleChange}
                className="form-control"
                placeholder="example: hashtag@gmail.com"
              />
              
              
              
            </div>

            <div className="form-row">
              
                <label>Password</label>
                <input style={{borderColor: 'green', borderWidth : 3}}
                  type="password"
                  name="password" 
                  value={state.password}
                  onChange={handleChange}
                 
                  className="form-control"
                  placeholder="Password"
                />
              
              
            </div>
            
            <div className="form-row">
              


            <label for="cars">Choose a Time Zone</label>
            
              <input style={{borderColor: 'green', borderWidth : 3}}
                type="text"
                name="timezone" 
                value={state.timezone}
                onChange={handleChange}
                className="form-control"
                placeholder="timezone"
              />





<div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" style={{borderColor: 'green', borderWidth : 3}}
                        name="captcha"
                        value={state.captcha}
                        onChange={handleChange}
                        id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Captcha</label>
                    </div>  
              </div>
            
            
            <div className="form-group">
            
              <button variant="success" style={{borderColor: 'green', borderWidth : 3}} type="submit" >
                SIGN UP
              </button>
              
              
            </div>
            
           
            <small className="text-muted"></small>
            
          </form>
          
          
         
          </div>
          </div>
          </div>
          </div>
          </div>
    )
}

export default Signup
