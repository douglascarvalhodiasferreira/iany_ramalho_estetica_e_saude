import React from 'react'
import Layout from "../components/Layout"
import Image from 'next/image'
import "../CSS/estilos.css"




export default function App({Component,pageProps}){
  return(
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}