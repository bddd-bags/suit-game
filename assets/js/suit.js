// Pilihan Random dari komputer
function getComp() {
    const num = Math.random() * 3;
    const number = Math.ceil(num);
    if (number === 1) {
        return 'batu';
    } else if (number === 2) {
        return 'kertas';
    } else {
        return 'gunting';
    }
};

// Hasil Pemenang
function getResults(player, comp) {
    if (player === 'batu' && comp === 'kertas') {
        return 'COM<br>WIN';
    } else if (player === 'batu' && comp === 'gunting') {
        return 'PLAYER<br>WIN';
    } else if (player === 'kertas' && comp === 'batu') {
        return 'PLAYER<br>WIN';
    } else if (player === 'kertas' && comp === 'gunting') {
        return 'COM<br>WIN';
    } else if (player === 'gunting' && comp === 'batu') {
        return 'COM<br>WIN';
    } else if (player === 'gunting' && comp === 'kertas') {
        return 'PLAYER<br>WIN';
    } else {
        return 'DRAW';
    };
};

// Ambil button player dan Akhiri game
const getPlayer = document.querySelectorAll('#player button');
let isGameOver = false;

// ambil pilihan player
getPlayer.forEach((result) => {
    result.addEventListener('click', () => {
        if (isGameOver) {
            return;
        };

        const playerChoice = result.id;
        const compChoice = getComp();
        const addNewResult = getResults(playerChoice, compChoice);

        const imgPlayer = document.getElementById(playerChoice);
        imgPlayer.setAttribute('class', 'p-4 me-2 btn-style-player');
        
        const imgComp = document.getElementById(`${compChoice}comp`);
        imgComp.setAttribute('class', 'p-4 btn-style-comp');

        const newResults = document.getElementById('info');
        if (addNewResult === 'DRAW') {
            newResults.setAttribute('class', 'h1-hasil h1-hasil-draw my-5 my-sm-0');
        } else {
            newResults.setAttribute('class', 'h1-hasil my-5 my-sm-0');
        };

        document.getElementById('info').innerHTML = addNewResult;

        console.log(playerChoice);
        console.log(compChoice);
        console.log(addNewResult);

        isGameOver = true;
    })
})