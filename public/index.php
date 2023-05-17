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
</body>
</html>