import React from 'react'

export default function ProjectList() {
    return (
        <div className="project-list section">

            <div className="card-content grey-text text-darken-3">
                <div className="card z-depth-0 project-summary">
                    <span className="card-title">Project Title 1</span>
                    <p>Posted by NinjaRow</p>
                    <p className="grey-text">3rd March, 2am</p>
                </div>
            </div>

            <div className="card-content grey-text text-darken-3">
                <div className="card z-depth-0 project-summary">
                    <span className="card-title">Project Title 2</span>
                    <p>Posted by NinjaCol</p>
                    <p className="grey-text">3rd September, 8pm</p>
                </div>
            </div>

            <div className="card-content grey-text text-darken-3">
                <div className="card z-depth-0 project-summary">
                    <span className="card-title">Project Title 3</span>
                    <p>Posted by NinjaSec</p>
                    <p className="grey-text">3rd December, 7am</p>
                </div>
            </div>
        </div>
    )
}
