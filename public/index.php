<?php
    # HEAD
    #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/head.php");

    ## Root will need changing. This root is for use on my virtual server test area.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tom Nikoloff</title>

    <link rel="icon" href="./images/favicon.png" type="image/x-icon" />

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/2eaf1545d9.js" crossorigin="anonymous"></script>

    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.24/dist/css/uikit.min.css" />

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.24/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.24/dist/js/uikit-icons.min.js"></script>

    <!-- CSS  -->
    <link rel="stylesheet" href="./library/css/core.css?<?php echo(time()); ?>">
    <link rel="stylesheet" href="./library/css/responsive.css?<?php echo(time()); ?>">
    <link rel="stylesheet" href="./library/css/animations.css?<?php echo(time()); ?>">

    <!-- CORE JS -->
    <script src="./library/js/core.js?<?php echo(time()); ?>"></script>

    <!-- Google Fonts --> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- AOS Animations -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>
<body>
    <div class="vertical-container-top uk-visible@s">
        <div>
            <a id="dot_nav_section" href="#intro_section" uk-scroll class="">Intro</a>
        </div>
    </div>
    <div id="main_container" class="container">

        <?php

            # Index
            #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/index.php");

        ?>
        <div class="bounce-in-left slides intro-container">   
            <div class="uk-position-relative">
                <div class="uk-margin-top uk-position-absolute" style="top: 0;">
                    <div>
                        <span class="html-tags">
                            &lt;html&gt;  
                        </span>
                    </div>
                    <div class="uk-margin-left">
                        <span class="html-tags">
                            &lt;body&gt;  
                        </span>
                    </div>
                </div>
            </div>
            <div id="scroll_section_A">
            </div>
           <section id="intro_section" class="intro-section full-height-section uk-position-relative">
        
                <div class="uk-position-absolute" style="top: 100px;">
                    <div>
                        <span class="html-tags section-tags uk-visible@s">
                            &lt;section<span class="uk-visible@s"> id = "intro_section"</span>&gt;  
                        </span>
                    </div>
                </div>
                <div class="section-content">
                    <div>
                        <div style="margin-bottom: -20px;">
                            <span class="html-tags">
                                &lt;h1&gt;  
                            </span>
                        </div>
                        <h1>
                            <span>H</span>
                            <span>i</span>
                            <span>,</span>
        
                            <br>
        
                            <span>I</span>
                            <span>'</span>
                            <span class="uk-margin-right">m</span>
                
                            <img class="flicker-in-1 t-logo" src="./images/t-logo.png">
                            <span>o</span>
                            <span>m</span>
                            <span>.</span>
                        </h1>
                    </div>
                    <div>
                        <div>
                            <span class="html-tags">
                                &lt;/h1&gt;  
                            </span>
                        </div>
                        
                        <div style="margin-bottom: -20px; margin-top: -20px;">
                            <span class="html-tags">
                                &lt;p&gt;  
                            </span>
                        </div>
                        <p class="intro-text">
                            A design-minded <span class="secondary-text">Web Developer</span> focused on
                            <br class="uk-visible@s"> 
                            building beautiful interfaces & experiences. 
                        </p>
                        <div style="margin-top: -10px">
                            <span class="html-tags">
                                &lt;/p&gt;  
                            </span>
                        </div>
                    </div>
                </div>
        
                <div class="logo flicker-in-1 uk-flex uk-flex-center">
                    <div>
                        <img src="./images/logo1.png" alt="logo">
                    </div>
                </div>
        
                <div class="html-tag-section-bottom">
                    <div>
                        <span class="html-tags section-tags uk-visible@s">
                            &lt;/section&gt;  
                        </span>
                    </div>
                </div>
            </section>
        </div>

        <?php

            # About
            #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/about.php");
        
        ?>
        <div class="bounce-in-left slides about-container">     
            <section id="about_section" class="about-section full-height-section uk-position-relative">
        
                <div class="html-tag-section-top">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;section id = "about_section"&gt;  
                        </span>
                    </div>
                </div>
        
                <div class="background-text">
                    About
                </div>
                <div id="scroll_section_B">
                </div>
                <div id="about_section" class="section-content">
                    <div style="margin-bottom: -10px;">
                        <span class="html-tags">
                            &lt;h2&gt;  
                        </span>
                    </div>
                    <div data-aos="fade-right" class="about-title">
                        <h2 class="uk-flex">
                            <span>A</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>
                            <span class="uk-hidden@m">&nbsp</span>
                        </h2>
                        <h2 class="uk-flex">
                            <span>M</span>
                            <span>e</span>
                        </h2>
                    </div>
                    <div uk-grid class="uk-grid uk-child-width-1-2@m uk-grid-row-collapse">
                        <div>
                            <div>
                                <span class="html-tags">
                                    &lt;/h2&gt;  
                                </span>
                            </div>
                            <div class="" style="margin-top: -20px;">
                                <div style="margin-bottom: -20px;">
                                    <span class="html-tags">
                                        &lt;p&gt;  
                                    </span>
                                </div>
                                <div data-aos="fade-right">
                                    <p>
                                        I've always had a passion for technology and computers. Originating from a love of PC gaming at a young age. After starting to learn web development during lockdown and using my free time to progress my skills. It had only served to solidify what role I wanted to fulfil. So at the beginning of 2022, I took the plunge and made it my goal to become a developer fulltime. By early May of that year, I landed my first job as a Web developer and haven't looked back since.
                                    </p>
                                    <p>
                                        I am a reliable, conscientious and hardworking individual, who is equally confident working as part of a team and on my own initiative. I feel that I would bring enthusiasm and commitment to any job that arises. I like tackling a problem head on and and working towards a solution.
                                    </p>
                                    <p class="uk-margin-remove">
                                        When I'm not at my computer, I'm am usually in the gym, hanging out with family or going for long walks with my golden retriever, Lola.
                                    </p>
                                </div>
                                <div style="margin-top: -10px;">
                                    <span class="html-tags">
                                        &lt;/p&gt;  
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="uk-flex uk-flex-center uk-flex-middle">
                            <div class="" data-aos="zoom-out-up">
                                <img class="about-section-img" src="./images/workspace.png">
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="html-tag-section-bottom">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;/section&gt;  
                        </span>
                    </div>
                </div>
        
            </section>
        </div>

        <?php

            # Skills
            #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/skills.php");
        
        ?>
        <div class="bounce-in-left slides skills-container">   
            <section id="skills_section" class="skills-section full-height-section uk-position-relative">
        
                <div class="html-tag-section-top">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;section id = "skills_section"&gt;  
                        </span>
                    </div>
                </div>
        
                <div class="background-text">
                    Skills
                </div>
                <div id="scroll_section_C">
                </div>
                <div id="skills_section" class="section-content">
                    <div uk-grid class="uk-grid uk-child-width-1-2@l uk-grid-row-collapse">
                        <div>
                            <div style="margin-bottom: -10px;">
                                <span class="html-tags">
                                    &lt;h2&gt;  
                                </span>
                            </div>
                            <div data-aos="fade-right">
                                <h2 class="uk-flex">
                                    <span>S</span>
                                    <span>k</span>
                                    <span>i</span>
                                    <span>l</span>
                                    <span>l</span>
                                    <span>s</span>
                                    <span>&nbsp</span>
                                    <span>&</span>
                                    <span class="uk-hidden@l">&nbsp</span>
                                </h2>
                                <h2 class="uk-flex">
                                    <span>E</span>
                                    <span>x</span>
                                    <span>p</span>
                                    <span>e</span>
                                    <span>r</span>
                                    <span>i</span>
                                    <span>e</span>
                                    <span>n</span>
                                    <span>c</span>
                                    <span>e</span>
                                </h2>
                            </div>
                            <div>
                                <span class="html-tags">
                                    &lt;/h2&gt;  
                                </span>
                            </div>
                            <div class="" style="margin-top: -20px;">
                                <div style="margin-bottom: -20px;">
                                    <span class="html-tags">
                                        &lt;p&gt;  
                                    </span>
                                </div>
                                <div  data-aos="fade-right">
                                    <p>
                                        Since beginning my journey as a Web Developer, I have greatly expanded my knowledge and improved efficiency, in both languages used and in the many tools I have added to my toolbelt.
                                    </p>
                                    <p class="uk-margin-remove">
                                        My main area of expertise is in front-end development. I have a real passion for building pixel-perfect websites and apps that are intuitive, semantic and responsive.
                                    </p>
                                </div>
                                <div style="margin-top: -10px;">
                                    <span class="html-tags">
                                        &lt;/p&gt;  
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="skills-section">
                                <div id="skill_animation_trigger">
                                    <div class="uk-margin">
                                        HTML5
                                        <div class="skills-bar">
                                            <div id="js_skill" class="skill-level" data-skill-level="95%"></div>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        Javascript
                                        <div class="skills-bar">
                                            <div id="js_skill" class="skill-level" data-skill-level="85%"></div>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        PHP
                                        <div class="skills-bar">
                                            <div class="skill-level" data-skill-level="50%"></div>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        React
                                        <div class="skills-bar">
                                            <div class="skill-level" data-skill-level="20%"></div>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        CSS3
                                        <div class="skills-bar">
                                            <div class="skill-level" data-skill-level="90%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience-section">
                                <div class="uk-padding-small experience-card" data-aos="zoom-out-left">
                                    <div>
                                        <div style="margin-bottom: -10px">
                                            <span class="small-html-tags">
                                                &lt;h4&gt;  
                                            </span>
                                        </div>
                                        <h4 class="uk-margin-left">
                                            Powered By Hakiu Ltd
                                        </h4>
                                        <div style="margin-top: -5px;">
                                            <span class="small-html-tags">
                                                &lt;/h4&gt;  
                                            </span>
                                        </div>
                                    </div>
                                    <div style="margin-top: -15px">
                                        <div style="margin-bottom: -5px;">
                                            <span class="small-html-tags">
                                                &lt;p&gt;  
                                            </span>
                                        </div>
                                        <div uk-grid class="uk-grid uk-child-width-1-2@s uk-margin-remove uk-grid-row-collapse">
                                            <div>
                                                <p class="uk-margin-remove">
                                                    Web Developer
                                                </p>
                                            </div>
                                            <div>
                                                <p class="uk-margin-remove-bottom uk-text-right@s uk-margin-right">
                                                    May 2022 - Present
                                                </p>
                                            </div>
                                        </div>
                                        <div style="margin-top: -5px;">
                                            <span class="small-html-tags">
                                                &lt;/p&gt;  
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="html-tag-section-bottom">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;/section&gt;  
                        </span>
                    </div>
                </div>
            </section>
        </div>
        
        <?php

            # Projects
            #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/projects.php");
        
        ?>
        <div class="bounce-in-left slides projects-container">       
            <section id="projects_section" class="projects-section full-height-section">
        
                <div class="uk-position-absolute" style="top: 50px;">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;section id = "projects_section"&gt;  
                        </span>
                    </div>
                </div>
        
                <div class="background-text">
                    Projects
                </div>
                <div id="scroll_section_D">
                </div>
                <div id="projects_section" class="section-content">
                    <div class="uk-margin-medium-bottom projects-title">
                        <div style="margin-bottom: -10px;">
                            <span class="html-tags">
                                &lt;h2&gt;  
                            </span>
                        </div>
                        <div data-aos="fade-right">
                            <h2 class=" uk-flex">
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
                        <div>
                            <span class="html-tags">
                                &lt;/h2&gt;  
                            </span>
                        </div>
                    </div>
        
                    <div >
                
                        <!-- First Project-->
                        <div uk-grid class="uk-grid uk-child-width-1-2@l uk-grid-column-collapse project-container">
                            <div class="uk-position-relative">
                                <a>
                                    <div class="project-image-container" data-aos="fade-right">
                                        <div class="project-overlay-contents">
                                            
                                        </div>
                                        <div class="project-image uk-position-relative">
                                            <img src="./images/kata-flow-example.png" >
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="uk-flex uk-flex-middl">
                                <div class="project-content" data-aos="zoom-out-left">
                                    <div>
                                        <p class="project-type">
                                            Featured Project
                                        </p>
                                        <h3 class="project-title">Kata Flow</h3>
                                    </div>
             
                                    <div class="project-description">
                                        <p>
                                            A lead form builder for  
                                            <a class="link link--anim" href="https://www.charwinprivateclients.co.uk/" target="blank" rel="noopener noreferrer"><span>Charwin Private Clients Ltd</span></a>
                                             . Build a web form from scratch using a drag and drop card based system. Add calculations and logic in the form of variables, hidden fields, conditionals and more. Minipulate text and values using a twig based template lanaguage and custom filters. Dynamically change the style and layout of the cards, using a vast array of options. <a class="link link--anim" href="https://charwinbridging.co.uk/" target="blank" rel="noopener noreferrer"><span>Charwin Bridiging</span></a> and <a class="link link--anim" href="https://charwinsecuredloans.co.uk/" target="blank" rel="noopener noreferrer"><span>Charwin Secured Loans</span></a> are just a couple of the many forms created by the builder.
                                        </p>
                                    </div>
                                    <ul class="project-tech-stack">
                                        <li>GoJs</li>
                                        <li>UiKit</li>
                                        <li>SQLite</li>
                                        <li>Twig</li>
                                        <li>Firebase</li>
                                    </ul>
                                    <div class="project-links">
                                        <a class="btn" href="#" target="blank" rel="noopener noreferrer">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <!-- Second Project-->
                        <div uk-grid class="uk-grid uk-child-width-1-2@l uk-grid-column-collapse project-container uk-margin-xlarge-top">
                            <div class="uk-flex uk-flex-middle uk-flex-first@l uk-flex-last">
                                <div class="project-content" data-aos="zoom-out-right">
                                    <p class="project-type">
                                        Featured Project
                                    </p>
                                    <h3 class="project-title">Norfolk Knights</h3>
                                    <div class="project-description">
                                        <p>
                                            A website for <a class="link link--anim" href="https://www.charwinprivateclients.co.uk/" target="blank" rel="noopener noreferrer"><span>Norfolk Knights</span></a> the local wheelchair rugby team.  
                                            Zoho Creator was used to create a simple management interface for the client. The information is then converted into Markdown files with YAML headers. The files are then fed into GRAV CMS to modify, remove or even build completley new sections or pages. This allows the client to manage and change their website on the fly.
                                        </p>
                                    </div>
                                    <ul class="project-tech-stack">
                                        <li>GRAV CMS</li>
                                        <li>MD</li>
                                        <li>YAML</li>
                                        <li>Zoho Creator</li>
                                        <li>UiKit</li>
                                    </ul>
                                    <div class="project-links">
                                        <a class="icon-link" uk-tooltip="title: External Link; pos: right; delay: 700" href="https://www.norfolk-knights-wheelchair-rugby.co.uk/" target="blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-position-relative">
                                <a  href="https://www.norfolk-knights-wheelchair-rugby.co.uk/" target="blank" rel="noopener noreferrer">
                                    <div class="project-image-container" data-aos="fade-left">
                                        <div class="overlay"></div>
                                        <div class="project-image">
                                            <img src="./images/norfolk-knights.png">
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
            
                        <!-- Third Project-->
                        <div uk-grid class="uk-grid uk-child-width-1-2@l uk-grid-column-collapse project-container uk-margin-xlarge-top">
                            <div class="uk-position-relative">
                                <a  href="https://financial-calculators.co.uk/" target="blank" rel="noopener noreferrer">
                                    <div class="project-image-container" data-aos="fade-right">
                                        <div class="overlay"></div>
                                        <div class="project-image uk-position-relative">
                                            <img src="./images/financial-calculators.co.uk" >
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="uk-flex uk-flex-middle">
                                <div class="project-content" data-aos="zoom-out-left">
                                    <p class="project-type">
                                        Work In Progress
                                    </p>
                                    <h3 class="project-title">Financial Calculators</h3>
                                    <div class="project-description">
                                        <p>
                                            After stuggling to find a website with financial calculators that dynamically update without having to enter your desired values and then click a button to see the results. I decided to create my own. All the values dynamically update as the sliders are dragged, enter is pressed or the user clicks away from the inputs. The aim is build a vast array of calculators and tools, along with key finanical imformation.
                                    </div>
                                    <ul class="project-tech-stack">
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>UiKit</li>
                                    </ul>
                                    <div class="project-links">
                                        <a class="icon-link" uk-tooltip="title: GitHub; pos: left; delay: 700" href="https://github.com/TomNikoloff" target="blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-xl"></i></a>
                                        <a class="icon-link" uk-tooltip="title: External Link; pos: bottom; delay: 700" href="https://financial-calculators.co.uk/" target="blank" rel="noopener noreferrer"><i  class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
            
                    </div>
                </div>
                <div class="uk-position-absolute" style="bottom: 50px;">
                    <div>
                        <span class="html-tags uk-visible@s">
                            &lt;/section&gt;  
                        </span>
                    </div>
                </div>
            </section>
        </div>   

        <?php

            # Contact
            #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/contact.php");
        
        ?>
        <div class="bounce-in-left slides contact-container">      
            <section id="contact_section" class="contact-section full-height-section">
                <div class="html-tag-section-top section-tags uk-visible@s">
                    <div>
                        <span class="html-tags">
                            &lt;section id = "contact_section"&gt;  
                        </span>
                    </div>
                </div>
                <div id="scroll_section_E">
                </div>
                <div id="contact_section" class="section-content">
                    <div class="uk-flex uk-flex-center uk-flex-middle uk-text-center">
                        <div class="uk-width-1-2@m uk-width-1-3@xl">
                            <div data-aos="zoom-out-up">
                                <div>
                                    <h4 class="color-text">Thanks for dropping by!</h4>
                                    <h2 class="uk-flex uk-flex-center">
                                        <span>G</span>
                                        <span>e</span>
                                        <span>t</span>
                                        <span>&nbsp</span>
                                        <span>I</span>
                                        <span>n</span>
                                        <span>&nbsp</span>
                                        <span>T</span>
                                        <span>o</span>
                                        <span>u</span>
                                        <span>c</span>
                                        <span>h</span>
                                    </h2>
                                </div>
                                <p>
                                    I am currently looking for new exciting opportunities. Feel free to leave me a message. My inbox is always open and I look forward to hearing from you!
                                </p>
                                <div class="uk-flex uk-flex-center">
                                    <a class="btn email-btn" href="mailto:tomnikoloff@hotmail.co.uk">Say Hello!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="html-tag-section-bottom section-tags uk-visible@s">
                    <div>
                        <span class="html-tags">
                            &lt;/section&gt;  
                        </span>
                    </div>
                </div>
            </section>
        
            <div class="uk-position-relative">
                <div class="footer">
                    <p class="uk-text-center">Handcrafted by me <br class="uk-hidden@s"><i class="fa-regular fa-copyright"></i> twentyTwentyThree</p>
                </div>
                <div class="html-tags-bottom">
                    <div class="uk-margin-left">
                        <span class="html-tags">
                            &lt;/body&gt;  
                        </span>
                    </div>
                    <div>
                        <span class="html-tags">
                            &lt;/html&gt;  
                        </span>
                    </div>
                </div>
            </div>
        </div>   

    </div>
    
    <?php
        # Navbar
        #include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/navigation.php");
    ?>
    <div class="dot-navigation-container">  

        <nav id="dot_nav">
            <ul>
                <li>
                    <a data-nav-dot="Intro" href="#intro_section" uk-scroll class="dot-link active">
                        <span class="dot-label">Intro</span>
                        <span  class="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="About" href="#about_section" uk-scroll class="dot-link">
                        <span class="dot-label">About</span>
                        <span  class="dot"></span>
                    </a> 
                </li>
                <li>
                    <a data-nav-dot="Skills" href="#skills_section" uk-scroll class="dot-link">
                        <span class="dot-label">Skills</span>
                        <span  class="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="Projects" href="#projects_section" uk-scroll class="dot-link">
                        <span class="dot-label">Projects</span>
                        <span  class="dot"></span>
                    </a>
                </li>
                <li>
                    <a data-nav-dot="Contact" href="#contact_section" uk-scroll class="dot-link">
                        <span class="dot-label">Contact</span>
                        <span class="dot"></span>
                    </a>
                </li>
            </ul>
        </nav>
    
    </div>
    

    
    <div class="vertical-container uk-visible@s">
        <div>
            <a href="mailto:tomnikoloff@hotmail.co.uk">tomnikoloff@hotmail.co.uk</a>
        </div>
    </div>
    <!--
    <div class="scroll-up-container uk-hidden@s">
        <a href="#main_container" uk-scroll><i class="fa-solid fa-circle-arrow-up"></i></a>
    </div>
    -->

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init({
        easing: 'ease-out-back', // default easing for AOS animations
        duration: 750, // values from 0 to 3000, with step 50ms
        mirror: true
      });
    </script>
    
</body>
</html>