import React from "react";
import profilepic from '../assets/profile-pic.jpg';
import verified from '../assets/verified.png';

const Description = () => {
    return (
        <div className="description">
          <div className="descSection">
            <img className="profile-pic" src={profilepic} alt="Profile Picture"/>
            <div className="who">
              <h3>Ashley Jones <img className="verified" src={verified} alt="This creator is YUMMY verified"/></h3>
              <h4>LIVE: Showing off my new toys...</h4>
              <h5>#yummy #firstime #loveit</h5>
            </div>
          </div>
          <div>
            <div id="countdown-wrap">
              <div id="goals-wrap">
              </div>
              <div id="glass">
                <div id="progress">
                </div>
              </div>
              
              <div class="goal-stat">
                    <span class="goal-number">$375</span>
                <span class="goal-label">RAISED</span>
              </div>
              <div id="goal">$1,000</div>
                <div id="goal-words">GOAL</div>

            </div>
            </div>
        </div>
    );
};
export default Description;