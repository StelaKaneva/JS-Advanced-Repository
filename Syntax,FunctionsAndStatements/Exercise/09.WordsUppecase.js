function wordsUppercase(text){
    let words = text.split(/\W+/g);
    let formattedWords = [];

    for (const word of words) {
        if(word !== ''){
            formattedWords.push(word.toUpperCase());
        }
    }

    return formattedWords.join(", ");
    //return text.match(/\w+/g).join(", ").toLocaleUpperCase();
}

console.log(wordsUppercase('Hi, how are you?'));