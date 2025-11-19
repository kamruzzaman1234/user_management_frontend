"use client";

import ShowApi from "./ShowApi/ShowApi";
import Marquee from "./Marquee/Marquee"

const Home_Main = ()=>{
    return(
        <div className="">
            <div className=" ">
                <Marquee></Marquee>
                <ShowApi></ShowApi>
                
            </div>
        </div>
    )
}
export default Home_Main;