// eslint-disable-next-line no-unused-vars
function findTypes() {
    const types = [];
    for (let argumentIndex = 0; argumentIndex < arguments.length; argumentIndex++) {
        types.push(typeof arguments[argumentIndex]);
    }  
    return types;
}

// eslint-disable-next-line no-unused-vars
function executeforEach(elements, transformerFunction) {
    for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        transformerFunction(elements[elementIndex]);
    }
}

// eslint-disable-next-line no-unused-vars
function mapArray(array, transformerFunction) {
    const transformedArray = [];
    executeforEach(array, (element) => {
        transformedArray.push(transformerFunction(element));
    });

    return transformedArray;
}

// eslint-disable-next-line no-unused-vars
function filterArray(array, filterFunction) {
    const filteredArray = [];
    executeforEach(array, (element) => {
        if (filterFunction(element)) {
            filteredArray.push(element);
        }
    });

    return filteredArray;
}

// eslint-disable-next-line no-unused-vars
function getAmountOfAdultPeople(people) {
    const validAge = 18;
    const adultPeople = filterArray(people, (person) => {
        return person.age > validAge;
    }); 
    
    return adultPeople.length;
}

// eslint-disable-next-line no-unused-vars
function getGreenAdultBananaLovers(people) {
    const validAge = 18;
    const favoriteFruit = 'banana';
    const eyeColor = 'green';

    const adultBananaLovers = filterArray(people, (person) => {
        if (
            person.age > validAge &&
            person.favoriteFruit === favoriteFruit &&
            person.eyeColor === eyeColor
        ) {
            return true;
        } else {
            return false;
        }
    });

    const adultBananaLoversNames = mapArray(adultBananaLovers, (person) => {
        return person.name;
    });

    return adultBananaLoversNames;
}

// eslint-disable-next-line no-unused-vars
function keys(inputObject) {
    const objectKeys = [];
    for (let propertyName in inputObject) {
        // This is to prevent 'guard-for-in' eslint error.
        if (Object.prototype.hasOwnProperty.call(inputObject, propertyName)) {
            objectKeys.push(propertyName);
        } 
    }
    return objectKeys;
}

// eslint-disable-next-line no-unused-vars
function values(inputObject) {
    const objectValues = [];
    for (let propertyName in inputObject) {
        // This is to prevent 'guard-for-in' eslint error.
        if (Object.prototype.hasOwnProperty.call(inputObject, propertyName)) {
            objectValues.push(inputObject[propertyName]);
        }
    }
    return objectValues;
}

// eslint-disable-next-line no-unused-vars
function showFormattedDate(date) {
    const monthNames = [
        'Jan', 
        'Feb', 
        'Mar', 
        'Apr', 
        'May', 
        'Jun',
        'Jul',
        'Aug', 
        'Sep', 
        'Oct', 
        'Nov',
        'Dec'
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `Date: ${day} of ${month}, ${year}`;
}

// eslint-disable-next-line no-unused-vars
function isEvenYear(date) {
    const year = date.getFullYear();

    return !(year % 2);
}

// eslint-disable-next-line no-unused-vars
function isEvenMonth(date) {
    const month = date.getMonth();
    
    return !((month + 1) % 2);
}
