import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'

import myworkData from '../../data/mywork.json'
import AnimatedLetters from '../AnimatedLetters'

const MyWork = () => {
  console.log(myworkData);
 const [letterClass, setLetterClass] = useState("text-animate");
  const textArray = ['M','y',' ', 'W','o','r','k'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 300);
    return (() => {
      clearTimeout(timer);
    });
  }, []);

  const renderWork = (work) => {
    return (
      <div className="images-container">
        {
          work.map((w, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img src={w.cover} className="work-image" alt="wok" />
                <div className="content">
                  <p className="title">{w.title}</p>
                  <h4 className="description">{w.description}</h4>
                  <button className="btn" onClick={() => window.open(w.url)}>
                    View
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }

  return (
    <>
      <div className="container mywork-page">
        <h1 className="work-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={textArray}
            idx={29}
          />
        </h1>

        <div>{renderWork(myworkData.mywork)}</div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default MyWork