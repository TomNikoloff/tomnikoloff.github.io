import './Intro.css';

import TLogoWebp from '../../assets/images/logo/modern-tlogo-webp.webp';
import TLogoPng  from '../../assets/images/logo/modern-tlogo-min.png';

import LogoWebp  from '../../assets/images/logo/modern-logo-webp.webp';
import LogoPng   from '../../assets/images/logo/modern-logo-min.png';

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
                            {/* <img className='flicker-in t-logo' src={TLogo}/> */}
                            {/* “T” Logo with WebP → PNG fallback */}
                            <picture className="flicker-in t-logo">
                                <source
                                    srcSet={TLogoWebp}
                                    type="image/webp"
                                />
                                <img
                                    src={TLogoPng}
                                    alt="T logo"
                                    loading="eager"
                                />
                            </picture>
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
                    {/* <div className='flicker-in logo'>
                        <div>
                            <img src={Logo} alt='logo' />
                        </div>
                    </div> */}

                    {/* Main Logo with WebP → PNG fallback */}
                    <picture className="flicker-in logo">
                        <source
                            srcSet={LogoWebp}
                            type="image/webp"
                        />
                        <img
                            src={LogoPng}
                            alt="Main logo"
                            loading="eager"
                        />
                    </picture>

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