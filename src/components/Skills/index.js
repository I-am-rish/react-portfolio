import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import TextShpere from '../TextShpere';

const Skills = () => {
  const[letterClass, SetLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      SetLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="body-container container ">
        <div className="skills">
          <div className="text-zone">
            <h1 className="skills-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['Skills']}
                idx={5}
              />{' '}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['&']}
                idx={5}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['Experience']}
                idx={5}
              />
            </h1>
            <p>
              Have good knowledge in development including technologies like
              <span>
                {' '}
                HTML5, CSS3, JavaScript, React, Bootstrap, Sass, Git,
              </span>{' '}
              etc
            </p>
            <p>
              I'm not a designer but I have a good sense of aesthetics, and
              experience in responsive, mobile-first web design. I put special
              effort into optimizing my code and providing the best user
              experience. I would love to give you any kind of support also
              after the project's completion.
            </p>
            <p>
              Visit my <a href="https://www.linkedin.com/feed/">LinkedIn</a>{' '}
              profile for more details. Also you can checkout my cv on this{' '}
              <a href="#">link</a>, or feel free to contact me.
            </p>
          </div>
        </div>
        <div>
          <TextShpere />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills;