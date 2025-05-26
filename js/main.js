document.addEventListener('DOMContentLoaded', () => {
    const openbtn = document.getElementById('instruction');
    const instrution = document.getElementById('instructionbox');
    const closebtn = document.getElementById('closeBtn');

    openbtn.addEventListener('click', () => {
        instrution.classList.remove('hidden');
    });

    closebtn.addEventListener('click', () => {
        instrution.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const usernameinput = document.getElementById('username');
    const levelSelect = document.getElementById('level');
    const btnstart = document.getElementById('btnstart');
    const countdown = document.getElementById('countdownstart');
    const contentgame = document.getElementById('contentgame');

    function validate() {
        const username = usernameinput.value.trim();
        const level = levelSelect.value;

        const isValid = username !== '' && level !== '';
        btnstart.disabled = !isValid;
    };

    usernameinput.addEventListener('input', validate);
    levelSelect.addEventListener('change', validate);

    btnstart.addEventListener('click', () => {
        localStorage.setItem('username', usernameinput.value.trim());
        contentgame.classList.remove('hidden');
        document.getElementById('welcome-page').classList.add('hidden');

        const countdown = () => {
            let count = 3;
            while (count > 0) {
                setInterval(countdown(count), 1000);
            count--;
            }
        }
        
    });

    validate();
});


