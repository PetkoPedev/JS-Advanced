function solve(n,k){
    let arr = [1];
    for(let i=1; i< n; i++){
        let sum = 0;
        for(let j=i-1; j>=0 && j>= i-k; j--){
            sum +=arr[j];
        }
        arr[i] = sum;
    }
    return arr;
}

console.log(solve(6, 3));