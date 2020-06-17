import React from 'react'

export default class Maps extends React.Component{

    render(){
        return(
            <div className="mapsImovel" id="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.591787849471!2d-46.43189268653123!3d-24.01018800570611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c2b81b2388f%3A0x9d50dfae3a7c236f!2sMcDonald&#39;s!5e0!3m2!1spt-BR!2sbr!4v1592345669052!5m2!1spt-BR!2sbr"  allowfullscreen="" ></iframe>
            </div>
        )
    }
}