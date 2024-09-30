// src/components/ProjectDetail/ProjectDetail.js

import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../../portfolio'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((proj) => proj.name === id)

  if (!project) return <p>Project not found</p>

  return (
    <div className='project-detail'>
      <h2>{project.name}</h2>
      <img src={project.thumbnail} alt={project.name} />
      {/* <p className='project-description'>{project.detailedDescription}</p> */}
      <div
      className='project-description'
      dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
    />
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button type="button" onClick={() => navigate('/')}>Back to Home</button>
      {project.livePreview && (
        <button type="button" onClick={() => window.open(project.livePreview)} target='_blank' rel='noopener noreferrer'>
          Live Preview
        </button>
      )}
      {project.sourceCode && (
        <button type="button" onClick={() => window.open(project.sourceCode)} target='_blank' rel='noopener noreferrer'>
          Source Code
        </button>
      )}
      
    </div>
  )
}

export default ProjectDetail