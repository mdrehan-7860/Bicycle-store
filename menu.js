function order(name,desc,price){

document.getElementById("orderBox").style.display="block";

document.getElementById("cycleName").innerHTML=name+" - "+desc;

document.getElementById("cyclePrice").innerHTML="Price : "+price;

}

function cancelOrder(){

document.getElementById("orderBox").style.display="none";

}

function placeOrder(e){

e.preventDefault();

let name=document.getElementById("name").value;

alert("Order placed successfully!\nCustomer : "+name);

document.getElementById("orderBox").style.display="none";

}
