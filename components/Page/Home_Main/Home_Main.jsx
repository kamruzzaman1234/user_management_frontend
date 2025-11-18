"use client";

import ShowApi from "./ShowApi/ShowApi"

const Home_Main = ()=>{
    return(
        <div className="py-[80px] px-5">
            <div className="max-w-7xl mx-auto w-full px-5 ">
                Home Page
                <ShowApi></ShowApi>
            </div>
        </div>
    )
}
export default Home_Main;