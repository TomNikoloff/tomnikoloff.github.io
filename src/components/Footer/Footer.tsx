import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer className='absolute bottom-0 left-0 w-full'>
                <div className='absolute bottom-0 flex justify-center w-full sm:ml-3'>
                    <p className="text-center text-purple-600 mb-5">
                        Handcrafted by me <br className="sm:hidden" /><i className="bi bi-c-circle text-green"></i> twentyTwentyFour
                    </p>
                </div>
                <div className="absolute bottom-0">
                    <div className="html-tags ml-5">
                        <span className="">
                            &lt;/body&gt;  
                        </span>
                    </div>
                    <div className='html-tags'>
                        <span className="">
                            &lt;/html&gt;  
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;