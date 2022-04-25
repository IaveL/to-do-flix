import React from "react";
import Recently from "../components/Recently";
import Carousel from "../components/Carousel"

export default class Home extends React.Component{
    render(){
        return(
            <>
            <Recently/>
            <Carousel/>
            </>
        )
    }
}

