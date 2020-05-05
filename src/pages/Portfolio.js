import React from 'react';
import Atari from './page-image/atari.png'
import RPS from './page-image/rps.png'
import Budget from './page-image/progressive-budget.png'
import Note from './page-image/note.png'
import Quiz from './page-image/quiz.png'
import Password from './page-image/password.png'


function Portfolio (){
    return( 
        <div class="container">
            <h1 id="title">Portfolio</h1>
            <div class="wrapper2">
              <br />
              <div class="row bg-light">
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ Atari } alt='Atari portal screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://lupemls.github.io/first-project/">Atari Portal, </a><a href='https://github.com/lupemls/first-project'>GitHub Repo</a></b></p>       
                    </div>
                </div>
              

              
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ RPS } alt='RPS Kombat screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://still-peak-87577.herokuapp.com/">RPS Kombat, </a><a href='https://github.com/lupemls/project-2'>GitHub Repo</a></b></p>       
                    </div>
                </div>
              </div>
              <div class="row bg-light">
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ Budget } alt='Budget Tracker screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://immense-wave-94484.herokuapp.com/">Budget Tracker, </a><a href='https://github.com/onijimbo/prog-budget'>GitHub Repo</a></b></p>       
                    </div>
                </div>
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ Note } alt='Note Taker screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://afternoon-savannah-82731.herokuapp.com/">Note Taker, </a><a href='https://github.com/onijimbo/onijimbo.github.io-notetaker'>GitHub Repo</a></b></p>       
                    </div>
                </div>
              </div>
              <div class="row bg-light">
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ Quiz } alt='JS quiz screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://onijimbo.github.io/onijimbo.github.io-jsquiz/">Javascript Quiz, </a><a href='https://github.com/onijimbo/onijimbo.github.io-jsquiz'>GitHub Repo</a></b></p>       
                    </div>
                </div>
                <div class="col-xs-8 col-md-6 col-lg-4">
                    <img src={ Password } alt='Password Generator screenshot' class="img-fluid" />
                    <div class="gitLink">
                        <p><b><a href="https://onijimbo.github.io/onijimbo.github.io-password/">Password Generator, </a><a href='https://github.com/onijimbo/onijimbo.github.io-password'>GitHub Repo</a></b></p>       
                    </div>
                </div>
              </div>  
            </div>
            

        </div>
    )
};

export default Portfolio;