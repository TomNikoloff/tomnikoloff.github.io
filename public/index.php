<?php
    # HEAD
    include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/head.php");

    ## Root will need changing. This root is for use on my virtual server test area.
?>
<body>
    <div class="container">

        <?php

            # Index
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/index.php");

        ?>

        <?php

            # About
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/about.php");
        
        ?>

        <?php

            # Skills
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/skills.php");
        
        ?>

        <?php

            # Projects
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/projects.php");
        
        ?>

        <?php

            # Contact
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/contact.php");
        
        ?>

    </div>
    <div class="vertical-container">
        <div>
            <a href="mailto:tomnikoloff@hotmail.co.uk">tomnikoloff@hotmail.co.uk</a>
        </div>
    </div>

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