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

// document.addEventListener('DOMContentLoaded', () => {
//     const usernameinput = document.getElementById('username');
//     const levelSelect = document.getElementById('level');
//     const btnstart = document.getElementById('btnstart');
//     const countdown = document.getElementById('countdownstart');

//     function validate() {
//         const username = usernameinput.value.trim();
//         const level = levelSelect.value;

//         localStorage.getItem('username');

//         const isValid = !username && !level;
//         btnstart.disabled = !isValid;
//     };

//     usernameinput.addEventListener('input', validate);
//     levelSelect.addEventListener('change', validate);

//     btnstart.addEventListener('click', () => {
//         const username = usernameinput.value.trim();
//         const level = levelSelect.value;
        
//         const countdown = () => {
//             let count = 3;
//             while (count > 0) {
//                 setInterval(countdown(count), 1000);
//             count--;
//             }
//         }
        
//     });

//     validate();
// });

document.addEventListener('DOMContentLoaded', () => {
    const btnstart = document.getElementById('startbtn');
    const contentgame = document.getElementById('content-game');

    btnstart.addEventListener('W', () => {
        contentgame.classList.remove('hidden');
    });
})
