function sameNumbers(intNum){
    
    const strNum = intNum.toString();
    let sum = parseInt(strNum[0]);
    let isSame = true;

    for (let i = 1; i< strNum.length; i++){
        sum += parseInt(strNum[i]);

        if(strNum[i] != strNum[i-1]){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);