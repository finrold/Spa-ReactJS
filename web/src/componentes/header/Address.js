import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";

export default class Address extends React.Component{

    render(){
        return(
            <div className="address">
                <AiOutlineWhatsApp size={40} className="whatsapp" /> <strong>(XX) XXXXX - XXXX </strong><br />
                Endereço <br />
                <strong>R$ 700,00</strong>
            </div>
        )
    }
}