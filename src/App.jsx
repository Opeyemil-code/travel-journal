import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './header/header'
import Overall from './section/p'
export default function App(params) {
     return(
      <section className='w-2/3 mx-auto'>
      <Header/>
      <Overall/>
      </section>
     )
}