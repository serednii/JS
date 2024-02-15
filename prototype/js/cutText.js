

// console.log('kjsfshkfj')

const block = document.querySelector('.block');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const originalText = text.innerHTML;



function cutText(blockText, elementText, btn) {
    const arrayWord = elementText.innerText.split(' ')
    const arrayWordLength = arrayWord.length
    console.log(arrayWordLength)

    text.innerHTML = arrayWord[0]
    const heightOneLine = heightHiddenText() * 3
    console.log(heightOneLine)
    //1-18.4
    //2-36.8
    //3-55.2
    //4-73.6

    text.innerHTML = originalText
    console.log(heightHiddenText())

    if (heightHiddenText() === heightOneLine) {
        console.log('ok')
    } else {
        console.log('cut')
        searchVariant(arrayWord, arrayWordLength / 2, arrayWordLength - 1, heightOneLine)
    }

}

function searchVariant(arrayWord, numberWord, arrayWordLength, heightOneLine) {

    text.innerHTML = arrayWord.slice(0, parseInt(numberWord)).join(' ') + '... <button class="btn">Read More</button>';
    text.innerText = arrayWord.slice(0, parseInt(numberWord)).join(' ') + '... Read More';
    // debugger
    const h = heightHiddenText()
    console.log(h);
    console.log(heightOneLine);
    if (h + 2 > heightOneLine && h - 2 < heightOneLine) {
        return;
    } else {
        let x = null;
        if (h > heightOneLine) {
            x = parseInt((arrayWordLength - numberWord) / 2);
            console.log('hight ' + x);
        } else {
            x = parseInt(numberWord / 2);
            console.log('low ' + x);
        }
        if (numberWord === x) return;
        searchVariant(arrayWord, x, arrayWordLength, heightOneLine)
    }
}

function heightHiddenText() {
    const text = document.querySelector('.text');
    return parseFloat(getComputedStyle(text).height);
}
cutText(block, text, btn)




