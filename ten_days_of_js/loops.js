/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let i of s) {
        if (['a', 'e', 'i', 'o', 'u'].includes(i)) {
            console.log(i);
        }
    }
    for (let i of s) {
        if (!(['a', 'e', 'i', 'o', 'u'].includes(i))) {
            console.log(i);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
