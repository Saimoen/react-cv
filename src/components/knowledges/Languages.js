import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'Javascript', xp:0.2},
            {id: 2, value: 'PHP', xp:0.1},
            {id: 3, value: 'HTML', xp:0.4},
            {id: 4, value: 'CSS', xp:0.4},
        ],
        frameworks: [
            {id: 1, value: 'React', xp:0.2},
            {id: 2, value: 'Bootstrap', xp:0.1},
            {id: 3, value: 'SCSS', xp:0.2},
            {id: 4, value: 'Vue', xp:0},
        ]
    }


    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
             <ProgressBar
              languages={languages}
              className='languageDisplay'
              title='Langages'
             />
             <ProgressBar
             languages={frameworks}
             title='Bibliothèques'
             className='frameworksDisplay'/>
            </div>
        );
    }
}

export default Languages;