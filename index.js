//  SSD  ===  Sum square difference 
const SSD = (n) => {
    let count = 0;  // The sum of the squares
    let count2 = 0; // The square of the sum
    for (let i = 1; i <= n; i++) {
        count += i ** 2;
        count2 += i
    }
    count2 = count2 ** 2;
    console.log(count2 - count);
}

SSD(100)