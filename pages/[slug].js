import React from 'react'
// import { pageData } from '../utils/test/data'
import { pageData } from '../utils/test/test'

import ProjectDescription from '../components/Project/ProjectDescription'
import MediaSection from '../components/Project/MediaSection'

function SingleProject({ project }) {

  if(!project) return null
  console.log(project)

    const [firstMedia, ...leftMedia] = project.media
    return (
      <>
        <div className='single-project page-wrapper'>
          <div 
            className="page-container" 
            // data-scroll-container 
            // ref={scrollRef}
            style={{
              '--page-container-background': project?.color
            }}
          >
              <div className="page-grid" data-scroll-section>
                  <MediaSection url={firstMedia.url} index={0} />
  
                  <ProjectDescription
                    description={project.about}
                    director={project.director}
                    photographer={project.photographer}
                  />
  
                  {leftMedia.map((media, index) => (
                    <MediaSection url={media.url} index={index + 1} key={index+1} />
                  ))}
              </div>
          </div>
       </div>
      </>
    )
  }

  export default SingleProject
  
  export const getStaticPaths = async () => {
    const paths = pageData.map(project => ({
      params: { slug: project.slug }
    }))
  
    return { paths, fallback: false }
  }
  
  export const getStaticProps = async ({ params }) => {
    if(!params) throw new Error("No params")
  
    const project = pageData.find(project => project.slug === params.slug)
    return { props: { project } }
  }