function capitalize(){
    const str = "siva";
    const modStr = str[0].toUpperCase() + str.slice(1);
    console.log(str); 
    console.log(modStr); 
}
capitalize()

function reverse(){
    const word = "Javascript";
    const rev = word.split('').reverse().join('');
    console.log(rev);
    
}
reverse();

function trimFn(){
    const sentence = ` Hello world!!! `;
    const result = sentence.trim();
    console.log(sentence);
    console.log(result);
}
trimFn()