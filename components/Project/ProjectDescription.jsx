import React from 'react'

export default function ProjectDescription({ description, director, photographer }) {
  return (
    <section  data-scroll className="project-description-wrap">
        <p className="project-description">{description}</p>
        <p>&nbsp;</p>
        <p className="project-director">
            creative-director: <span className="italic underline">{director}</span>
        </p>
        <p className="project-photographer">
            photographer: <span className="italic underline">{photographer}</span>
        </p>
    </section>
  )
}
