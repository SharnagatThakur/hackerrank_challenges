function action(e) {
    let btn = e.target || e.srcElement;
    let btnLabel = document.getElementById(btn.id).innerHTML;
    let res = document.getElementById("res");
    
    switch(btnLabel) {
        case "0":
        case "1":
        case "+":
        case "-":
        case "*":
        case "/":
            res.innerHTML += btnLabel;
            break;
        case "C":
            res.innerHTML = "";
            break;
        case "=":
            let exp = res.innerHTML;
            let nums = /(\d+)/g;
            exp = exp.replace(nums, function(match) {
                return parseInt(match, 2);
            });
            res.innerHTML = Math.floor(eval(exp)).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }
}  

let buttons = document.getElementsByTagName("button");
for(let button of buttons) {
    button.onclick = action;
}
