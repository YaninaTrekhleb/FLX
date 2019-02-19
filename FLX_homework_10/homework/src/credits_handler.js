function formatDatedTimeValue(number) {
    const oneDigitNumberLimit = 10;
    if (number < oneDigitNumberLimit) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
}

function UserCardTransaction(operationType, amount) {
    this.operationType = operationType;
    this.amount = amount;

    const now = new Date();
    const day = formatDatedTimeValue(now.getDate());
    const month = formatDatedTimeValue(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = formatDatedTimeValue(now.getHours());
    const minutes = formatDatedTimeValue(now.getMinutes());
    const seconds = formatDatedTimeValue(now.getSeconds());

    this.operationTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

function userCard(index) {
    let cardBalance = 100;
    let transactionLimit = 100;
    const taxRate = 0.005; // Tax rate.

    const historyLogs = [];

    return {
        getCardOptions: () => {
            return {
                balance: cardBalance,
                transactionLimit: transactionLimit,
                historyLogs: historyLogs,
                key: index
            };
        },
        putCredits: (amount) => {
            cardBalance = amount + cardBalance;
            historyLogs.push(new UserCardTransaction('Recieved credits', amount));
        },
        takeCredits: (amount) => {
            if (cardBalance >= amount && transactionLimit >= amount) {
                cardBalance = cardBalance - amount;
                historyLogs.push(new UserCardTransaction('Withdrawal of credits', amount));
            } else {
                console.log('You don\'t have enough money or credit limit is exceeded.');
            }
        },
        setTransactionLimit: (amount) => {
            transactionLimit = amount;
            historyLogs.push(new UserCardTransaction('Transaction limit change', amount));
        },
        transferCredits: (amount, recepientCard) => {
            const transferAmount = amount + taxRate * amount;
            if (cardBalance >= transferAmount && transactionLimit >= transferAmount) {
                cardBalance = cardBalance - transferAmount;
                recepientCard.putCredits(amount);
                historyLogs.push(new UserCardTransaction('Withdrawal of credits', transferAmount));
            } else {
                console.log('You don\'t have enough money or credit limit is exceeded.');
            }
        }
    };
}

class UserAccount {
    constructor(name) {
      this.name = name;
      this.cards = [];
    }

    addCard() {
        const maxNumberOfCards = 3;
        const newCardIndex = this.cards.length + 1;
        if (newCardIndex <= maxNumberOfCards) {
            const newCard = userCard(newCardIndex);
            this.cards.push(newCard);
        } else {
            console.log('You can not have more than 3 cards');
        }
    }

    getCardByKey(cardKey) {
        const cardIndex = cardKey - 1;
        return this.cards[cardIndex];
    }
  }

