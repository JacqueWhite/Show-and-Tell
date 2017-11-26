import React from "react";
import "./PortfolioCardEdit.css";

const PortfolioCardEdit = props => (
<div>
    <div className="col s12 m6 l4">
        <div className="card portfolio-card">

            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image} alt={props.projectName}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.projectName}<i className="material-icons right">arrow_forward</i></span>
                <h6><a href={props.link} target="_blank">See it Live</a></h6>
            </div>
            <div className="card-action">
              <div>
                {props.technologiesKeywords.map(tag => (
                <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                ))}
              </div>
              <div className="edit-icons">
                <div className="fixed-action-btn horizontal">
                  <a className="btn-floating red" href="#edit-project" onClick= {() => {props.edit(props)}}>
                    <i className="material-icons">mode_edit</i>
                  </a>
                  <ul>
                     <li><a className="remove btn-floating red" onClick = {() => props.remove(props.id, props.user._id)}><i className="material-icons">delete_forever</i></a></li>
                  </ul>
                </div>
              </div>

             </div>

            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><a href={props.link} target="_blank">{props.project}</a><i className="material-icons right">close</i></span>
                <p><span className="about-project">What is it: </span><br/>{props.description}</p>
                <p><span className="about-project">See the code on <a href={props.github} target="_blank"> GitHub</a></span></p>
                <p><span className="about-project">Team: </span>{props.team}</p>
                <hr/>
                <p><span className="about-project">Technologies & Keywords: </span></p>
                {props.technologiesKeywords.map(tag => (
                <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                ))}
           </div>


        </div>
    </div>
</div>
);
export default PortfolioCardEdit;

