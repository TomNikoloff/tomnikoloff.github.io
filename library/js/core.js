_CORE={
    extend:function(what, where){
        let newNode = _CORE;
        if(where&&where!=''){
            let whereTree = where.split('.');
            for(let w=0,we=whereTree.length;w<we;w++){
                if(!newNode[whereTree[w]])newNode[whereTree[w]]={};
                newNode = newNode[whereTree[w]];
            }
        } 
        for(let whatKey in what){
            newNode[whatKey] = what[whatKey];
        }			
    },
    info:{"title":"Tom Nikoloff Portfolio","code":"tomnikoloff.co.uk","copy":"Copyright (c) tomnikoloff.co.uk","year":"2023"},
    cache:{},
    utils:{
        bcheck: function(regex){let agent = navigator.userAgent.toLowerCase();return (agent.match(regex) !== null);},
        isFirefox: (typeof InstallTrigger !== 'undefined'),
        isIE: (navigator.userAgent.indexOf("Trident/")>-1&&navigator.userAgent.indexOf("rv:")>-1),
        isIOS: function(a){return a?_CHARWIN.utils.bcheck(RegExp("iP(hone|ad|od).+\\sOS\\s"+a,"i")):_CHARWIN.utils.bcheck(/iP(hone|ad|od)/i)},
        isIPad: function(a){return a?_CHARWIN.utils.bcheck(RegExp("iP(ad).+\\sOS\\s"+a,"i")):_CHARWIN.utils.bcheck(/iP(ad)/i)},
        isSafari: function(){return _CHARWIN.utils.bcheck(/safari/i)&&!_CHARWIN.utils.bcheck(/chrome/i)&&!_CHARWIN.utils.bcheck(/chromium/i)&&!_CHARWIN.utils.bcheck(/android/i)},
        isMobile: function(){return 'ontouchstart' in window || navigator.msMaxTouchPoints},
        isAndroid: function(a,e){return e&&_CHARWIN.utils.bcheck(/chrome\/[123456789]/i)&&!_CHARWIN.utils.bcheck(/chrome\/18/)?!1:a?(_CHARWIN.utils.isInt(a)&&!/\./.test(a)&&(a=""+a+"."),_CHARWIN.utils.bcheck(RegExp("Android\\s*"+a,"i"))):_CHARWIN.utils.bcheck(/Android/i)},
        isInt: function(a){return 0===parseFloat(a)%1},
        hexToRgba: function(a,c){let b="rgb",e=[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)];void 0!==c&&100!==c&&(b+="a",e.push(c/100));return b+"("+e.join(",")+")"},
        hasClass: function(oEl, sClass){
            let classIncluded = false;
            if(oEl){
                let sClassName = oEl.getAttribute("class");				
                if(sClassName && sClassName!=""){
                    sClassName = " " + sClassName + " ";
                    if(sClassName.indexOf(" " + sClass + " ") > -1){					
                        classIncluded = true;
                    }
                }	
            }
            return classIncluded;
        },
        addClass: function(oEl, sClass){
               if(oEl){
                   let sClassName = oEl.getAttribute("class");				
                   if(sClassName && sClassName!=""){
                       sClassName = " " + sClassName + " ";
                       if(sClassName.indexOf(" " + sClass + " ")==-1){					
                           sClassName += sClass;
                           if(sClassName.substring(0,1)==" ") sClassName = sClassName.substring(1);	
                           oEl.setAttribute("class",sClassName);
                       }
                   } else {
                       sClassName = sClass;
                       oEl.setAttribute("class",sClassName);
                   }		
               }
           },
           removeClass: function(oEl, sClass){
               if(oEl){
                   let sClassName = oEl.getAttribute("class");
                   let aNewClass = [];
                   if(sClassName && sClassName!=""){
                       let aClasses = sClassName.split(' ');	
                       for(let iC = 0, iCE = aClasses.length; iC<iCE;iC++){
                           if(aClasses[iC]!=sClass){
                               aNewClass.push(aClasses[iC]);
                           }
                       }
                       let sNewClass = aNewClass.join(' ');
                       oEl.setAttribute("class",sNewClass);					
                   }
               }
           },		   
        addDays: function(date, days) {
            let result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        },
           minutesToDuration: function(minutes){
            let intMins = parseInt(minutes,10);
            let oneHour = 60;
            let oneDay = (oneHour*24);
            
            let days = 0;
            let hours = 0;
            let mins = 0;
            
            if(intMins>=oneDay) days = parseInt((intMins/oneDay),10);
            let justDays = (days*oneDay);
            if((intMins-justDays) > 0) intMins = (intMins-justDays);
            
            if(intMins>=oneHour) hours = parseInt((intMins/oneHour),10);
            let justHours = (hours*oneHour);
            if((intMins-justHours) > 0) mins = (intMins-justHours);
            
            let duration = {};
            duration.days = days;
            duration.hours = hours;
            duration.mins = mins;
            return duration;
        },
        slugify: function(text, preserveSlash){
            text = text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
            
            if(!preserveSlash){
                text = text.replace(/[^\w\-]+/g, ''); // Remove all non-word chars
            }

            return text;
        },
        cleanText: function(text){
            let txt = document.createElement("textarea");
            txt.innerHTML = text;
            return txt.value;
        },
        safeText: function(inText){
            inText = inText || "";
            let outText = _CHARWIN.utils.cleanQuotes(inText);
            outText = _CHARWIN.utils.cleanUTF(outText);
            return outText;
        },
        cleanQuotes: function(badQuotes){
            let goodQuotes = badQuotes
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201C\u201D]/g, '"')
            .replace(/[\u2014]/g, '-');
            return goodQuotes;
        },
        cleanUTF: function(input){
            let output = "";
            for (let i=0; i<input.length; i++) {
                if (input.charCodeAt(i) <= 127) {
                    output += input.charAt(i);
                }
            }
            return output;
        },
        isExistingValue: function(existingValues,checkValue){
            let exists = false;
            for(let e=0,ee=existingValues.length;e<ee;e++){
                if(existingValues[e] == checkValue) exists = true;
            }
            return exists;
        },
        makeId: function(len, prefix){
            let sID = "";
            let iLen = (len?len:5);
            let sPoss = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let iPosLen = sPoss.length;
            for( let i=0; i < iLen; i++ ){
                sID += sPoss.charAt(Math.floor(Math.random() * iPosLen));
            }
            return (prefix?prefix:'')+sID;
        },
        insertAfter: function(newNode, referenceNode){
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        },
        forEach: function(objectArray, callback, parentObj){
            if(typeof(objectArray) === "string"){
                let selector = objectArray;
                objectArray = (parentObj?parentObj:document).querySelectorAll(selector);
            }
            if(objectArray.keys){
                // array
                for(let s=0,sl=objectArray.length;s<sl;s++){
                    callback(s,objectArray[s]);
                }
            } else {
                // object
                for(let key in objectArray){
                    callback(key,objectArray[key]);
                }
            }
        },
        clone: function(objectArray){
            if(objectArray){
                return JSON.parse(JSON.stringify(objectArray));
            } else {
                return {};
            }
        },		
        getURL: function(sURL, callback, synchronous, customHeaders){
            let xmlHTTP;

            if(_CHARWIN.utils.checkXDomain(sURL) && window.XDomainRequest) {
                // IE8 / 9
                xmlHTTP = new window.XDomainRequest();
                xmlHTTP.ontimeout = xmlHTTP.onprogress = function(){};
                xmlHTTP.timeout = 5000;
                try{
                    xmlHTTP.open("GET",sURL,!synchronous);
                    for(let hdr in customHeaders){
                        xmlHTTP.setRequestHeader(hdr,customHeaders[hdr]);
                    }
                    xmlHTTP.onload=function(){
                        callback(sURL,xmlHTTP.status,xmlHTTP.responseText);
                    };
                    xmlHTTP.send(null);
                } catch (e) {
                    _CHARWIN.utils.log('Oops! XDomainRequest: ' + e + ': ' + sURL);
                }
            } else{
                if (window.XMLHttpRequest){ 		
                    xmlHTTP=new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP");
                }
                try{
                    if(xmlHTTP.overrideMimeType) xmlHTTP.overrideMimeType("text/plain");
                    xmlHTTP.open("GET",sURL,!synchronous);
                    for(let hdr in customHeaders){
                        xmlHTTP.setRequestHeader(hdr,customHeaders[hdr]);
                    }
                    xmlHTTP.onreadystatechange=function(){	
                        if(xmlHTTP.readyState===4){
                            if(xmlHTTP.status==200){	
                                callback(sURL,xmlHTTP.status,xmlHTTP.responseText);
                            } else {
                                callback(sURL,xmlHTTP.status,xmlHTTP.responseText);
                                _CHARWIN.utils.log('Oops! XMLHttpRequest: ' + xmlHTTP.status);	
                            }
                        }
                    };
                    xmlHTTP.send(null);
                } catch (e) {
                    _CHARWIN.utils.log('Oops! XMLHttpRequest: ' + e + ': ' + sURL);
                }
            }
        },
        postURL: function(sURL, callback, synchronous, customHeaders, postData){
            let xmlHTTP;

            if(_CHARWIN.utils.checkXDomain(sURL) && window.XDomainRequest) {
                // IE8 / 9
                xmlHTTP = new window.XDomainRequest();
                xmlHTTP.ontimeout = xmlHTTP.onprogress = function(){};
                xmlHTTP.timeout = 5000;
                try{
                    xmlHTTP.open("POST",sURL,!synchronous);
                    for(let hdr in customHeaders){
                        xmlHTTP.setRequestHeader(hdr,customHeaders[hdr]);
                    }
                    xmlHTTP.onload=function(){
                        callback(sURL,xmlHTTP.status,xmlHTTP.responseText);
                    };
                    xmlHTTP.send(null);
                } catch (e) {
                    _CHARWIN.utils.log('Oops! XDomainRequest: ' + e + ': ' + sURL);
                }
            } else{
                if (window.XMLHttpRequest){ 		
                    xmlHTTP=new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP");
                }
                try{
                    //if(xmlHTTP.overrideMimeType) xmlHTTP.overrideMimeType("text/plain");				
                    xmlHTTP.open("POST",sURL,!synchronous);
                    for(let hdr in customHeaders){
                        xmlHTTP.setRequestHeader(hdr,customHeaders[hdr]);
                    }
                    xmlHTTP.onreadystatechange=function(){	
                        if(xmlHTTP.readyState===4){								
                            callback(sURL,xmlHTTP.status,xmlHTTP.responseText);
                            if(xmlHTTP.status!=200&&xmlHTTP.status!=204){
                                _CHARWIN.utils.log('Oops! XMLHttpRequest: ' + xmlHTTP.status);								
                            }
                        }
                    };
                    xmlHTTP.send(postData);
                } catch (e) {
                    _CHARWIN.utils.log('Oops! XMLHttpRequest: ' + e + ': ' + sURL);
                }
            }
        },
        checkXDomain: function(path) {
             return (path && path.indexOf('://') >= 0) && (path.split('/')[2] != self.location.href.split('/')[2]);
        },	
        numberFormatter: function(value){
            let numberFormatter = Intl.NumberFormat('en-US');
            let formatted = numberFormatter.format(value);

            return formatted;
        },
        capitalizeWords: function(arr){
            return arr.map(element => {
                return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
              });
        },
        properCase: function(text){
            let firstChar = text.substring(0,1);
            firstChar = firstChar.toUpperCase();
            return firstChar+text.substring(1);
        },
        sortArr: function(arr, order, label){
            console.log(arr, order);
            return arr.sort((a, b) => order.indexOf(a[label]) - order.indexOf(b[label]));
        },
        objIsEmpty: function(obj){
            return Object.keys(obj).length === 0;
        },
        numberInputFormatter: function(input){
            input.addEventListener('input', event => {
                event.preventDefault();
          
                // allow only digits and dots
                let text = event.target.value.replace(/[^\d\.]/gi, '');
              
                // check if last character is a dot
                let lastCharIsAdot = text.substr(text.length - 1, 1) === ".";
              
                // try to check if input text is a valid number
                if (isNaN(text)) {
                    // if not, then give feedback to the user
                    /*
                    event.target.classList.remove('valid');
                    event.target.classList.add('invalid');
                    */
              
                } else {
                    // if yes, then give positive feedback
                    /*
                    event.target.classList.remove('invalid');
                    event.target.classList.add('valid');
                    */
                    // format number
                    event.target.value = Number(text).toLocaleString("en-US");
                    // this will remove the dot if it is the last thing input
                    // therefor, we need to put it back
              
                    if (lastCharIsAdot) event.target.value += ".";
                }
            })
        }
    },
    refs:{},
    context: {},
    funcs:{
        init: function(){

            console.log('JS Working');

            //_CORE.funcs.buildElementReferences();    

            _CORE.funcs.buildDotNavigation();

            window.addEventListener('scroll', _CORE.funcs.sectionScrollHandler);

            _CORE.funcs.buildLogoAnimations();

            _CORE.funcs.buildSkillsAnimations();

            _CORE.funcs.buildHeaderAnimations();

            //_CORE.funcs.buildMouseAnimations();

        },
        buildElementReferences: function(type){

            _CORE.utils.forEach('[data-field]', function(index, field){
                let fieldType = field.getAttribute('data-field');
                
                _CORE.refs[fieldType] = field;
            });		

        },
        buildDotNavigation: function(){
            let dotNavText = document.getElementById('dot_nav_section');

            let dotLinks =  document.querySelectorAll('.dot-link');

            _CORE.utils.forEach(dotLinks, function(index, link){

                let sectionName = link.getAttribute('data-nav-dot');

                link.addEventListener('click', function(){

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = sectionName;
                    let targetName = sectionName.toLowerCase();
                    let targetId = '#' + targetId + '_section';
                    dotNavText.href = targetId;
                    link.classList.add('active');
                    _CORE.cache.currentSection = sectionName;

                });
                
                link.addEventListener('mouseover', function(){
                    dotNavText.textContent = sectionName; 
                });

                link.addEventListener('mouseout', function(){
                    dotNavText.textContent = _CORE.cache.currentSection;
                });
                
            });
            
        },
        sectionScrollHandler: function(){

            let container = document.getElementById('main_container');

            let introSection = document.querySelector('.intro-container');
            let aboutSection = document.querySelector('.about-container');
            let skillsSection = document.querySelector('.skills-container');
            let projectsSection = document.querySelector('.projects-container');
            let contactSection = document.querySelector('.contact-container');
        
            let pos_section = window.pageYOffset;
            //console.log(window.pageYOffset);

            let pos_A = introSection.offsetTop + introSection.offsetHeight - 5;
            let pos_B = aboutSection.offsetTop + aboutSection.offsetHeight - 5;
            let pos_C = skillsSection.offsetTop + skillsSection.offsetHeight - 5;
            let pos_D = projectsSection.offsetTop + projectsSection.offsetHeight - 5;
            let pos_E = contactSection.offsetTop + contactSection.offsetHeight - 5;

           // console.log(pos_A, pos_B, pos_C, pos_D, pos_E)
            
            let distance_A = pos_A - pos_section;
            let distance_B = pos_B - pos_section;
            let distance_C = pos_C - pos_section;
            let distance_D = pos_D - pos_section;
            let distance_E = pos_E - pos_section;
            
            let min = Math.min(...[distance_A, distance_B, distance_C, distance_D, distance_E].filter(num => num > 0));

            //console.log(min, distance_A, distance_B, distance_C, distance_D, distance_E)

            let dotLinks =  document.querySelectorAll('.dot-link');
            let dotNavText = document.getElementById('dot_nav_section');
        
            if(min === distance_A){

                if(_CORE.cache.currentSection === 'Intro'){
                } else {

                    _CORE.cache.currentSection = 'Intro';
                    //console.log('intro');

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = 'Intro';
                    dotNavText.href = '#intro_section';
                    dotLinks[0].classList.add('active');

                }
            }

            if(min === distance_B){

                if(_CORE.cache.currentSection === 'About'){
                } else {

                    _CORE.cache.currentSection = 'About';
                    //console.log('about');

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = 'About';
                    dotNavText.href = '#about_section';
                    dotLinks[1].classList.add('active');
                }

            } 

            if(min === distance_C){

                if(_CORE.cache.currentSection === 'Skils'){ 
                } else {

                    _CORE.cache.currentSection = 'Skills';
                    //console.log('skills');

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = 'Skills';
                    dotNavText.href = '#skills_section';
                    dotLinks[2].classList.add('active');

                }

            } 

            if(min === distance_D){
                if(_CORE.cache.currentSection === 'Projects'){
                    
                } else {
                    _CORE.cache.currentSection = 'Projects';
                    //console.log('projects');

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = 'Projects';
                    dotNavText.href = '#projects_section';
                    dotLinks[3].classList.add('active');
                }
            } 

            if(min === distance_E){
                if(_CORE.cache.currentSection === 'Contact'){
                    
                } else {
                    _CORE.cache.currentSection = 'Contact';
                    //console.log('contact');

                    _CORE.funcs.clearActiveDots();
                    dotNavText.textContent = 'Contact';
                    dotNavText.href = '#contact_section';
                    dotLinks[4].classList.add('active');
                }

            } 
        },
        clearActiveDots: function(){

            let dotLinks =  document.querySelectorAll('.dot-link');

            _CORE.utils.forEach(dotLinks, function(index, link){

                link.classList.remove('active');

            });

        },
        buildLogoAnimations: function(){

            // Init
            let container = document.querySelector(".logo");
            let inner = container.querySelector("div");
            
            // Mouse
            let mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function(event) {
                let e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function(e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                },
                show: function() {
                return "(" + this.x + ", " + this.y + ")";
                }
            };
            
            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);
            
            //-----------------------------------------
            
            let counter = 0;
            let updateRate = 10;
            let isTimeToUpdate = function() {
                return counter++ % updateRate === 0;
            };
            
            //-----------------------------------------
            
            let onMouseEnterHandler = function(event) {
                update(event);
            };
            
            let onMouseLeaveHandler = function() {
                inner.style = "";
            };
            
            let onMouseMoveHandler = function(event) {
                if (isTimeToUpdate()) {
                update(event);
                }
            };
            
            //-----------------------------------------
            
            let update = function(event) {
                mouse.updatePosition(event);
                updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            };
            
            let updateTransformStyle = function(x, y) {
                let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTransform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };
            
            //-----------------------------------------
            
            container.onmouseenter = onMouseEnterHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmousemove = onMouseMoveHandler;

        },
        buildSkillsAnimations: function(){

            let util = UIkit.util;
            let skills = util.$('#skill_animation_trigger');

            UIkit.scrollspy(skills, { repeat: true });
            
            util.on(skills,'inview', function(){
                
                _CORE.utils.forEach('[data-skill-level]', function(index, skill){

                    let skillLvl = skill.getAttribute('data-skill-level');
                    skill.style.width = skillLvl;

                });

            });
            util.on(skills,'outview', function(){

                _CORE.utils.forEach('[data-skill-level]', function(index, skill){
                    skill.style.width = '0%';
                });

            });

        },
        buildMouseAnimations: function(){
            // dots is an array of Dot objects,
            // mouse is an object used to track the X and Y position
            // of the mouse, set with a mousemove event listener below
            let dots = [],
            mouse = {
                x: 0,
                y: 0
            };

            // The Dot object used to scaffold the dots
            let Dot = function() {
            this.x = 0;
            this.y = 0;
            this.node = (function(){
            let n = document.createElement("div");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
            }());
            };
            // The Dot.prototype.draw() method sets the position of 
            // the object's <div> node
            Dot.prototype.draw = function() {
            this.node.style.left = this.x + "px";
            this.node.style.top = this.y + "px";
            };

            // Creates the Dot objects, populates the dots array
            for (let i = 0; i < 12; i++) {
            let d = new Dot();
            dots.push(d);
            }

            // This is the screen redraw function
            function draw() {
            // Make sure the mouse position is set everytime
            // draw() is called.
            let x = mouse.x,
                y = mouse.y;
            
            // This loop is where all the 90s magic happens
            dots.forEach(function(dot, index, dots) {
            let nextDot = dots[index + 1] || dots[0];
            
            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .6;
            y += (nextDot.y - dot.y) * .6;

            });
            }

            addEventListener("mousemove", function(event) {
            //event.preventDefault();
            mouse.x = event.pageX;
            mouse.y = event.pageY;
            });

            // animate() calls draw() then recursively calls itself
            // everytime the screen repaints via requestAnimationFrame().
            function animate() {
            draw();
            requestAnimationFrame(animate);
            }

            // And get it started by calling animate().
            animate();

        },
        buildHeaderAnimations: function(){
            let jellowHeaderMain = document.querySelector('h1').querySelectorAll('span');

            _CORE.utils.forEach(jellowHeaderMain, function(index, letter){

                letter.addEventListener('animationend', function(e){
                    letter.classList.remove('jello-vertical');
                });

                
                letter.addEventListener('mouseover', function(e){
                    letter.classList.add('jello-vertical');
                });
                
            });

            let jelloHeaders = document.querySelectorAll('h2');

            _CORE.utils.forEach(jelloHeaders, function(index, header){

                let jelloLetters =  header.querySelectorAll('span');


                _CORE.utils.forEach(jelloLetters, function(index, letter){

                    letter.addEventListener('animationend', function(e){
                        letter.classList.remove('jello-vertical');
                    });

                    
                    letter.addEventListener('mouseover', function(e){
                        letter.classList.add('jello-vertical');
                    });

                });

            });

        }
    }
};

document.addEventListener('DOMContentLoaded', function(){
    _CORE.funcs.init();
});
