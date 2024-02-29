import './index.css';
import './responsive.css';
import TLogo from '../../assets/t-logo.png';
import Logo from '../../assets/logo1.png';

const Intro = () => {
    return (
        <>
            <section>
                <aside className='relative'>
                    <div className='html-tags absolute top-0 mt-5'>
                        <span className=''>
                            &lt;html&gt;
                        </span>
                        <span className='ml-5'>
                            &lt;body&gt;
                        </span>
                    </div>
                </aside>
                <div className='area' data-section="intro">
                    <div className='html-tags section absolute top-24 hidden sm:block'>
                        <span className='-ml-7'>
                            &lt;section id = "intro"&gt;
                        </span>
                    </div>
                    <div className='content'>
                        <div className='html-tags -mb-5'>
                            <span>
                                &lt;h1&gt;
                            </span>
                        </div>
                        <h1 className='heading'>
                            <span>H</span>
                            <span>i</span>
                            <span className='text-green'>,</span>
                            <br />
                            <span>I</span>
                            <span className='text-pink'>'</span>
                            <span className='mr-5'>m</span>
                            <img className='flicker-in t-logo' src={TLogo}/>
                            {/*<span className='text-purple-600 flicker-in'>T</span>*/}
                            <span >o</span>
                            <span>m</span>
                            <span className='text-green'>.</span>
                        </h1>
                        <div className='html-tags -mb-3 -mt-3'>
                            <span className='-mb-3'>
                                &lt;/h1&gt;
                            </span>
                            <span>
                                &lt;p&gt;
                            </span>
                        </div>
                        <p className='description'>
                            A design-minded <strong className='text-purple-600'>Software Developer</strong> focused on &nbsp;   
                            <br className='hidden lg:block'/>
                            building beautiful <span className='text-green'>interfaces</span> & <span className='text-pink'>experiences</span>.
                        </p>
                        <div className='html-tags'>
                            <span>
                                &lt;/p&gt;
                            </span>
                        </div>
                    </div>
                    <div className='flicker-in logo'>
                        <div>
                            <img src={Logo} alt='logo' />
                        </div>
                    </div>
                    <div className='html-tags section absolute bottom-12 -ml-7 hidden sm:block'>
                        <span>
                            &lt;/section&gt;
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;