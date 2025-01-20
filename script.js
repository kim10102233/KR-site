document.addEventListener('DOMContentLoaded', () => {
    const textArray = ['ㅇ', '오', '온', '오느', '오늘', '오늘ㄷ', '오늘도', '오늘도 ', '오늘도 ㅎ', 
        '오늘도 힘', '오늘도 힘ㄴ', '오늘도 힘ㄴ', '오늘도 힘내', '오늘도 힘냊', '오늘도 힘내자', '오늘도 힘내자.',
        '오늘도 힘내자..', '오늘도 힘내자..!', '오늘도 힘내자..! ', '오늘도 힘내자..! :', '오늘도 힘내자..! :3'];
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    let currentWordIndex = 0;
    let isDeleting = false;

    function Meow() {
        const currentWord = textArray[currentWordIndex];
        typingText.innerHTML = '';

        for (let i = 0; i < currentWord.length; i++) {
            const letter = document.createElement('span');
            letter.innerHTML = currentWord[i];

            const line = document.createElement('div');
            line.classList.add('typing-line');
            letter.appendChild(line);

            typingText.appendChild(letter);

            setTimeout(() => {
                letter.classList.add('typing-finished');
            }, 100 * i);

            setTimeout(() => {
                if (i === currentWord.length - 1) {
                    letter.classList.remove('typing-finished');
                }
            }, 100 * (i + 1));
        }

        cursor.classList.add('no-blink');

        setTimeout(() => {
            cursor.classList.remove('no-blink');
        }, 100 * currentWord.length);

        if (!isDeleting) {
            if (currentWordIndex < textArray.length - 1) {
                isDeleting = true;
                setTimeout(Meow, 100);
            }
        } else {
            currentWordIndex++;
            if (currentWordIndex === textArray.length) {
                currentWordIndex = 0;
            }
            isDeleting = false;
            setTimeout(Meow, 100);
        }
    }

    Meow();
});
