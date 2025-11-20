"use client";

import { useEffect, useState } from "react";

const NewsAdd = ()=>{
    const [news, setNews] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:6001/newsAdd")
        .then(res=> res.json())
        .then(data=> setNews(data))
    },[])

    const handleDelete = (_id)=>{
 
        console.log("delete koro", _id)
        fetch(`http://localhost:6001/newsAdd/${_id}`, {
            method:"DELETE",
            headers: {'content-type':"application/json"},
            body: JSON.stringify()
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
                alert('delete successfully')
            }
        })
    }


    return(
        <div className="py-8 ">
            <div className="max-w-7xl w-full mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        news.map(n=>{
                          return(
                            <div className="py-4 px-2 shadow flex flex-col space-y-2" key={n.id}>
                                <div className="w-full lg:h-[200px]">
                                    <img src={n.mainImg} alt=""  className="w-full h-full object-cover"/>
                                </div>
                                <h2 className="font-bold text-black uppercase ">{n.title}</h2>
                                <p className="font-sm text-slate-600">{n.description}</p>
                                <div>
                                    <button onClick={()=> handleDelete(n._id)}
                                    className="btn bg-red-400 text-white">Delete</button>
                                </div>
                            </div>
                            
                          )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsAdd;