import  { useState, useEffect } from 'react';

import myPic from "../../assets/images/coder.png";
import idoGif from '../../assets/images/ido.gif';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const sentences = [
    `Hello there! 🌎 My name is MANIBAHO Patrick, I am a Fullstack Software Engineer.`,
    `Welcome to my brand!`,
    `I specialize in end-to-end web development, handling both the frontend and backend aspects of projects.`
  ];
  
  const typingSpeed = 150; // Time between typing characters
  const deletingSpeed = 50; // Time between deleting characters
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current sentence to display
      const currentSentence = sentences[textIndex];

      if (!isDeleting) {
        // Typing effect
        setDisplayedText((prev) => prev + currentSentence[displayedText.length]);
        
        if (displayedText.length === currentSentence.length - 1) {
          setIsDeleting(true);
        }
      } else {
        // Deleting effect
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Move to the next sentence
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [displayedText, isDeleting, textIndex, sentences]);

  return (
    <div className="brand-container mt-auto p-20 md:w-full">
      <div className="w-full my-20 md:flex justify-center gap-8">
        <img
          src={myPic}
          alt="mypic"
          className="h-80 w-80 mr-80 rounded-xl shadow-lg"
        />
        <div className="m-10">
          <p className="brand shadow p-5 text-md  md:text-xl lg:text-2xl ">{displayedText}</p>
          <div className="mt-10 h-1/2 w-full text-xl">
            <img
              src={idoGif}
              alt="What I do"
              className="h-10 w-auto mx-auto my-4"
            />
            <h3 className="font-bold mx-10">What I do</h3>
            <p className='shadow p-5 text-md md:text-xl lg:text-2xl '>
              I specialize in end-to-end web development, handling both the frontend and backend aspects of projects.
              Whether it is crafting engaging user interfaces or designing robust server-side architectures,
              I bring a comprehensive skill set to the table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
