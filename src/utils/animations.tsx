
export const addJelloAnimation = () => {

    const handleAnimationEnd = (e: AnimationEvent) => {
        const letter = e.target as HTMLElement;
        letter.classList.remove('jello-vertical');
        console.log(letter)
    };

    const handleMouseOver = (e: MouseEvent) => {
        const letter = e.target as HTMLElement;
        console.log(letter)
        letter.classList.add('jello-vertical');
    };

    const jelloHeaderMain = document.querySelector('h1')?.querySelectorAll('span');
    if(jelloHeaderMain){
        jelloHeaderMain.forEach(letter => {
            letter.addEventListener('animationend', handleAnimationEnd);
            letter.addEventListener('mouseover', handleMouseOver);
        });
    }

    const jelloHeaders = document.querySelectorAll('h2');
    jelloHeaders.forEach(header => {
        const jelloLetters = header.querySelectorAll('span');

        jelloLetters.forEach(letter => {
            letter.addEventListener('animationend', handleAnimationEnd);
            letter.addEventListener('mouseover', handleMouseOver);
        });
    });

    const jelloHeadersOther = document.querySelectorAll('h3');
    jelloHeadersOther.forEach(header => {
        const jelloLetters = header.querySelectorAll('span');

        jelloLetters.forEach(letter => {
            letter.addEventListener('animationend', handleAnimationEnd);
            letter.addEventListener('mouseover', handleMouseOver);
        });
    });

    return () => {

        if (jelloHeaderMain) {
            jelloHeaderMain.forEach(letter => {
                letter.removeEventListener('animationend', handleAnimationEnd);
                letter.removeEventListener('mouseover', handleMouseOver);
            });
        }

        jelloHeaders.forEach(header => {
            const jelloLetters = header.querySelectorAll('span');

            jelloLetters.forEach(letter => {
                letter.removeEventListener('animationend', handleAnimationEnd);
                letter.removeEventListener('mouseover', handleMouseOver);
            });
        });

        jelloHeadersOther.forEach(header => {
            const jelloLetters = header.querySelectorAll('span');

            jelloLetters.forEach(letter => {
                letter.removeEventListener('animationend', handleAnimationEnd);
                letter.removeEventListener('mouseover', handleMouseOver);
            });
        });
    };
};

