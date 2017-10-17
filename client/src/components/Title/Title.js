import React from "react";
import "./Title.css";

const Title = props => (
<div>
	<div className="row">
	  <div className="col l12 m12 s12">
	    <div className="row">
	      <div className="col s12">
	        <div className="card">
	          <div className="card-image">
	            <img className="portfolio-banner" src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/purty_wood_%402X.png" alt="" />
	          </div>
	          <div className="card-content">
	            <div className="row">
	              <div className="col s4 profile-pic">
	                <img className="circle responsive-img" src={props.headshot} alt={props.name} />
	              </div>
	              <div className="col right controls ">
	                <i className="material-icons" onclick='showMenu()'>more_vert</i>
	              </div>
	              <div className="row-menu">
	                <div className="menu">
	                  <div className="row">
	                    <ul className="menu-list">
	                      <li><a href={props.email} target="_blank">Email {props.name}</a></li>
	                      <li><a href={props.linkedIn} target="_blank">View LinkedIn</a></li>
	                      <li>Get Resume</li>
	                    </ul>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <span className="card-title black-text">{props.name}</span>
	            <span className="card-title black-text email"><a { `mailto:${props.email}` }>{props.email}</a> | <a href={props.linkedIn} target="_blank">View My LinkedIn</a></span>
	            <span className="black-text">{props.bio}</span>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
</div>
);

export default Title;
