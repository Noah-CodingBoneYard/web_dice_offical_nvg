function rollDice() {
    for (let i = 1; i <= 5; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`dice${i}`).value = diceValue;
    }
    document.getElementById('rollButton').focus();
}
