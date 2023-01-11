import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';

import './index.scss'

const TextShpere = () => {

    useEffect(() => {
        return () => {
            const container = '.tagcloud';
            const texts = [
                'JAVA',
                'DSA',
                'HTML',
                'CSS',
                'SASS',
                'JavaScript',
                'ES6',
                'RactJs',
                'Redux',
                'NodeJs',
                'ExpressJs',
                'MongoDB',
                'GIT',
                'GITHUB',
                'API',
                'MySql'
            ];

            const options = {
                radius: 280,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                keep: true
            };

            TagCloud(container, texts, options);
        };
    }, []);

  return (
    <div className="text-shpere">
        <span className="tagcloud"></span>
    </div>
  )
}

export default TextShpere;
