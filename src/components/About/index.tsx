import './index.css';
import './responsive.css';
import Workspace from '../../assets/workspace.webp';

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
                                            My fascination with technology and computers traces back to my early days, sparked by a love for 
                                            PC gaming. During the lockdown, I ventured into learning web development, dedicating my free time to honing my 
                                            skills. This pursuit cemented my ambition – I was determined to pursue a career in this field. In early 2022, 
                                            I took the leap, setting my sights on becoming a full-time developer. By April of that year, I secured my first 
                                            role as a junior developer, marking a pivotal moment that has propelled me forward ever since.
                                        </p>
                                        {/*
                                        <p>
                                            I embody reliability, conscientiousness, and a strong work ethic, 
                                            thriving both in collaborative team environments and when driving projects independently.
                                            My approach involves infusing enthusiasm and unwavering commitment into every task at hand. 
                                            I'm drawn to challenges, proactively tackling them head-on, fueled by the drive to unearth effective solutions.
                                        </p>
                                        */}
                                        <p>
                                            When I'm not at my computer, I'm am usually in the gym, hanging out with family or going for long walks with my golden retriever, Lola.
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
                                    <img src={Workspace} alt='workspace' />
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