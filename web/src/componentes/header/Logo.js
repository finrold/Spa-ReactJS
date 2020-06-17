import React from 'react'


export default class Logo extends React.Component{

    render(){
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="../../assets/logo-S1.png" />
                    <source media="(min-width: 769px)" srcSet="../../assets/logo-L1.png" />
                    <img src="../../assets/logo-L.png" /> 
                    
                </picture>
            </div>

        )
    }
}