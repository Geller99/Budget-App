
const never = [17, 28, 30]
const newAr = [99, 16, 8]

// iterate through arr1 and compare values to arr2


const compareTriplets = (arr1, arr2, index) => {
    let userScore1 = 0;
    let userScore2 = 0;

    for (index in arr1, arr2){
        arr1[index] > arr2[index] ? userScore1++
        : arr2[index] > arr1[index] ? userScore2++
        : console.log('done')
        

    }
    console.log(userScore1, userScore2)
}

compareTriplets(never, newAr)



