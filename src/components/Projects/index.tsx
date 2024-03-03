import parse from 'html-react-parser';

import './index.css';
import './responsive.css';

import ProjectsData from '../../data/projects.json';

interface Project {
    title: string;
    type: string;
    description: string;
    technologies: string[],
    links?: {
        live?:string;
        github?:string;
    },
    image?:string;
}

interface ProjectsData {
    main: Project[];
    other: Project[];
}

const NewProjects: React.FC = () => {

    /*
    const openProject = (link: string) => {
        window.open(link, '_blank');
    }
    */

    return (
        <>
            <section>
                <div className='area' data-section="projects">
                    <div className='html-tags absolute top-12 hidden sm:block'>
                        <span className='-ml-7'>
                            &lt;section id = "projects"&gt;
                        </span>
                    </div>
                    <div className='background-text'>Projects</div>
                    <div className='content'>
                        <div className='w-full mb-20'>
                            <div className='html-tags -mb-2'>
                                <span>
                                    &lt;h2&gt;
                                </span>
                            </div>
                            <div className="section-title" data-aos="fade-right">
                                <h2 className="flex">
                                    <span>P</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>j</span>
                                    <span>e</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span>s</span>
                                </h2>
                            </div>
                            <div className='html-tags -mb-3'>
                                <span>
                                    &lt;/h2&gt;
                                </span>
                            </div>
                        </div>
                        <div className='projects-area'>

                            {ProjectsData.main.map((project, index) => (
                                <>
                                    <div className={`grid xl:grid-cols-2 gap-20 project-container ${index !== 0 ? 'mt-24' : ''}`} key={index}>
                                        <div className={`flex items-center ${index % 2 === 0 ? 'xl:order-first order-last' : 'order-last'}`}>
                                            <div className="project-content" data-aos={`${index % 2 === 0 ? 'zoom-out-right' : 'zoom-out-left'}`}>
                                                <p className="project-type">{project.type}</p>
                                                <h3 className="project-title">{project.title}</h3>
                                                <div className="project-description">
                                                    <p>
                                                        {parse(project.description)}
                                                    </p>
                                                </div>
                                                <ul className="project-tech-stack">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <li key={techIndex}>{tech}</li>
                                                    ))}
                                                </ul>
                                                {project.links && (
                                                    <div className="project-links">
                                                        {project.links.live && (
                                                            <a className="icon-link" href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                            </a>
                                                        )}
                                                        {project.links.github && (
                                                            <a className="icon-link" href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                                <i className="bi bi-github"></i>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="relative">
                                            {project.links && project.links.live ? (
                                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                    <div className="project-image-container" data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
                                                        <div className="overlay"></div>
                                                        <div className="project-image">
                                                            <img src={`/src/assets/${project.image}`} />
                                                        </div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div className="project-image-container" data-aos="fade-left">
                                                    <div className="overlay"></div>
                                                    <div className="project-image">
                                                        <img src={`/src/assets/${project.image}`} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div> 


                                    {index !== ProjectsData.main.length - 1 && (
                                        <hr className="divide-y xl:invisible my-5" />
                                    )}
                                </>
                            ))}
                            
                            <div className="flex justify-center mt-16">
                                <hr className="w-3/4 border-neutral-300 mb-5" />
                            </div>

                            <div className="mt-5 text-center">
                                <div data-aos="fade-right" className="flex justify-center">
                                    <div>
                                        <h3 className="text-neutral-0 font-bold flex text-5xl">
                                            <span>O</span>
                                            <span>t</span>
                                            <span>h</span>
                                            <span>e</span>
                                            <span>r</span>
                                        </h3>
                                        <h3 className="text-purple-600 font-bold flex text-5xl ml-10">
                                            <span>N</span>
                                            <span>o</span>
                                            <span>t</span>
                                            <span>e</span>
                                            <span>w</span>
                                            <span>o</span>
                                            <span>r</span>
                                            <span>t</span>
                                            <span>h</span>
                                            <span>y</span>
                                        </h3>
                                        <h3 className="flex text-neutral-0 font-bold text-5xl ml-32">
                                            <span>P</span>
                                            <span>r</span>
                                            <span>o</span>
                                            <span>j</span>
                                            <span>e</span>
                                            <span>c</span>
                                            <span>t</span>
                                            <span>s</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="project-grid grid lg:grid-cols-3 gap-7 lg:gap-10 mt-16" >
                                {ProjectsData.other.map((project) => (
                                    <div>
                                        <div className="card p-7" data-aos="zoom-out-up">
                                            <div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <i className="bi bi-folder text-3xl text-purple-600"></i>
                                                    </div>
                                                    <div>
                                                        <div className="project-links">
                                                            <a href={project.links.github} className="icon-link" target="_blank" rel="noopener noreferrer">
                                                                <i className="bi bi-github"></i>
                                                            </a>
                                                            <a href={project.links.live} className="icon-link" target="_blank" rel="noopener noreferrer">
                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-5">
                                                    <h3 className="other-projects-title">
                                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p className="other-projects-description">
                                                        {project.description}.
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="other-project-tech-stack">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <li key={techIndex}>{tech}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16">
                                <h3 className="more-to-come"data-aos="zoom-out-right">More To Come...</h3>
                            </div>

                        </div>
                    </div>
                    <div className='html-tags absolute bottom-12 -ml-7 hidden sm:block'>
                        <span>
                            &lt;/section&gt;
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewProjects;