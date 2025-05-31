import './About.css';

import WorkspaceWebp from '../../assets/images/workspace.webp';
import WorkspacePng from '../../assets/images/workspace.png';

const About = () => {
    return(
        <>
            <section>
                <div className='area' data-section="about">
                    <div className='html-tags absolute top-12 hidden sm:block'>
                        <span className='-ml-7'>
                            &lt;section id = "about"&gt;
                        </span>
                    </div>
                    <div className='background-text'> About</div>
                    <div className='content'>
                        <div className='grid lg:grid-cols-2 gap-x-20'>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <div className='html-tags -mb-2'>
                                        <span>
                                            &lt;h2&gt;
                                        </span>
                                    </div>
                                    <div data-aos="fade-right" className="section-title">
                                        <h2 className="flex">
                                            <span>A</span>
                                            <span>b</span>
                                            <span>o</span>
                                            <span>u</span>
                                            <span>t</span>
                                            <span className="lg:hidden">&nbsp;</span>
                                        </h2>
                                        <h2 className="flex">
                                            <span>M</span>
                                            <span>e</span>
                                        </h2>
                                    </div>
                                    <div className='html-tags -mb-3'>
                                        <span>
                                            &lt;/h2&gt;
                                        </span>
                                    </div>
                                    <div className='html-tags -mb-2'>
                                        <span>
                                            &lt;p&gt;  
                                        </span>
                                    </div>
                                    <div data-aos="fade-right">
                                        <p className='mb-5'>
                                            I’ve always had a strong interest in technology, which naturally led me to explore web development during the
                                            lockdown. I spent my free time building projects and sharpening my skills, and it quickly became clear this
                                            was more than a hobby, it was the career I wanted to pursue. In early 2022, I committed fully to this path
                                            and landed my first junior developer role by April, marking a pivotal moment that set everything in motion.
                                        </p>
                                        <p>
                                            When I’m not at my computer, I’m usually in the gym, spending time with family, or out on long walks with my 
                                            golden retriever, Lola. I also enjoy hiking, climbing mountains, and being near water, whether that’s 
                                            paddleboarding, wild swimming, or simply getting outdoors. I train in Brazilian Jiu-Jitsu and am currently 
                                            learning German due to my Swiss heritage.
                                        </p>
                                    </div>
                                    <div className='html-tags'>
                                        <span>
                                            &lt;/p&gt;  
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div data-aos="zoom-out-up">
                                    {/* <img src={WorkspacePng} alt='workspace' /> */}

                                    {/* Main Logo with WebP → PNG fallback */}
                                    <picture>
                                        <source
                                            srcSet={WorkspaceWebp}
                                            type="image/webp"
                                        />
                                        <img
                                            src={WorkspacePng}
                                            alt="Workspace Image"
                                            loading="lazy"
                                        />
                                    </picture>

                                </div>
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

export default About;