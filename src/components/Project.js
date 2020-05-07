import React from 'react';
import Atari from '../pages/page-image/atari.png'
import RPS from '../pages/page-image/rps.png'
import Budget from '../pages/page-image/progressive-budget.png'
import Note from '../pages/page-image/note.png'
import Quiz from '../pages/page-image/quiz.png'
import Password from '../pages/page-image/password.png'

const projectArr = [
    {
    image: Atari,
    alt: 'Atari portal screenshot',
    deployLink: 'https://lupemls.github.io/first-project/', 
    title: 'Atari Portal',
    repo: 'https://github.com/lupemls/first-project'
},
{
    image: RPS,
    alt: 'RPS Kombat screenshot',
    deployLink: 'https://still-peak-87577.herokuapp.com/', 
    title: 'RPS Kombat',
    repo: 'https://github.com/lupemls/project-2'
},
{
    image: Budget,
    alt: 'Budget Tracker screenshot',
    deployLink: 'https://immense-wave-94484.herokuapp.com/', 
    title: 'Budget Tracker',
    repo: 'https://github.com/onijimbo/prog-budget'
},
{
    image: Note,
    alt: 'Note Taker screenshot',
    deployLink: 'https://afternoon-savannah-82731.herokuapp.com/', 
    title: 'Note Taker',
    repo: 'https://github.com/onijimbo/onijimbo.github.io-notetaker'
},
{
    image: Quiz,
    alt: 'JS quiz screenshot',
    deployLink: 'https://onijimbo.github.io/onijimbo.github.io-jsquiz/', 
    title: 'Javascript Quiz',
    repo: 'https://github.com/onijimbo/onijimbo.github.io-jsquiz'
},
{
    image: Password,
    alt: 'Password Generator screenshot',
    deployLink: 'https://onijimbo.github.io/onijimbo.github.io-password/', 
    title: 'Password Generator',
    repo: 'https://github.com/onijimbo/onijimbo.github.io-password'
}

]



function Project (){
    
    
    return(
        <div>
        {projectArr.map((project)=>{     
        return    <div className='card'> 
                <img className='card-img-top img-fluid' src={ project.image } alt={project.alt} />
                    <div className='card-body text-center'>
                        <a href={project.deployLink}><h5 className='card-title'>{project.title}</h5></a>
                            <a href={project.repo}>GitHub Repo</a>
                </div>
            </div>     
        })}
        </div>
    )
};

export default Project;