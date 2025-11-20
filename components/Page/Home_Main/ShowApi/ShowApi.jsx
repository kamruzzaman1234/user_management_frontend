"use client";

import { useEffect, useState } from "react";

const ShowApi = () => {
    const [news, setNews] = useState([]);

   
    const loadNews = () => {
        fetch("http://localhost:6001/newsAdd")
            .then(res => res.json())
            .then(data => setNews(data));
    };

    useEffect(() => {
        loadNews();
    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const mainImg = form.mainImg.value;
        const subImg = form.subImg.value;
        const location = form.location.value;
        const time = form.time.value;

        const allDetails = {
            title,
            description,
            mainImg,
            subImg,
            location,
            time
        };

        fetch('http://localhost:6001/newsAdd', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(allDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert("Successfully added!");
                setNews(data.insertedId);
                form.reset();
                loadNews();
            }
        });
    };

    return (
        <div className="py-[40px]">
            <div className="max-w-7xl mx-auto w-full px-5">

                
                <form onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Title</label>
                        <input type="text" name="title" className="input input-bordered w-full"
                            placeholder="Enter News Title" />
                    </div>

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Description</label>
                        <input type="text" name="description" className="input input-bordered w-full"
                            placeholder="Enter Details" />
                    </div>

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Main Image</label>
                        <input type="text" name="mainImg" className="input input-bordered w-full"
                            placeholder="Main Image URL" />
                    </div>

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Sub Image</label>
                        <input type="text" name="subImg" className="input input-bordered w-full"
                            placeholder="Enter Sub Image" />
                    </div>

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full"
                            placeholder="Enter location" />
                    </div>

                    <div className="flex space-y-2 flex-col">
                        <label className="text-xl font-bold text-black">Time</label>
                        <input type="date" name="time" className="input input-bordered w-full" />
                    </div>

                    <div className="col-span-3">
                        <button type="submit"
                            className="btn btn-success font-bold text-black uppercase w-full">
                            Add Details
                        </button>
                    </div>
                </form>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {/* {news.map(n => (
                        <div key={n._id} className="shadow p-4 space-y-2">
                            <img src={n.mainImg} alt="" className="w-full h-[200px] object-cover" />
                            <h2 className="font-bold text-black">{n.title}</h2>
                            <p className="text-gray-600">{n.description}</p>
                        </div>
                    ))} */}
                </div>

            </div>
        </div>
    );
};

export default ShowApi;
