//
//
// Exemple de données (remplacez cela par vos propres scores)
//
//  Attractiveness (ATT) = Overall impression of the product. Do users like or dislike the product?
// Perspicuity (PER)     = Is it easy to get familiar with the product? Is it easy to learn how to use the product?
// Efficiency (EFF)      = Can users solve their tasks without unnecessary effort?
// Dependability (DEP)   = Does the user feel in control of the interaction?
// Stimulation (STI)     = Is it exciting and motivating to use the product?
// Novelty (NOV)         = Is the product innovative and creative? Does the product catch the interest of users ?
//
//
// Attractiveness (ATT)
// ATT1 =             annoying    enjoyable
// ATT2 =                 good    bad
// ATT3 =            unlikable    pleasing
// ATT4 =           unpleasant    pleasant
// ATT5 =           attractive    unattractive
// ATT6 =             friendly    unfriendly
// 
// Perspicuity (PER)
// PER1 =   not understandable    understandable
// PER2 =        easy to learn    difficult to learn
// PER3 =          complicated    easy
// PER4 =                clear    confusing
//
// Efficiency (EFF)
// EFF1 =                 fast    slow
// EFF2 =          inefficient    efficient
// EFF3 =          impractical    practical
// EFF4 =            organized    cluttered
//
// Dependability (DEP)
// DEP1 =        unpredictable    predictable
// DEP2 =          obstructive    supportive
// DEP3 =               secure    not secure
// DEP4 =   meets expectations    does not meet expectations
//
// Stimulation (STI)
// STI1 =             valuable    inferior
// STI2 =               boring    exciting
// STI3 =      not interesting    interesting
// STI4 =           motivating    demotivating
//
// Novelty (NOV)
// NOV1 =             creative    dull
// NOV2 =            inventive    conventional
// NOV3 =                usual    leading edge
// NOV4 =         conservative    innovative

const ueq = {
    scheme: ["ATT1", "PER1", "NOV1", "PER2", "STI1", "STI2", "STI3", "DEP1", "EFF1", "NOV2", "DEP2", "ATT2", "PER3", "ATT3", "NOV3", "ATT4", "DEP3", "STI4", "DEP4", "EFF2", "PER4", "EFF3", "EFF4", "ATT5", "ATT6", "NOV4"],
    current: ["NOV4", "ATT6", "ATT5", "EFF4", "EFF3", "PER4", "!EFF2", "DEP4", "STI4", "DEP3", "ATT4", "NOV3", "ATT3", "ATT2", "DEP2", "NOV2", "EFF1", "DEP1", "STI3", "STI2", "STI1", "PER2", "NOV1", "PER1", "ATT1"],
    definition: {
        categorie: {
            ATT: "Attractiveness",
            PER: "Perspicuity",
            EFF: "Efficiency",
            DEP: "Dependability",
            STI: "Stimulation",
            NOV: "Novelty"
        },
        questions: {
            ATT1: {
                positif: "annoying",
                negatif: "enjoyable",
                inverted: true
            },
            ATT2: {
                positif: "good",
                negatif: "bad",
                inverted: false
            },
            ATT3: {
                positif: "unlikable",
                negatif: "pleasing",
                inverted: true
            },
            ATT4: {
                positif: "unpleasant",
                negatif: "pleasant",
                inverted: true
            },
            ATT5: {
                positif: "attractive",
                negatif: "unattractive",
                inverted: false
            },
            ATT6: {
                positif: "friendly",
                negatif: "unfriendly",
                inverted: false
            },
            PER1: {
                positif: "not understandable",
                negatif: "understandable",
                inverted: true
            },
            PER2: {
                positif: "easy to learn",
                negatif: "difficult to learn",
                inverted: false

            },
            PER3: {
                positif: "complicated",
                negatif: "easy",
                inverted: true
            },
            PER4: {
                positif: "clear",
                negatif: "confusing",
                inverted: false
            },
            EFF1: {
                positif: "fast",
                negatif: "slow",
                inverted: false
            },
            EFF2: {
                positif: "inefficient",
                negatif: "efficient",
                inverted: true
            },
            EFF3: {
                positif: "impractical",
                negatif: "practical",
                inverted: true
            },
            EFF4: {
                positif: "organized",
                negatif: "cluttered",
                inverted: false
            },
            DEP1: {
                positif: "unpredictable",
                negatif: "predictable",
                inverted: true
            },
            DEP2: {
                positif: "obstructive",
                negatif: "supportive",
                inverted: true
            },
            DEP3: {
                positif: "secure",
                negatif: "not secure",
                inverted: false
            },
            DEP4: {
                positif: "meets expectations",
                negatif: "does not meet expectations",
                inverted: false
            },
            STI1: {
                positif: "valuable",
                negatif: "inferior",
                inverted: false
            },
            STI2: {
                positif: "boring",
                negatif: "exciting",
                inverted: true
            },
            STI3: {
                positif: "not interesting",
                negatif: "interesting",
                inverted: true
            },
            STI4: {
                positif: "motivating",
                negatif: "demotivating",
                inverted: false
            },
            NOV1: {
                positif: "creative",
                negatif: "dull",
                inverted: false
            },
            NOV2: {
                positif: "inventive",
                negatif: "conventional",
                inverted: false
            },
            NOV3: {
                positif: "usual",
                negatif: "leading edge",
                inverted: true
            },
            NOV4: {
                positif: "conservative",
                negatif: "innovative",
                inverted: true
            },
        }
    }
}

