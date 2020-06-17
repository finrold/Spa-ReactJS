import React from 'react'
import { TiTick } from "react-icons/ti";

export default class Information extends React.Component{

    render(){
        return(
            <div className="information">
                <ul>
                <li><TiTick /> 2 Quartos</li>
                <li><TiTick /> 1 Vaga de Garagem</li>
                <li><TiTick /> 1 banheiro</li>
                <li><TiTick /> Cozinha americana</li>
                <li><TiTick /> Ampla sala</li>
                </ul>
                <div className="informationText" id="information"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ante tortor. Curabitur varius nibh et eros faucibus, congue ultrices magna maximus. Sed non rutrum mauris. Morbi sit amet velit dictum, maximus eros nec, finibus erat. In nibh lectus, pulvinar eget ornare sed, vehicula sed augue. Quisque congue non nisi sit amet dapibus. Donec aliquet lacus vel justo porttitor porta. Proin in bibendum nunc.</p>
            </div>
        )
    }
}