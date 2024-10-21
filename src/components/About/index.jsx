
import "./About.css"
import { FaExternalLinkAlt } from 'react-icons/fa'

import { profile12 } from "../../assets/images"

const About = () => {
  return (
    <section id='about'>
      <div className="container">
         <div className="photo__container">
            <img className="img" src={profile12} alt="profile_picture" />
          </div>
         <div className="details">
          <h3><span className="text__gradient" style={{fontSize:"20px"}}>About</span> Me</h3>
          <p className=" description" style={{fontSize:"22px"}}>
          I am a Full Stack Software Engineer and Data Analyst with expertise in building scalable applications using modern tech stacks like 𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐍𝐞𝐬𝐭𝐉𝐒, 𝐄𝐱𝐩𝐫𝐞𝐬𝐬, 𝐀𝐧𝐠𝐮𝐥𝐚𝐫, 𝐍𝐞𝐱𝐭.𝐣𝐬, 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, and 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬. <br />  <br /> My experience spans across various databases, including 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐒𝐐𝐋, 𝐌𝐨𝐧𝐠𝐨𝐃𝐁, and 𝐌𝐲𝐒𝐐𝐋, and I have strong skills in containerization with 𝐃𝐨𝐜𝐤𝐞𝐫. Additionally, I excel in questionnaire development with 𝐗𝐋𝐒 and 𝐒𝐮𝐫𝐯𝐞𝐲𝐂𝐓𝐎, quantitative data analysis with 𝐒𝐓𝐀𝐓𝐀 and 𝐏𝐲𝐭𝐡𝐨𝐧, and thematic analysis with 𝐌𝐀𝐗𝐐𝐃𝐀. <br /> <br /> Whether it is developing robust applications or analyzing complex data, I am committed to bringing your projects to life.
           Let us connect and take your business to the next level!
          </p>
          <a href="#contact" className='btn btn__primary'>Contact Me</a>
          <a
      href="https://drive.google.com/file/d/1vMq0D2CxqeEA717gVtQ6nvbfYwCX9xDT/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-300 rounded-md shadow-lg p-4 mt-2 flex items-center justify-between bg-white transition duration-300 ease-in-out hover:shadow-xl hover:border-gray-400"
    >
      <span className="text-gray-800 font-semibold">View my CV</span>
      <FaExternalLinkAlt className="text-blue-500 ml-2" />
    </a>
         </div>
      </div>
    </section>
  )
}

export default About
