import React from "react";
import "./skills.scss";
const Skills = () => {
  return (
    <div className="skills">
      <h1>My skills</h1>
      <div class="container_skills">
      
        <div class="container__progressbars">
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
            </svg>
            <span class="progressbar__text shadow-html">HTML</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
            </svg>
            <span class="progressbar__text shadow-css">CSS</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
            </svg>
            <span class="progressbar__text shadow-scss">SCSS</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
            </svg>
            <span class="progressbar__text shadow-js">JavaScript</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
            </svg>
            <span class="progressbar__text shadow-ts">TypeScript</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-node shadow-node"> </circle>
            </svg>
            <span class="progressbar__text shadow-node">Node.js</span>
          </div>
      
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
            </svg>
            <span class="progressbar__text shadow-react">React.js</span>
          </div>
         
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-vue shadow-vue"> </circle>
            </svg>
            <span class="progressbar__text shadow-vue">Vue.js</span>
          </div>
        </div>
      
      </div>
      
      <div id="main-container-social" class="main-container-social"></div>
    </div>
  );
};

export default Skills;
