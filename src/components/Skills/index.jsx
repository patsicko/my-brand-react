
import "./Skills.css"
import { skills } from '../../data'

const Skills = () => {
  return (
    <section id='skills'>
      <div className="container full__height">
        <h1 className="title">
          <span className="text__gradient">Skills</span>
        </h1>
        <div className="skills__container">
          {
            skills.map((list,index)=>(
              <div className="skill__box__container" key={index}>
                <h3 className="category text__gradient">{list.category}</h3>
                {
                  list.data.map((item,index)=>(
                    <div className="box" key={index}>
                      {item.icon && (
                        <div className="hover__fill icon__container">
                          {item.icon}
                        </div>
                      )}
                      <p className="name">{item.skill}</p>
                      
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
       
      </div>
      
    </section>
  )
}

export default Skills
