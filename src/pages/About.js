import React from 'react';
import Riley from './page-image/Riley1.jpg'
import Resume from './page-image/Resume.pdf'
// import Footer from '../components/Footer'

function About (){
    return (
        <div>
            <div class="container">
                <div class="wrapper">
                    <h1>About me</h1>
                    <div class="row">
                    <div class=" col-md-8 col-xs-12 bg-light">
                        <div id="pic">
                            <img alt='myself' src={ Riley } class="img-fluid col-xs-12" />
                        </div>

                        <p>     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat nisl. Ut etiam sit amet nisl purus
                        in mollis nunc. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Rhoncus mattis rhoncus
                        urna neque viverra. Blandit massa enim nec dui nunc mattis enim ut tellus. Vulputate enim nulla aliquet
                        porttitor lacus luctus. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sagittis aliquam
                        malesuada bibendum arcu vitae. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Porttitor lacus
                        luctus accumsan tortor posuere. Lobortis feugiat vivamus at augue eget. Imperdiet sed euismod nisi porta
                        lorem mollis.</p>

                        
                        <ul>
                            <li><a href="https://github.com/onijimbo">GitHub Profile</a></li>
                            <li><a href="https://www.linkedin.com/in/riley-hall-b284b0195/">Linked In</a></li>
                            <li><a href={ Resume }>Resume</a></li>
                        </ul>     
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
            
          
    
    )
}

export default About;