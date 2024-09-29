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
      <p className='project-description'>{project.detailedDescription}</p>
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.livePreview && (
        <a href={project.livePreview} target='_blank' rel='noopener noreferrer'>
          Live Preview
        </a>
      )}
      {project.sourceCode && (
        <a href={project.sourceCode} target='_blank' rel='noopener noreferrer'>
          Source Code
        </a>
      )}
      <button type="button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default ProjectDetail