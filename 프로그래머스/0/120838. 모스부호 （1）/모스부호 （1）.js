function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    letter = letter.split(' ');
    console.log(Object.values(morse['-...']))
    
    return letter.map(i => {
        return Object.values(morse[i])
    }).join('')
}