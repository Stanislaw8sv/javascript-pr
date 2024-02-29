function isGreaterThan18(number) {
    number = prompt('Прив, число введи:')
    if (number > 18) {
        return alert(true)
    }
    else {
        return alert(false)
    }
}

function isEven(number) {
    number = prompt('Прив, число сюда')
    if (number % 2 == 0) {
        return alert(true)
    }
    else {
        return alert(false)
    }
}

function reverseString(str) {
    str = prompt('Введите слово')
    let reversed = str.split('').reverse().join('')
    return alert(reversed)
}

function isPalindrome(str) {
    str = prompt('Введите слово')
    str = str.toLowerCase()
    return alert(str == str.split('').reverse().join(''));
}

function sumFirstAndLastDigit(num) {
    num = prompt('Введите число');
    let str = String(num);
    let first = parseInt(str[0]);
    let last = parseInt(str[str.length - 1]);
    return alert(first + last);
}

function SumLessThanTen(array) {
    let sum = 0;
    for (let i of array) {
        if (i > 0 && i < 10) {
            sum += i;
        }
    }
    return alert(sum);
}

function getUniqueNumbers(array) {
    let unique = [];
    for (let i of array) {
        if (!unique.includes(i)) {
            unique.push(i);
        }
    }
    return alert(unique);
}

function countVowels(str) {
    str = prompt('Введите текст')
    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let vowelCount = 0;
    const chars = str.toLowerCase().split('');
    for (let i of chars) {
        if (vowels.includes(i)) {
            vowelCount++;
        }
    }
    return alert(vowelCount);
}

function sortArray(array) {
    array.sort();
    return alert(array)
}

function getSchedule() {
    let groupIndex = prompt();

    fetch('https://api.rcenext.ru/schedule')
        .then(response => response.json())
        .then(result => {
            const data = result.data;
            console.log(`Расписание для группы ${data[groupIndex].group}:`);
            data[groupIndex].subjects.forEach((item, index) => {
                if (item.title) {
                    console.log(`№${index}: ${item.title}, Кабинет: ${item.cabinet}`);
                }
            });
        });
}