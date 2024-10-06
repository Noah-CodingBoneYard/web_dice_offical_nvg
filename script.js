/*function rollDice() {
    for (let i = 1; i <= 5; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`dice${i}`).value = diceValue;
    }
    document.getElementById('rollButton').focus();
}*/

async function rollDice() {
    try {
        const response = await fetch('https://web-dice-roller-nodejs-nvg-g7fefwetc3dqg5ap.centralus-01.azurewebsites.net/d6');
        const data = await response.json();
        for (let i = 1; i <= 5; i++) {
            const dice = document.getElementById(`dice${i}`);
            dice.value = data.dice[i - 1];
        }
    } catch (error) {
        console.error('Error:', error);
    }
}