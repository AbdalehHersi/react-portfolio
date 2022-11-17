import React from "react";
import "../css/About.css"
import avatar from "../img/avatar.jpg"

function About() {
    return (
        <div className="aboutContainer">
            <h1 className="aboutHeader">About Me</h1>
            <img id="avatar" width="100" height="100" src={avatar} alt="avatar"/>
            <p>
                I'm an aspiring <span className="onLoadHighlight">full-stack web developer</span> with a passion for all things technological.
                With a couple of projects under my belt and a bunch of technologies at hand, I feel ready to take on the world.
            </p>
            <br></br>
            <p>
                I love <span className="strong">gaming and art</span> and I love creative developing.
                My goal is to combine these two passions into an explosive result that's breathtakingly fun in the eyes.
            </p>
            <br></br>
            <cite className="onLoadHighlight">“Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins</cite>
        </div>
    )
}

export default About; 