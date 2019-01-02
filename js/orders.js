// -------------------- orders --------------------//
// 切換status按鈕
var changeStatusOrders = document.querySelector('#ordersList');
changeStatusOrders.addEventListener('click',orderChangeS,false);
function orderChangeS(e){
    if(e.target.nodeName =="A"){
        e.preventDefault();
        if(e.target.innerText == 'Paid'){
            let paidBtn = e.target.parentNode.parentNode.children[0];
            paidBtn.textContent = "Paid";
            paidBtn.classList.remove('btn-warning', 'btn-primary', 'btn-secondary');
            paidBtn.classList.add('bgSuccessColor');
            e.target.classList.add('active');
            e.target.parentNode.children[1].classList.remove('active');
            e.target.parentNode.children[2].classList.remove('active');
            e.target.parentNode.children[3].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode;
            tr.classList.remove('table-inactive');
        }else if(e.target.innerText == 'Unpaid'){
            let unpaidBtn = e.target.parentNode.parentNode.children[0];
            unpaidBtn.textContent = "Unpaid";
            unpaidBtn.classList.remove('bgSuccessColor', 'btn-warning', 'btn-paimary');
            unpaidBtn.classList.add('btn-secondary');
            e.target.classList.add('active');
            e.target.parentNode.children[0].classList.remove('active');
            e.target.parentNode.children[2].classList.remove('active');
            e.target.parentNode.children[3].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode;
            tr.classList.remove('table-inactive');
        }else if(e.target.innerText == 'Shipping'){
            let shippingBtn = e.target.parentNode.parentNode.children[0];
            shippingBtn.textContent = "Shipping";
            shippingBtn.classList.remove('bgSuccessColor', 'bc-secondary', 'btn-paimary');
            shippingBtn.classList.add('btn-warning');
            e.target.classList.add('active');
            e.target.parentNode.children[0].classList.remove('active');
            e.target.parentNode.children[1].classList.remove('active');
            e.target.parentNode.children[3].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode;
            tr.classList.add('table-inactive');
        }else if(e.target.innerText == 'Done'){
            let doneBtn = e.target.parentNode.parentNode.children[0];
            doneBtn.textContent = "Done";
            doneBtn.classList.remove('bgSuccessColor', 'btn-secondary', 'btn-warning');
            doneBtn.classList.add('btn-primary');
            e.target.classList.add('active');
            e.target.parentNode.children[0].classList.remove('active');
            e.target.parentNode.children[1].classList.remove('active');
            e.target.parentNode.children[2].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode;
            tr.classList.remove('table-inactive');
        }
    }else if(e.target.nodeName =="INPUT"){
        let select = e.target.parentNode.parentNode.parentNode;
        console.log(select)
        if(select.classList.contains('table-selected')){
            select.classList.remove('table-selected');
        }else{
            select.classList.add('table-selected');
        }
    }
}

// select all, unselect all
//select all
var o_selectAllBtn = document.querySelector('#o_selectAllBtn');
o_selectAllBtn.addEventListener('click', o_selectAllProduct, false);
function o_selectAllProduct(){
    clickCheckbox.checked = true;
    let checkboxs = document.querySelectorAll('.formCheck');
    let checkboxsLen = checkboxs.length;
    for(let i=0; i<checkboxsLen; i++){
        checkboxs[i].checked = true;
    } 
    let selectAll = document.querySelector('#ordersList').children;
    let selectAllLen = selectAll.length;
    for(let i=0; i<selectAllLen; i++){
        selectAll[i].classList.add('table-selected');
    }
}

var clickCheckbox = document.querySelector('#clickCheckbox');
clickCheckbox.addEventListener('click', toggleSelect, false);
function toggleSelect(){
    if(clickCheckbox.checked == true){
        let checkboxs = document.querySelectorAll('.formCheck');
        let checkboxsLen = checkboxs.length;
        for (let i = 0; i < checkboxsLen; i++) {
            checkboxs[i].checked = true;
        }
        let selectAll = document.querySelector('#ordersList').children;
        let selectAllLen = selectAll.length;
        for (let i = 0; i < selectAllLen; i++) {
            selectAll[i].classList.add('table-selected');
        }
    }else if(clickCheckbox.checked == false){
        let checkboxs = document.querySelectorAll('.formCheck');
        let checkboxsLen = checkboxs.length;
        for(let i=0; i<checkboxsLen; i++){
            checkboxs[i].checked = false;
        } 
        let selectAll = document.querySelector('#ordersList').children;
        let selectAllLen = selectAll.length;
        for(let i=0; i<selectAllLen; i++){
            selectAll[i].classList.remove('table-selected');
        }
    }  
}

