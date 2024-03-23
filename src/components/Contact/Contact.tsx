import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
    return(
        <>
            <section>
                <div className='area' data-section="contact">
                    <div className='html-tags section absolute top-12 hidden sm:block'>
                        <span className='-ml-7'>
                            &lt;section id = "contact"&gt;
                        </span>
                    </div>
                    <div className='content'>
                        <div className="flex justify-center items-center text-center">
                            <div className="lg:w-1/2 xl:w-1/3">
                                <div data-aos="zoom-out-up">
                                    <div className='section-title'>
                                        <h4 className='text-purple-600 text-lg'>Thanks for dropping by!</h4>
                                        <h2 className="flex justify-center">
                                            <span>G</span>
                                            <span>e</span>
                                            <span>t</span>
                                            <span>&nbsp;</span>
                                            <span>I</span>
                                            <span>n</span>
                                            <span>&nbsp;</span>
                                            <span>T</span>
                                            <span>o</span>
                                            <span>u</span>
                                            <span>c</span>
                                            <span>h</span>
                                        </h2>
                                    </div>
                                    <p className='my-5'>
                                        I am currently looking for new exciting opportunities. Feel free to leave me a message. My inbox is always open and I look forward to hearing from you!
                                    </p>
                                    <div className="flex justify-center">
                                        <a className="btn email-btn" href="mailto:tomnikoloff@hotmail.co.uk">Say Hello!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='html-tags section absolute bottom-16 mb-1 -ml-7 hidden sm:block'>
                        <span>
                            &lt;/section&gt;
                        </span>
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default Contact;