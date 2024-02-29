import './index.css';
import './responsive.css';



// Images
import WeatherApp from '../../assets/react-weather-app.png';
import CRM from '../../assets/crm-2.png';
import KataFlow from '../../assets/kata-flow-example.png';
import NorfolkKnights from '../../assets/norfolk-knights.png';
import FinancialCalcs from '../../assets/financial-calculators.co.uk.png';

const Projects = () => {

    const openProject = (link: string) => {
        window.open(link, '_blank');
    }

    return(
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

                            <div className="grid xl:grid-cols-2 gap-20 project-container">
                                <div className="flex items-center xl:order-first order-last">
                                    <div className="project-content" data-aos="zoom-out-right">
                                        <p className="project-type">
                                            Featured Project
                                        </p>
                                        <h3 className="project-title">React - Weather Application</h3>
                                        <div className="project-description">
                                            <p>
                                                A weather application created using React that allows the user to obtain the current, 3 hourly and 5 day forecasts for any specific location around the world. It provides a user-friendly interface for entering a location (such as a city or by using their current location) and then displays weather information, including temperature, humidity, wind speed, and conditions like rain, snow, or clear skies. The resulting weather can be toggled between Celcius and Fahrenheit.
                                            </p>
                                        </div>
                                        <ul className="project-tech-stack">
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Open Weather API</li>
                                            <li>Netlify</li>
                                            <li>Styled Components</li>
                                            <li>Geolocation API</li>
                                        </ul>
                                        <div className="project-links">
                                            <a className="icon-link" href="https://tom-nikoloff-react-weather.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                            <a className="icon-link" href="https://github.com/TomNikoloff/react-weather-app_ts" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <a  href="https://tom-nikoloff-react-weather.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <div className="project-image-container" data-aos="fade-left">
                                            <div className="overlay"></div>
                                            <div className="project-image">
                                                <img src={WeatherApp} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <hr className="divide-y xl:invisible my-5"/>

                            <div className="grid xl:grid-cols-2 gap-20 project-container mt-24">
                                <div className="relative">
                                    <div className="project-image-container" data-aos="fade-right">
                                        <div className="overlay"></div>
                                        <div className="project-image">
                                            <img  src={CRM} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="project-content" data-aos="zoom-out-left">
                                        <p className="project-type">
                                            Work In Progress
                                        </p>
                                        <h3 className="project-title">Caseflow CRM</h3>
                                        <div className="project-description">
                                            <p>
                                                A completely custom mortgage and protection CRM platform built from the ground up with the aim to be more complete than any other currently on the market.
                                                The CRM is structured with a modular design, allowing for easy integration and customization of specific functionalities. 
                                                Enhancing productivity through the implementation of iframes, enabling concurrent management of multiple leads, cases, and other tasks seamlessly. 
                                                This ensures that users can work on various items simultaneously without the risk of losing any progress.
                                            </p>
                                        </div>
                                        <ul className="project-tech-stack">
                                            <li>JavaScript</li>
                                            <li>PHP</li>
                                            <li>SQLite</li>
                                            <li>UiKit</li>
                                            <li>getAddress( );</li>
                                            <li>PropertyData API</li>
                                            <li>Google Street View API</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr className="divide-y xl:invisible my-5" />

                            <div className="grid xl:grid-cols-2 gap-20 project-container mt-24">
                                <div className="flex items-center xl:order-first order-last">
                                    <div className="project-content" data-aos="zoom-out-right">
                                        <p className="project-type">
                                            Featured Project
                                        </p>
                                        <h3 className="project-title">Kata Flow</h3>
                                        <div className="project-description">
                                            <p>
                                                A lead form builder for&nbsp;   
                                                <a className="link link--anim" href="https://www.charwinprivateclients.co.uk/" target="blank" rel="noopener noreferrer">
                                                    <span>Charwin Private Clients Ltd</span>
                                                </a>
                                                . Build a web form from scratch using a drag and drop card based system. Add calculations and logic in the form of variables, hidden fields, conditionals and more.
                                                Minipulate text and values using a twig based template lanaguage and custom filters. Dynamically change the style and layout of the cards, 
                                                using a vast array of options.&nbsp; 
                                                 <a className="link link--anim" href="https://charwinbridging.co.uk/" target="blank" rel="noopener noreferrer">
                                                    <span>Charwin Bridiging</span>
                                                </a> 
                                                &nbsp;and&nbsp; 
                                                <a className="link link--anim" href="https://charwinsecuredloans.co.uk/" target="blank" rel="noopener noreferrer">
                                                    <span>Charwin Secured Loans</span>
                                                </a>
                                                &nbsp; 
                                                are just a couple of the many forms created by the builder.
                                            </p>
                                        </div>
                                        <ul className="project-tech-stack">
                                            <li>JavaScript</li>
                                            <li>GoJs</li>
                                            <li>UiKit</li>
                                            <li>PHP</li>
                                            <li>Twig</li>
                                            <li>Firebase</li>
                                        </ul>
                                        <div className="project-links">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <a>
                                        <div className="project-image-container" data-aos="fade-left">
                                            <div className="overlay"></div>
                                            <div className="project-image">
                                                <img src={KataFlow} />
                                            </div> 
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <hr className="divide-y xl:invisible my-5" />

                            <div className="grid xl:grid-cols-2 gap-20 project-container mt-24">
                                <div className="relative">
                                    <a  href="https://www.norfolk-knights-wheelchair-rugby.co.uk/" target="_blank" rel="noopener noreferrer">
                                        <div className="project-image-container" data-aos="fade-right">
                                            <div className="overlay"></div>
                                            <div className="project-image">
                                                <img src={NorfolkKnights} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <div className="project-content" data-aos="zoom-out-left">
                                        <p className="project-type">
                                            Featured Project
                                        </p>
                                        <h3 className="project-title">Norfolk Knights</h3>
                                        <div className="project-description">
                                            <p>
                                                A website for <a className="link link--anim" href="https://www.norfolk-knights-wheelchair-rugby.co.uk/" target="_blank" rel="noopener noreferrer"><span>Norfolk Knights</span></a> the local wheelchair rugby team.  
                                                Zoho Creator was used to create a simple management interface for the client. The information is then converted into Markdown files with YAML headers. The files are then fed into GRAV CMS to modify, remove or even build completley new sections or pages. This allows the client to manage and change their website on the fly.
                                            </p>
                                        </div>
                                        <ul className="project-tech-stack">
                                            <li>GRAV CMS</li>
                                            <li>MD</li>
                                            <li>YAML</li>
                                            <li>Zoho Creator</li>
                                            <li>UiKit</li>
                                        </ul>
                                        <div className="project-links">
                                            <a className="icon-link" href="https://www.norfolk-knights-wheelchair-rugby.co.uk/" target="_blank" rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="divide-y xl:invisible my-5" />

                            <div className="grid xl:grid-cols-2 gap-20 project-container mt-24">
                                <div className="flex items-center xl:order-first order-last">
                                    <div className="project-content" data-aos="zoom-out-right">
                                        <p className="project-type">
                                            Work In Progress
                                        </p>
                                        <h3 className="project-title">Financial Calculators</h3>
                                        <div className="project-description">
                                            <p>
                                                After stuggling to find a website with financial calculators that dynamically update without having to
                                                 enter your desired values and then click a button to see the results. I decided to create my own. 
                                                 All the values dynamically update as the sliders are dragged, enter is pressed or the user clicks away from the inputs. 
                                                 The aim is build a vast array of calculators and tools, along with key finanical imformation.
                                            </p>
                                        </div>
                                        <ul className="project-tech-stack">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>UiKit</li>
                                        </ul>
                                        <div className="project-links">
                                            <a className="icon-link" href="https://financial-calculators.co.uk/" target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-box-arrow-up-right"></i>
                                            </a>
                                            <a className="icon-link" href="https://github.com/TomNikoloff/financial-calculators" target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <a  href="https://financial-calculators.co.uk/" target="_blank" rel="noopener noreferrer">
                                        <div className="project-image-container" data-aos="fade-left">
                                            <div className="overlay"></div>
                                            <div className="project-image relative">
                                                <img src={FinancialCalcs} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

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
                                <div>
                                    <div className="card p-7" data-aos="zoom-out-up" onClick={() => openProject('https://tomnikoloff.github.io/react-memory-game/')}>
                                        <div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <i className="bi bi-folder text-3xl text-purple-600"></i>
                                                </div>
                                                <div>
                                                    <div className="project-links">
                                                        <a onClick={() => openProject('https://tomnikoloff.github.io/react-memory-game/')} className="icon-link" href="https://github.com/TomNikoloff/react-memory-game" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-github"></i>
                                                        </a>
                                                        <a className="icon-link" href="https://tomnikoloff.github.io/react-memory-game/" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-box-arrow-up-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-5">
                                                <h3 className="other-projects-title">
                                                    <a href="https://tomnikoloff.github.io/react-memory-game/">Memory Game</a>
                                                </h3>
                                            </div>
                                            <div>
                                                <p className="other-projects-description">
                                                    A simple memory game built using React.
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className="other-project-tech-stack">
                                                <li>
                                                    React
                                                </li>
                                                <li>
                                                    Vite
                                                </li>
                                                <li>
                                                    UiKit
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card p-7" data-aos="zoom-out-up" onClick={() => openProject('https://tomnikoloff.github.io/react-to-do-list/')}>
                                        <div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <i className="bi bi-folder text-3xl text-purple-600"></i>
                                                </div>
                                                <div>
                                                    <div className="project-links">
                                                        <a onClick={() => openProject('https://tomnikoloff.github.io/react-to-do-list/')} className="icon-link" href="https://github.com/TomNikoloff/react-to-do-list" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-github"></i>
                                                        </a>
                                                        <a className="icon-link" href="https://tomnikoloff.github.io/react-to-do-list/" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-box-arrow-up-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-5">
                                                <h3 className="other-projects-title">
                                                    <a href="https://tomnikoloff.github.io/react-to-do-list/">To-Do List</a>
                                                </h3>
                                            </div>
                                            <div>
                                                <p className="other-projects-description">
                                                    A simple to-do list built using React.
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className="other-project-tech-stack">
                                                <li>
                                                    React
                                                </li>
                                                <li>
                                                    Vite
                                                </li>
                                                <li>
                                                    Bootstrap
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card p-7" data-aos="zoom-out-up" onClick={() => openProject('https://tomnikoloff.github.io/react-rock-paper-scissors/')}>
                                        <div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <i className="bi bi-folder text-3xl text-purple-600"></i>
                                                </div>
                                                <div>
                                                    <div className="project-links">
                                                        <a onClick={() => openProject('https://tomnikoloff.github.io/react-rock-paper-scissors/')} className="icon-link" href="https://github.com/TomNikoloff/react-rock-paper-scissors" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-github"></i>
                                                        </a>
                                                        <a className="icon-link" href="https://tomnikoloff.github.io/react-rock-paper-scissors/" target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-box-arrow-up-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-5">
                                                <h3 className="other-projects-title">
                                                    <a href="https://tomnikoloff.github.io/react-rock-paper-scissors/">Rock, Paper & Scissors</a>
                                                </h3>
                                            </div>
                                            <div>
                                                <p className="other-projects-description">
                                                    A simple rock, paper and scissors game.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className="other-project-tech-stack">
                                                <li>
                                                    React
                                                </li>
                                                <li>
                                                    Vite
                                                </li>
                                                <li>
                                                    UiKit
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
    )
}

export default Projects;