// unselect all
var o_unselectAllBtn = document.querySelector('#o_unselectAllBtn');
o_unselectAllBtn.addEventListener('click', o_unselectAllProduct, false);
function o_unselectAllProduct(){
    clickCheckbox.checked = false;
    let checkboxs = document.querySelectorAll('.formCheck');
    let checkboxsLen = checkboxs.length;
    for(let i=0; i<checkboxsLen; i++){
        checkboxs[i].checked = false;
    } 
    let selectAll = document.querySelector('#ordersList').children;
    let selectAllLen = selectAll.length;
    for(let i=0; i<selectAllLen; i++){
        selectAll[i].classList.remove('table-selected');
    }
}

// change status to...
var Paid = document.querySelector('#Paid');
var paid = document.querySelectorAll('.bgSuccessColor');
var unpaid = document.querySelectorAll('.btn-secondary');
var shipping = document.querySelectorAll('.btn-warning');
var done = document.querySelectorAll('.btn-primary');

Paid.addEventListener('click', clickPaid, false);
function clickPaid(){
    // let aaa = paidChildren[0].children[6].children[0].children[0].innerText;
    // console.log(aaa == "Paid")
    let paidLen = paid.length;
    for( let i=0; i<paidLen; i++){
        let paidOther = paid[i].parentNode.parentNode.parentNode;
        console.log(paidOther)
        paidOther.style.display = "";
    }
    let unpaidLen = unpaid.length;
    for( let i=0; i<unpaidLen; i++){
        let paidOther = unpaid[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "none";
    }
    let shippingLen = shipping.length;
    for( let i=0; i<shippingLen; i++){
        let paidOther = shipping[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "none";
    }
    let doneLen = done.length;
    for( let i=0; i<doneLen; i++){
        let paidOther = done[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "none";
    }
}

var Unpaid = document.querySelector('#Unpaid');
Unpaid.addEventListener('click', clickUnpaid, false);
function clickUnpaid(){
    let paidLen = paid.length;
    for( let i=0; i<paidLen; i++){
        let unpaidOther = paid[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
    let unpaidLen = unpaid.length;
    for( let i=0; i<unpaidLen; i++){
        let paidOther = unpaid[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "";
    }
    let shippingLen = shipping.length;
    for( let i=0; i<shippingLen; i++){
        let unpaidOther = shipping[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
    let doneLen = done.length;
    for( let i=0; i<doneLen; i++){
        let unpaidOther = done[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
}

var Shipping = document.querySelector('#Shipping');
Shipping.addEventListener('click', clickShipping, false);
function clickShipping(){
    let paidLen = paid.length;
    for( let i=0; i<paidLen; i++){
        let unpaidOther = paid[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
    let unpaidLen = unpaid.length;
    for( let i=0; i<unpaidLen; i++){
        let paidOther = unpaid[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "none";
    }
    let shippingLen = shipping.length;
    for( let i=0; i<shippingLen; i++){
        let unpaidOther = shipping[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "";
    }
    let doneLen = done.length;
    for( let i=0; i<doneLen; i++){
        let unpaidOther = done[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
}

var Done = document.querySelector('#Done');
Done.addEventListener('click', clickDone, false);
function clickDone(){
    let paidLen = paid.length;
    for( let i=0; i<paidLen; i++){
        let unpaidOther = paid[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
    let unpaidLen = unpaid.length;
    for( let i=0; i<unpaidLen; i++){
        let paidOther = unpaid[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "none";
    }   
    let shippingLen = shipping.length;
    for( let i=0; i<shippingLen; i++){
        let unpaidOther = shipping[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "none";
    }
    let doneLen = done.length;
    for( let i=0; i<doneLen; i++){
        let unpaidOther = done[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "";
    }
}

var All = document.querySelector('#All');
All.addEventListener('click', clickAll, false);
function clickAll(){
    let paidLen = paid.length;
    for( let i=0; i<paidLen; i++){
        let unpaidOther = paid[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "";
    }
    let unpaidLen = unpaid.length;
    for( let i=0; i<unpaidLen; i++){
        let paidOther = unpaid[i].parentNode.parentNode.parentNode;
        paidOther.style.display = "";
    }   
    let shippingLen = shipping.length;
    for( let i=0; i<shippingLen; i++){
        let unpaidOther = shipping[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "";
    }
    let doneLen = done.length;
    for( let i=0; i<doneLen; i++){
        let unpaidOther = done[i].parentNode.parentNode.parentNode;
        unpaidOther.style.display = "";
    }
}

// edit section
var orderID = document.querySelector('#dropdownCheck1');
orderID.addEventListener('click', orderIDDisplay, false);
function orderIDDisplay(){
    let selectOrderID = document.querySelectorAll('.orderID');
    let selectOrderIDLen = selectOrderID.length;
    if(orderID.checked == true){
        for( let i=0; i<selectOrderIDLen; i++){
            selectOrderID[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectOrderIDLen; i++){
            selectOrderID[i].style.display = "none";
        }
    }
}

var customer = document.querySelector('#dropdownCheck2');
customer.addEventListener('click', cutsomerDisplay, false);
function cutsomerDisplay(){
    let selectCustomer = document.querySelectorAll('.customer');
    let selectCustomerLen = selectCustomer.length;
    if(customer.checked == true){
        for( let i=0; i<selectCustomerLen; i++){
            selectCustomer[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectCustomerLen; i++){
            selectCustomer[i].style.display = "none";
        }
    }
}

var productList = document.querySelector('#dropdownCheck3');
productList.addEventListener('click', productListDisplay, false);
function productListDisplay(){
    let selectproductList = document.querySelectorAll('.productList');
    let selectproductListLen = selectproductList.length;
    if(productList.checked == true){
        for( let i=0; i<selectproductListLen; i++){
            selectproductList[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectproductListLen; i++){
            selectproductList[i].style.display = "none";
        }
    }
}

var total = document.querySelector('#dropdownCheck4');
total.addEventListener('click', totalDisplay, false);
function totalDisplay(){
    let selecttotal = document.querySelectorAll('.total');
    let selecttotalLen = selecttotal.length;
    if(total.checked == true){
        for( let i=0; i<selecttotalLen; i++){
            selecttotal[i].style.display = "";
        }
    }else{
        for( let i=0; i<selecttotalLen; i++){
            selecttotal[i].style.display = "none";
        }
    }
}

var addToCart = document.querySelector('#dropdownCheck5');
addToCart.addEventListener('click', addToCartDisplay, false);
function addToCartDisplay(){
    let selectaddToCart = document.querySelectorAll('.addToCart');
    let selectaddToCartLen = selectaddToCart.length;
    if(addToCart.checked == true){
        for( let i=0; i<selectaddToCartLen; i++){
            selectaddToCart[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectaddToCartLen; i++){
            selectaddToCart[i].style.display = "none";
        }
    }
}

var checkOut = document.querySelector('#dropdownCheck6');
checkOut.addEventListener('click', checkOutDisplay, false);
function checkOutDisplay(){
    let selectcheckOut = document.querySelectorAll('.checkOut');
    let selectcheckOutLen = selectcheckOut.length;
    if(checkOut.checked == true){
        for( let i=0; i<selectcheckOutLen; i++){
            selectcheckOut[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectcheckOutLen; i++){
            selectcheckOut[i].style.display = "none";
        }
    }
}

var address = document.querySelector('#dropdownCheck7');
address.addEventListener('click', addressDisplay, false);
function addressDisplay(){
    let selectaddress = document.querySelectorAll('.address');
    let selectaddressLen = selectaddress.length;
    if(address.checked == true){
        for( let i=0; i<selectaddressLen; i++){
            selectaddress[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectaddressLen; i++){
            selectaddress[i].style.display = "none";
        }
    }
}

var phone = document.querySelector('#dropdownCheck8');
phone.addEventListener('click', phoneDisplay, false);
function phoneDisplay(){
    let selectphone = document.querySelectorAll('.phone');
    let selectphoneLen = selectphone.length;
    if(phone.checked == true){
        for( let i=0; i<selectphoneLen; i++){
            selectphone[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectphoneLen; i++){
            selectphone[i].style.display = "none";
        }
    }
}

var email = document.querySelector('#dropdownCheck9');
email.addEventListener('click', emailDisplay, false);
function emailDisplay(){
    let selectemail = document.querySelectorAll('.email');
    let selectemailLen = selectemail.length;
    if(email.checked == true){
        for( let i=0; i<selectemailLen; i++){
            selectemail[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectemailLen; i++){
            selectemail[i].style.display = "none";
        }
    }
}

var statusChange = document.querySelector('#dropdownCheck10');
statusChange.addEventListener('click', statusChangeDisplay, false);
function statusChangeDisplay(){
    let selectstatusChange = document.querySelectorAll('.status');
    let selectstatusChangeLen = selectstatusChange.length;
    if(statusChange.checked == true){
        for( let i=0; i<selectstatusChangeLen; i++){
            selectstatusChange[i].style.display = "";
        }
    }else{
        for( let i=0; i<selectstatusChangeLen; i++){
            selectstatusChange[i].style.display = "none";
        }
    }
}