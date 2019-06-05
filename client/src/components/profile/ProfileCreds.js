import React, { Component } from "react";
import Moment from "react-moment";

export class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h1>{exp.company}</h1>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : "Now"}
        </p>
        <p>
          <strong>Position:</strong>
          {exp.title}
        </p>
        <p>
          {exp.location ? (
            <span>
              <strong>Location: </strong>
              {exp.location}{" "}
            </span>
          ) : null}
        </p>
        <p>
          {exp.decription ? (
            <span>
              <strong>Description: </strong>
              {exp.decription}{" "}
            </span>
          ) : null}
        </p>
      </li>
    ));
    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h1>{edu.school}</h1>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : "Now"}
        </p>
        <p>
          <strong>Degree:</strong>
          {edu.degree}
        </p>
        <p>
          {edu.fieldofstudy ? (
            <span>
              <strong>Field Of Study: </strong>
              {edu.fieldofstudy}{" "}
            </span>
          ) : null}
        </p>
        <p>
          {edu.decription ? (
            <span>
              <strong>Description: </strong>
              {edu.decription}{" "}
            </span>
          ) : null}
        </p>
      </li>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">Experience</h3>
            <ul className="list-group">{expItems}</ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-center text-info">Education</h3>
            <ul className="list-group">{eduItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
