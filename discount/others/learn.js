//home page
//function b1 () {
  
//    window.open("discount2.html")
          
//};

//function b2() {
  
//    window.open("discount3.html")
          
//};
//function back(){
//window.open('discount1.html')
//};
function reset() {
    window.location.reload(true);
};
//data
function discount_P () {
    let original_price = document.getElementById('op').value;
    let discount_percentage = document.getElementById('ap').value;
    let discount_amount =`${original_price - (original_price/100*discount_percentage)}  Rs`;
    console.log(discount_amount);
    document.getElementById('result').innerHTML=discount_amount;
};
function discount_Pt () {
    let original_price = document.getElementById('op').value;
    let selling_price = document.getElementById('sp').value;
    var discount_percentage = `${(original_price - selling_price)/original_price *100} %`;
    document.getElementById('result').innerHTML=discount_percentage;

};

