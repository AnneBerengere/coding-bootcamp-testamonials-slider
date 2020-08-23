function displayCard (card, cards) {
    card.classList.remove('hidden');
    cards.forEach(function(c) {
       c.classList.add('hidden');
    });
}

function convertToArray (htmlCollection) {
    return Array.prototype.slice.call(htmlCollection);
}

(function () {
    var cards = document.getElementsByClassName('card');
    cards = convertToArray(cards);

    var currentCard = cards.shift();
    displayCard(currentCard, cards);

    var prevButtons = convertToArray(document.getElementsByClassName('icon_prev'));
    prevButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            cards.unshift(currentCard);
            currentCard = cards.pop();
            displayCard(currentCard, cards);
        });
    });

    var nextButtons = convertToArray(document.getElementsByClassName('icon_next'));
    nextButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            cards.push(currentCard);
            currentCard = cards.shift();
            displayCard(currentCard, cards);
        });
    });
})();