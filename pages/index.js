import Head from 'next/head'
import Menu from '../components/Menu'

function HomePage() { 
  return(
     <div>
       <head>
         <meta charSet='utf-ee8'/>
         <meta name='robots' content='index, follow'/>
         <meta name='descripition' content='site sobre ..'/>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <title>Criativamente</title>
         </head> 
     <Menu/>
     Welcome to Next.js! 
     
     </div>)
}   


export default HomePage