//
//
//  SCRIPT
//
//

const fs = require('fs');

const jsonPath = "./input/rawData.json"

const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Index when the questions started
const indexStart = 18


const answers = rawData.map(obj => {
    const values = Object.keys(obj)
        .filter((el, index) => filterAnswers(index, indexStart))
        .map(el => obj[el])
    const completed = values.includes(null)

    return { values: values, completed: !completed, userID: generateHash(obj.Username) }
})

// console.log(ueq.definition.questions)
// console.log(ueq.current.length)
// console.log(rawData)
//console.log(answers.filter(el => el.completed == true))

// ueq.allValues = answers

// console.log(ueq)

// console.log(ueq.allValues)

// ========================
//
// RESULT
//
// ========================

//
// For Each item you calculate the overall | the prag quality (PRAQ) | the hed quality (HEDQ)
// ATT1 = { overall, praq, hedq}
// 1,2,3,4,5,6,7

// negatif | plutot negatif | neutre | plutôt positif | positif
// very bad | bad | neutral | good | very good 
// NOV4 = [vb,b,n,g,vg]
//  
//  Pour chaque USERS j'ai chaques REPONSES
//  J'ai ueq.value -> [[allvalues.values[]],[allvalues.values[]],...]
//  [[1,3,4],[2,3,5],[1,7,2]]
//  {question1: 1,33, question2: 4,33, question3:3,66}
//
// Pour chaques CATEGORIE, je veux la moyenne des REPONSES
// /[{name:"NOV4", values:[7,4,5,2,1,5,6]},{...}]


const result = ueq.current.map((item, index) => {

    // Store answer for each questions
    const questions = answers.map(el => el.values[index])
    // console.log(questions)
    // console.log(answers[index])
    // console.log(questions)
    const answered = questions.filter(el => el != null)
        .length

    // get questions categorie
    const catReg = new RegExp("([A-Z]{3})(\\d{1})")
    const categorie = item.match(catReg)
    const catIndex = item.match(catReg)

    // Some value can have the wrong "direction" and you need to invert the values
    const invertReg = new RegExp("^!", "g")
    const sign = item.search(invertReg) * -1

    const moyenne = questions.reduce((acc, cur) => acc + cur, 0) * sign / answered

    const output = {
        "name": item,
        "categorie": categorie[1],
        "categorieIndex": categorie[2],
        "moyenne": parseFloat(moyenne.toFixed(2)),
        "result": parseFloat(parseFloat(moyenne - 3)
            .toFixed(2)),
        "stdv": parseFloat(stdv(questions)
            .toFixed(2)),
        "occurence": countOccurrences(questions, 7),
        "answered": answered,
        "allValues": questions,
        "invert": sign
    }


    return output
})

