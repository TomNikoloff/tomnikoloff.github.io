<?php
    # HEAD
    include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/core/head.php");

    ## Root will need changing. This root is for use on my virtual server test area.
?>
<body>
    <header>
    </header>
    <main>

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
            <div id="main_content_container" class="uk-margin-left">

                <?php

                    # Index
                    include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/index.php");

                ?>

            <!--
                <?php

                # Index
                include($_SERVER['DOCUMENT_ROOT']."/portfolio/includes/html/pages/skills.php");
                
                ?>
            -->

            </div>
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

    </main>
    <footer>
        <h3 class=" text-center footer_Copyright is_White">
            Handcrafted by me <i class="far fa-copyright" aria-hidden="true"></i> twentyTwentyTwo
    </footer>
</body>
</html>