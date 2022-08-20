function getElement(elementId){
    const element = document.getElementById(elementId)
    const elementStrCon = parseInt(element.innerText);
    return elementStrCon;
}
function setElenment(get,set){
    const getElement = document.getElementById(get)
    getElement.innerText = set;
}
function updatePrice(isIncrement, getid, setElenment, price) {
    const inputIncrement = document.getElementById(getid)
    const getInputValue = parseInt(inputIncrement.value);
    let incremintCaseContate;
    if (isIncrement === true) {
        incremintCaseContate = getInputValue + 1;
    }
    else {
        incremintCaseContate = getInputValue - 1;
    }
    const calclulatCasePrice = incremintCaseContate * price;
    inputIncrement.value = incremintCaseContate;
    const casePrice = document.getElementById(setElenment);
    casePrice.innerText = calclulatCasePrice;
   
}
function totalCalculat(){
    const getCsePrice = getElement("case-price")
    const getPhonePrice = getElement("phone-price")
    const subTotal = getCsePrice + getPhonePrice;
    setElenment("subtotal",subTotal)
    const texCalculat =parseFloat((( subTotal /100) * 10).toFixed(2)); 
    setElenment("tax",texCalculat)
    const totalPriece = subTotal + texCalculat;
    setElenment("total",totalPriece)
}


document.getElementById('case-btn-plus').addEventListener('click', function () {
     updatePrice(true, "case-input", "case-price", 59)
     totalCalculat()
     
    
})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    updatePrice(false, "case-input", "case-price", 59)
    totalCalculat()
})
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    updatePrice(true, "phone-input", "phone-price", 1219)
    totalCalculat()
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    updatePrice(false, "phone-input", "phone-price", 1219)
    totalCalculat()
})