// console.log(answers.map(el => el.values[0]))
// console.log(answers.length)
// console.log(result.map(el => el.allValues.length))

// ========================
//
//  ANALYSE
//
// ========================

//
//  UEQ-S Overall | Qualité Pragmatique | Qualité Hédonique
//

const textColor = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    gray: '\x1b[90m',
};


function drawMoyen() {
    result.map(el => {
        // Draw the bar chart
        drawBarChart(el.result, el.name, -3, 3);
    })
}

function drawRepartition() {
    result.map(el => {
        const label = ueq.definition.questions[el.categorie + el.categorieIndex]
        let bar = ""

        label.inverted ? bar += String(label.positif)
            .padStart(30) + "   " : bar += String(label.negatif)
            .padStart(30) + "   "

        console.log(label.inverted)
        console.log(el.occurence)

        let values
        label.inverted ? values = el.occurence.reverse() : values = el.occurence


        // console.log(ueq.definition.questions[el.categorie + el.categorieIndex])
        for(let i = 0; i < values.length; i++) {
            if(i < 2) {
                bar += String(textColor.red + "▩" + textColor.reset)
                    .repeat(values[i])
                continue
            }
            if(i < 4) {
                bar += String(textColor.yellow + "▩" + textColor.reset)
                    .repeat(values[i])
                continue
            }
            if(i < 5) {
                bar += String(textColor.gray + "▩" + textColor.reset)
                    .repeat(values[i])
                continue
            }

            if(i < 7) {
                bar += String(textColor.blue + "▩" + textColor.reset)
                    .repeat(values[i])
                continue
            }
            if(i <= 8) {
                bar += String(textColor.green + "▩" + textColor.reset)
                    .repeat(values[i])
                continue
            }
        }
        bar += "    "
        label.inverted ? bar += String(label.negatif) : bar += String(label.positif)

        console.log(bar)
        // console.log(el.occurence)
    })
}

// drawRepartition()



// ========================
//
//  Function
//
// ========================

function filterAnswers(index, starter) {
    const rIndex = index - starter
    if(rIndex >= 0) {
        return true
    }
    return false
}

function generateHash(email) {
    let hash = 0;

    for(let i = 0; i < email.length; i++) {
        const char = email.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }

    return hash.toString();
}

function stdv(data) {
    // Step 1: Calculate the mean
    const mean = data.reduce((sum, value) => sum + value, 0) / data.length;

    // Step 2 and 3: Calculate the squared differences and find their mean
    const squaredDifferencesMean = data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length;

    // Step 4: Take the square root of the mean
    const standardDeviation = Math.sqrt(squaredDifferencesMean);

    return standardDeviation;
}

function countOccurrences(arr, max) {
    // Initialiser un objet pour stocker le nombre d'occurrences
    const occurrences = new Array(max);

    // Parcourir chaque élément de l'array
    arr.forEach((num) => {
        // Si l'élément n'existe pas dans l'objet, l'initialiser à 1, sinon incrémenter
        occurrences[num] = (occurrences[num] || 0) + 1;
    });

    return occurrences;
}

// ========================
//
//  Term display
//
// ========================

function drawBarChart(data, label, min, max) {
    const scale = 2
    let bar = ""

    bar += "-"
    for(let i = min * scale; i <= max * scale; i++) {
        if(i < 0) {
            if(data * scale < i) {
                bar += "▩"
            } else {
                bar += "-"
            }
        } else {
            if(data * scale > i) {
                bar += "▩"
            } else {
                bar += "-"
            }
        }
    }
    bar += "+"
    console.log(`${label} (${data.toFixed(2)}) | ${bar} `);
}
