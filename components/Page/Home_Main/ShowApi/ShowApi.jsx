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
       const title = form.title.value 
       const description = form.description.value;
       const mainImg = form.mainImg.value 
       const subImg = form.subImg.value 
       const location = form.location.value 
       const time = form.time.value 
       const allDetails = {title, description, mainImg, subImg, location, time}
       console.log(allDetails)

       fetch('http://localhost:6001/newsAdd', {
          method:"POST",
          headers:
          {"content-type" : "application/json"},
          body: JSON.stringify(allDetails)
       })
       .then(res=> res.json())
       .then(data=> {
            console.log(data)
            if(data.insertedId){
                alert("Successfully added")
                form.reset()
            }
       })

     

          
    }
    return(
        <div className="py-[40px]">
            <div className="max-w-7xl mx-auto w-full px-5">
               <div className="">
                    <form action="" onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                       <div className="flex space-y-2 flex-col">
                        <label htmlFor="" className="text-xl font-bold text-black ">Title</label>
                                <input type="text" name="title" className="input input-bordered w-full"
                                placeholder="Enten News Title" />
                        </div>
                        <div className="flex space-y-2 flex-col">
                            <label htmlFor="" className="text-xl font-bold text-black ">Description</label>
                                <input type="text" name="description" className="input input-bordered w-full"
                                placeholder="Enter Details" />
                        </div>
                        <div className="flex space-y-2 flex-col">
                            <label htmlFor="" className="text-xl font-bold text-black ">Main Image</label>
                                <input type="text" name="mainImg" className="input input-bordered w-full"
                                placeholder="Main Image url link" />
                        </div>
                        <div className="flex space-y-2 flex-col">
                            <label htmlFor="" className="text-xl font-bold text-black ">Sub Image</label>
                                <input type="text" name="subImg" className="input input-bordered w-full"
                                placeholder="Enter Sub Image" />
                        </div>
                        <div className="flex space-y-2 flex-col">
                            <label htmlFor="" className="text-xl font-bold text-black ">Location</label>
                                <input type="text" name="location" className="input input-bordered w-full"
                                placeholder="Enter location" />
                        </div>
                         <div className="flex space-y-2 flex-col">
                            <label htmlFor="" className="text-xl font-bold text-black ">Time</label>
                                <input type="date" name="time" className="input input-bordered w-full"
                                placeholder="Enter Date" />
                        </div>
                        <div className="col-span-3">
                            <button type="submit" className="btn btn-success font-bold
                            text-black uppercase w-full">Add Details</button>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    )
}

export default ShowApi;