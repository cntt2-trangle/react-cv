import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "HTML/CSS", xp:2},
            {id: 3, value: "Java", xp:0.7},
            {id: 4, value: "PHP", xp:0.4}
        ], 

        frameworks: [
            {id: 1, value: "React", xp:1.4},
            {id: 2, value: "Bootstrap", xp:2},
            {id: 3, value: "SASS", xp:1.5},
            {id: 4, value: "Laravel", xp:0.5}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="Frameworks & Library"
                    className="frameworksDisplay"
                />  
                
            </div>
        );
    }
}

export default Languages;