import "./Login.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import bgPenso from "../../../../public/assets/images/logobg-penso.png"
import Carroussel from '../../components/Carroussel'
import Form from '../../components/Form'
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage"
import { store } from "../../store/store"

export default function Login() {
  
  const navigate = useNavigate();
  const [showRoute, setShowRoute] = useState(false)

  useEffect(() => {
    if (store.getState().logged != undefined && store.getState().logged.logged) {
      console.log('logado')
      navigate('/');
    } else {
      console.log('deslogado')
      setShowRoute(true)
    }
  }, [])

  return (
    <AnimatedPage>
      {showRoute && <>
        <Header />
        <img src={bgPenso} className="bg-penso hidden-whitelabel" alt="background Penso" />
        <div className='container-all'>
          <div className='container-all_left'>
            <Carroussel />
          </div>
          <div className='container-all_right'>
            <Form />
          </div>
        </div>
      </>}
    </AnimatedPage>
  )
}
