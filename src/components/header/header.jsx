import logoImage from '../../assets/logo.svg'
import './header.styles.css'

const Hearder= () => {
    return(                        
      <header className= 'header'> 
             <div>
               <img src={logoImage} alt='logoTipo minha listinha com imagem de aviao'/>
             </div>
     </header>
     )  
}

export default Hearder