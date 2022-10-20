var checkIfPangram = function(sentence) {
    alpha="abcdefghijklmnopqrstuvwxyz".split("");
    for(let i=0; i < sentence.split("").length; i++){
        for(let j=0; j < alpha.length; j++){
            if(sentence.split("")[i]===alpha[j]){
                alpha.splice(j, 1);
            }
        }
    }
    if(alpha.length > 0) {
        return false;
    }
    return true;
};
