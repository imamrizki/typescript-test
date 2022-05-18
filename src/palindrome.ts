function isPalindrome(params:string) {
    for (let index = 0; index < params.length / 2; index++) {
        var indexAwal = index;
        var indexAkhir = (params.length - index - 1);
        
        if (indexAwal === indexAkhir) {
            return true;
        }
        
    }

    return false;
}

console.log(isPalindrome("katak"));
