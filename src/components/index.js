import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
function Fetchdata(){
    const [data,setData]=useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [selectedUserId, setSelectedUserId] = useState(null);

    

    useEffect(() => {
        axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
          .then((res) => {
            setData(res.data);
            setLoading(false); 
          })
          .catch((err) => {
            console.log("No Data Found");
            setLoading(false); 
          });
      }, []);
    
 

    
    const handleUserClick = (user) => {
        setSelectedUser(user);
        setSelectedUserId(user.id)
      };
    
      
  return (
   
    <>
    
    <div className='first-container'>
    
        <div className='container1' >
       
        <ul className='un-list'>
            <div className='title-container'>
        <h5>Users List</h5>

        </div>
        <div className='user-list'>
       
            {loading ? ( 
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : null}
   {data.map((user,index) => (
  
  
<div   className={`list-container ${user.id === selectedUserId ? 'selected' : ''}`}  onClick={() => handleUserClick(user)}>
                        <img src={user.avatar}  alt="avatar" className='image1'/>
                     <li key={index}>
                         {user.profile.firstName +" "+user.profile.lastName}
                       
                        
                  
                    </li>
                    </div>
           

                ))}
        
       
                </div>
           
                
        </ul>
      
        </div>
        






      
        <div className='detiils-container'>
        <div className='title-container'>
        <h5>User Details</h5>
        </div>
        
        {selectedUser && (
        <div className='info-container1'> 
          <div>
          <img src={selectedUser.avatar} alt='No data to show' className='images'/>
          <h2 className='userName'>{selectedUser.profile.username}</h2>
          </div>
          <div className='bio-container'>
            <p>{selectedUser.Bio}</p>
            </div>

            <div className='form-container'>
                <div className='info'>
                <label>Full Name</label>
                <input value={"  "+selectedUser.profile.firstName+" "+selectedUser.profile.lastName} className='input1' />
                
                </div>
                <div className='info'>
                <label>Job Title</label>
                <input value={"  "+selectedUser.jobTitle} className='input1' />
                
                </div>
                <div className='info'>
                <label>Email</label>
                <input value={"  "+selectedUser.profile.email+" "+selectedUser.profile.lastName} className='input1'  />
                
                </div>
            </div>
        </div>
      )}
      
      </div>
     

    </div>
    </>
  )
}

export default Fetchdata