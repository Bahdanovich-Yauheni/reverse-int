module.exports = function reverse(n) {
    let str = String(n);
    n_new = '';
    if(str[0] == '-'){
        let str_new = '';
        for(let i = 1; i < str.length; i++){
            str_new = str_new + str[i];
            }
        str = str_new;
    }
    
    for (let i = str.length-1; i > -1; i--){
        n_new = n_new + str[i];
    }

    n_new = Number(n_new);
    return(n_new);
}






