function runGame() {
    debugger;
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var display = document.getElementById('cards');

    function hit() {
        var card = (Math.round(Math.random() * cards.length));
        display.innerHTML = display.innerHTML + " " + cards[card];
        checkResult(false, true);
    }
    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {

        var newCards = display.innerHTML.split(' ');
        var cardValue = 0;
        var index = 0;

        newCards.forEach(function(card, index) {

            if (card === 'J' || card === 'Q' || card === 'K') {
                cardValue = cardValue + 10;
            } else if (card === "A") {
                var aceValue = Math.round(Math.random());
                if (aceValue === 0) {
                    cardValue = cardValue + 1;
                } else if (aceValue === 1) {
                    cardValue = cardValue + 11;
                }
            } else {
                card = Number(card);
                cardValue = cardValue + card;
            }
            cardValue = Number(cardValue);
        });

        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
            display.innerHTML = '';
            runGame();
        } else if (cardValue < 18 && standing) {
            alert('Push!');
            display.innerHTML = '';
            runGame();
        } else if (cardValue > 18 && standing || cardValue === 21) {
            alert('You win!');
            display.innerHTML = '';
            runGame();
        } else if (cardValue > 21) {
            alert('You Bust.');
            display.innerHTML = '';
            runGame();
        }
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });
    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    var card1 = Math.round(Math.random() * cards.length);
    display.innerHTML = cards[card1];
    var card2 = Math.round(Math.random() * cards.length);
    display.innerHTML = display.innerHTML + ' ' + cards[card2];

}

runGame();
