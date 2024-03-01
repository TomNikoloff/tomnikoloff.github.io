
export const addJelloAnimation = () => {
    const handleAnimationEnd = (letter: HTMLElement) => {
        letter.classList.remove('jello-vertical');
    };

    const handleMouseOver = (letter: HTMLElement) => {
        letter.classList.add('jello-vertical');
    };

    const jellowHeaderMain = document.querySelector('h1')?.querySelectorAll('span');
    if (jellowHeaderMain) {
        jellowHeaderMain.forEach((letter: HTMLElement) => {
        letter.addEventListener('animationend', () => handleAnimationEnd(letter));
        letter.addEventListener('mouseover', () => handleMouseOver(letter));
        });
    }

    const jelloHeaders = document.querySelectorAll('h2');
    jelloHeaders.forEach((header: HTMLElement) => {
            const jelloLetters = header.querySelectorAll('span');
            jelloLetters.forEach((letter: HTMLElement) => {
            letter.addEventListener('animationend', () => handleAnimationEnd(letter));
            letter.addEventListener('mouseover', () => handleMouseOver(letter));
            });
    });

  // Cleanup function
    return () => {
        if (jellowHeaderMain) {
            jellowHeaderMain.forEach((letter: HTMLElement) => {
                letter.removeEventListener('animationend', () => handleAnimationEnd(letter));
                letter.removeEventListener('mouseover', () => handleMouseOver(letter));
            });
        }

        jelloHeaders.forEach((header: HTMLElement) => {
        const jelloLetters = header.querySelectorAll('span');
            jelloLetters.forEach((letter: HTMLElement) => {
                letter.removeEventListener('animationend', () => handleAnimationEnd(letter));
                letter.removeEventListener('mouseover', () => handleMouseOver(letter));
            });
        });
    };
};

