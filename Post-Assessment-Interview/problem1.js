
// Problem-1

// Create a function that processes a list of words and performs the following tasks:

// Convert all words to lowercase.

// Filter out words containing less than 4 characters.

// Remove any words that contain the letter 'z'.

// Return the remaining words sorted in alphabetical order.

// Your function should return:

// The final sorted list of words.


let wordsList = ["Apple", "Banana", "Orange", "Zebra", "Kiwi", "Grapes"];

function processWords(wordsList){
    let lowerCaseWords = []
    for (let i = 0; i < wordsList.length; i++){
        lowerCaseWords.push(wordsList[i].toLowerCase())
    }
    let filterWords = []
    for (let i = 0; i < lowerCaseWords.length; i++){
        if (lowerCaseWords[i].length > 4 && !lowerCaseWords[i].includes("z")){
            filterWords.push(lowerCaseWords[i])
        }
    }
    let sortedWods = []
    for(let i = 0; i<filterWords.length; i++){
        for(let j = i+1; j<filterWords.length; j++){
            if(filterWords[i] > filterWords[j]){
                let temp = filterWords[i]
                filterWords[i] = filterWords[j]
                filterWords[j] = temp
            }


        }
        sortedWods.push(filterWords[i])

    }
    console.log(sortedWods) 
}
processWords(wordsList)