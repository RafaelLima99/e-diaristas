import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Teste from '../components/Teste/teste'
//import TesteTabela from '../components/TesteTabela/TesteTabela'
import TabelaPura from '../components/TesteTabela/TabelaPura'


const Home: NextPage = () => {
  return (
    
      // <Teste/>
   
  

  // <TesteTabela/>
  <TabelaPura></TabelaPura>
  )
}

export default Home
