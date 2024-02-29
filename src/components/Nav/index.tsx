import './index.css';
import { useState, useEffect } from 'react';

interface ScrollNavigationProps {}

const Nav: React.FC<ScrollNavigationProps> = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Function to scroll to the specified section
    const scrollToSection = (sectionId: string) => {
        const section = document.querySelector(`[data-section="${sectionId}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to determine which section is currently in view
    const determineActiveSection = () => {
        const sections = document.querySelectorAll('[data-section]');
        let activeSectionId = null as string | null;
    
        sections.forEach((section: Element) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSectionId = section.getAttribute('data-section');
            }
        });
    
        if (activeSectionId !== null) {
            setActiveSection(activeSectionId);
    
            // Update current section nav
            const currentSection = document.getElementById('dot_nav_section');
            if (currentSection instanceof HTMLElement) {
                const capitalizedSectionId = activeSectionId.charAt(0).toUpperCase() + activeSectionId.slice(1);
                currentSection.textContent = capitalizedSectionId;
    
                // Scroll to section when currentSection is clicked
                currentSection.onclick = () => {
                    const sectionToScroll = document.querySelector(`[data-section="${activeSectionId}"]`);
                    if (sectionToScroll) {
                        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
                    }
                };
            } else {
                console.error("Element with id 'dot_nav_section' not found.");
            }
        }
    };
    

    // Handle scrolling events
    useEffect(() => {
        const handleScroll = () => {
            determineActiveSection();
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Only add event listener

    // Determine active section on component mount
    useEffect(() => {
        determineActiveSection();
    }, []); // Run only once on component mount

    return (
        <div className='dot-nav-container'>
            <nav id="dot_nav">
                <ul>
                <li>
                    <a data-nav-dot="intro" onClick={() => scrollToSection('intro')} className={`dot-link ${activeSection === 'intro' ? 'active' : ''}`}>
                    <span  className="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="about" onClick={() => scrollToSection('about')} className={`dot-link ${activeSection === 'about' ? 'active' : ''}`}>
                    <span  className="dot"></span>
                    </a> 
                </li>
                <li>
                    <a data-nav-dot="skills" onClick={() => scrollToSection('skills')} className={`dot-link ${activeSection === 'skills' ? 'active' : ''}`}>
                    <span  className="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="projects" onClick={() => scrollToSection('projects')} className={`dot-link ${activeSection === 'projects' ? 'active' : ''}`}>
                    <span  className="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="contact" onClick={() => scrollToSection('contact')} className={`dot-link ${activeSection === 'contact' ? 'active' : ''}`}>
                    <span className="dot"></span>
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;


