import React, { useEffect, useState } from 'react'
import "bulma-carousel/src/sass/index.sass";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";

import callPenso from "../../../../public/assets/images/call_penso.png"
import callPensoWhiteLabel from "../../../../public/assets/images/call_penso_whitelabel.png"

import timePenso from "../../../../public/assets/images/time_penso.png"
import timePensoWhiteLabel from "../../../../public/assets/images/time_penso_whitelabel.png"

import breakPenso from "../../../../public/assets/images/break_penso.png"
import breakPensoWhiteLabel from "../../../../public/assets/images/break_penso_whitelabel.png"

import meetPenso from "../../../../public/assets/images/meet_penso.png"
import meetPensoWhiteLabel from "../../../../public/assets/images/meet_penso_whitelabel.png"

import gravePenso from "../../../../public/assets/images/grave_penso.png"
import gravePensoWhiteLabel from "../../../../public/assets/images/grave_penso_whitelabel.png"

import safePenso from "../../../../public/assets/images/safe_penso.png"
import safePensoWhiteLabel from "../../../../public/assets/images/safe_penso_whitelabel.png"

import videoPenso from "../../../../public/assets/images/video_penso.png"
import videoPensoWhiteLabel from "../../../../public/assets/images/video_penso_whitelabel.png"


import "./Carroussel.css"

export default function Carroussel() {

    const [isWhiteLabel, setIsWhiteLabel] = useState(false)

    useEffect(() => { 
        if (whiteLabel) { 
            setIsWhiteLabel(true)
        }

        bulmaCarousel.attach(".carousel", {
            slidesToScroll: 1,
            slidesToShow: 1,
            autoplay: true,
            pagination: false,
            loop: true,
            pauseOnHover: true,
            wrapperWidth: 1000,
        });

    }, [])
    return (
        <div className="section section-carousel">
            <div className="container has-text-centered ">
                <div className="carousel" >
                    <div className="item-1">
                        <p>Interaja com os participantes utilizando o chat e o sistema de votação</p>
                    </div>


                    <div className="item-2">
                        <p>Compartilhe tela, transmita vídeos e áudios para todos os participantes</p>
                    </div>


                    <div className="item-3">
  
                        <p>Crie breakout rooms durante sua reunião</p>
                    </div>

                    <div className="item-4" >
               
                        <p>Reuniões sem limite de tempo</p>
                    </div>

                    <div className="item-5">
    
                        <p>Faça videochamadas instantâneas ou programadas do seu navegador, sem instalar aplicativos</p>
                    </div>

                    <div className="item-6">

                        <p>Todas as reuniões são criptografadas, o que torna a plataforma mais segura</p>
                    </div>

                    <div className="item-7">
                        
                        <p>Grave suas reuniões e salve onde quiser</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
