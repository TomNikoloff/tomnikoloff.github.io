<?php
    # HEAD
    include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/head.php");

    ## Root will need changing. This root is for use on my virtual server test area.
?>
<body>
    <div class="uk-container uk-container-expand bounce-in-left">
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
        <header>
        </header>
        <main>

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

        </main>
        <?php

            # Footer
            include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/footer.php");
        
        ?>
        <div class="uk-position-absolute" style="bottom: 0;">
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
</body>
</html>