import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default class ButtonMob extends React.Component{

    constructor(){
        super();
        this.state={
            visNav:'flex'
        }
    }

    /*toggle*/
    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav: 'none'
            });
        } else {
            this.setState({
                visNav:'flex'
            })
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <AiOutlineMenu size={32}/>
            </div>
        )
    }
}