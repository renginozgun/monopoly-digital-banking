export function setCardsAction(payload){

    console.log("actiondan",payload)
return {type: "SET_CARDS", payload}

}

export function setGiverAccountAction(payload){


return {type: "SET_GIVER_ACCOUNT", payload}

}

export function setTakerAccountAction(payload){


return {type: "SET_TAKER_ACCOUNT", payload}

}

export function makeTransaction(payload){

let {taker, giver, amount, cards } = payload
console.log("it works", taker, giver, amount, cards)

if(taker){
    taker.money= Number(taker.money) + Number(amount)
    cards.find(x=> x.name === taker.name).money = taker.money
}
if(giver){

    giver.money= Number(giver.money) - Number(amount)
    cards.find(x=> x.name === giver.name).money = giver.money
}

payload=cards

    return {type:"SET_CARDS", payload}
}
