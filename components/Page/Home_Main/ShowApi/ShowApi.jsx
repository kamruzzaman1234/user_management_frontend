"use client";

import { Ultra } from "next/font/google";
import { useEffect, useState } from "react";

const ShowApi = ()=>{
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:6001/users")
        .then(res=> res.json())
        .then(data=> setUser(data))
    },[])


    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const department = form.department.value;  
        const newUser = {Name: name, department: department};
        console.log(newUser); 
        fetch('http://localhost:6001/users', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            const userAddress = [...user, data]
            setUser(userAddress)
        })

        form.reset()
          
    }
    return(
        <div className="py-[40px]">
            <div className="max-w-7xl mx-auto w-full px-5">
                <h2>{user.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div>
                    {
                        user.map(u=> <p key={u.id}>
                                {u.id} : {u.Name} : {u.department}
                        </p>)
                    }
                </div>
                <div className="mt-5">
                    <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                        <input type="text" className="input input-bordered " name="name" placeholder="Name"/>
                        <br />
                        <input type="text" className="input input-bordered " name="department" placeholder="Department"/>
                        <br />
                        <input type="submit" className="btn btn-success" value="Add User"/>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ShowApi;