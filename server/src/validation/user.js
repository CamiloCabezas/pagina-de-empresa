

const validationRegister = (name, lastName, iN) => {
    const answer = true
    if(!name || !lastName || !iN){ answer = false}

    if(typeof name !== "string" || typeof lastName !== "string"){ answer = false}

    if(iN.length < 10 && iN.length > 30){ answer = false}
    
    return answer
}

module.exports = {
    validationRegister
}