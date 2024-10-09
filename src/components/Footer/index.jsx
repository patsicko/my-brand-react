
import "./Footer.css"
import Logo from '../../commons/Logo'
import SocialHandles from '../../commons/SocialHandles'
import { footer } from '../../data'

const Footer = () => {
  return (
    <footer id='footer'>
      
      <div className="container">
         <div className="row">
           <div className="column">
           Let's Connect
            <p className="text__muted description">
            <SocialHandles/>
            </p>
            
           </div>
           {
            footer.map((list,index)=>(
              <div className="column" key={index}>
                <h3 className="group__name">{list.group}</h3>
                <div className="routes__container">
                  {
                    list.routes.map((route,i)=>(
                      <a href={`#${route.name.toLowerCase()}`} className="route__item" key={i}>
                        {
                          route.icon ? <div className="icon__container">{route.icon}</div>:""
                        }
                        <p className="name">{route.name}</p>
                      </a>
                    ))
                  }
                </div>
              </div>
            ))
           }
         </div>
         <article className="copyright__container">
          <h3>Copyright &copy; All right reserved 2024</h3>
         </article>
      </div>
    </footer>
  )
}

export default Footer
