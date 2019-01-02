// -------------------- product --------------------//
// add new Specification
addProductList();
var addProduct = document.querySelector('#addProductBtn');
addProduct.addEventListener('click', addProductList, false);

function addProductList(){
    var addList = document.querySelector('.addList');
    var addProductList = document.querySelector('#addProductList');
    var checkChild = addProductList.children;
    if(checkChild[1] !== addList){
        var str = ` <div class="addList"> 
                        <div class="form-row mb-2">
                            <div class="col-md-3">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Size</div>
                                    </div>
                                    <select class="form-control inputSize">
                                        <option>XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Color</div>
                                    </div>
                                    <input type="text" class="form-control inputColor">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Inventory</div>
                                    </div>
                                    <input type="text" class="form-control inputInventory">
                                </div>
                            </div>
                            <div class="col-md-1 text-center mt-1">
                                <a class="text-dark deleteList" href="#"><i class="fas fa-trash-alt"></i></a>
                            </div>
                        </div>
                    </div>`;
       
         addProductList.innerHTML = '<label id="checkId">Specification</label>' + str;
    }
    else{
        var addList2 = addList.cloneNode(true);
        addList2.children[0].children[1].children[0].children[1].value = "";
        addList2.children[0].children[2].children[0].children[1].value = "";
        var addListArea = document.querySelector('#addProductList');
        addListArea.appendChild(addList2);
    }
}

var deleteProduct = document.querySelector('#addProductList');
deleteProduct.addEventListener('click',deleteProductList,false);

function deleteProductList(e){
    e.preventDefault();
    if(e.target.nodeName =="I"){
        var deleteList = e.target.parentNode.parentNode.parentNode.parentNode;
        deleteList.parentNode.removeChild(deleteList); 
    }
}

// 上傳圖片並預覽
var selectForm = document.querySelector('#imgInp');
selectForm.addEventListener('change',addImg,false);
function addImg(){
    // document.querySelector('#previewImg').innerHTML = "";
    var img = document.querySelector('#imgInp').files;
    for(let i=0; i<img.length; i++){
        
        let file = img[i];
        let url = URL.createObjectURL(file);

        let imgBorder = document.querySelector('#previewImg');

        let imgBorder1 = document.createElement("div");
        imgBorder1.classList.add('col-md-4', 'imgBorder');
        imgBorder.appendChild(imgBorder1);

        let imgBorder2 = document.createElement("div");
        imgBorder2.classList.add('modal-bg', 'mb-2');
        imgBorder1.appendChild(imgBorder2);

        let imgPreview = document.createElement("img");
        imgPreview.setAttribute('src', url);
        imgPreview.classList.add('inputImg');
        imgBorder2.appendChild(imgPreview); 
        
        var fileList = Array.from(img);

        var deleteIcon = document.createElement("span");
            deleteIcon.classList.add('deleteImg');
            deleteIcon.innerText = 'x';
            deleteIcon.dataset.filename = img[i].name;
            imgBorder2.appendChild(deleteIcon);
    }
    // 刪除預覽圖片
    var deleteImg = document.querySelector('#previewImg');
    deleteImg.addEventListener('click',deletePreview, false);
    function deletePreview(e){
        if(e.target.nodeName !=="SPAN"){return};
        var filename = e.target.dataset.filename;  

        for(let i=0; i<fileList.length; i++){ 
            if(fileList[i].name = filename){
                var getParent = e.target.parentNode.parentNode.parentNode;
                var getChild = e.target.parentNode.parentNode;
                getParent.removeChild(getChild);
                 
                fileList.splice(i,1);
                break;
            }
        }
    }
    // 清除file路徑
    selectForm.value = ''; 
} // end of funtion addImg()

// 拖拉圖片並預覽
var dragover = document.querySelector('#dragAndDrop');
dragover.addEventListener('dragover', dragoverImg, false);
function dragoverImg(e){
    e.preventDefault(); 
}

dragover.addEventListener('drop', dropImg, false);
function dropImg(e){
    e.preventDefault();
    var files = e.dataTransfer.files;
    for(let i=0; i<files.length; i++){
        
        let file = files[i];
        let url = URL.createObjectURL(file);

        let imgBorder = document.querySelector('#previewImg');

        let imgBorder1 = document.createElement("div");
        imgBorder1.classList.add('col-md-4', 'imgBorder');
        imgBorder.appendChild(imgBorder1);

        let imgBorder2 = document.createElement("div");
        imgBorder2.classList.add('modal-bg', 'mb-2');
        imgBorder1.appendChild(imgBorder2);

        let imgPreview = document.createElement("img");
        imgPreview.setAttribute('src', url);
        imgPreview.classList.add('inputImg');
        imgBorder2.appendChild(imgPreview); 
        
        var fileList = Array.from(files);

        var deleteIcon = document.createElement("span");
            deleteIcon.classList.add('deleteImg');
            deleteIcon.innerText = 'x';
            deleteIcon.dataset.filename = files[i].name;
            imgBorder2.appendChild(deleteIcon);
    }
    // 刪除預覽圖片
    var deleteImg = document.querySelector('#previewImg');
    deleteImg.addEventListener('click',deletePreview, false);
    function deletePreview(e){
        if(e.target.nodeName !=="SPAN"){return};
        var filename = e.target.dataset.filename;  

        for(let i=0; i<fileList.length; i++){ 
            if(fileList[i].name = filename){
                var getParent = e.target.parentNode.parentNode.parentNode;
                var getChild = e.target.parentNode.parentNode;
                getParent.removeChild(getChild);
                 
                fileList.splice(i,1);
                break;
            }
        }
    }
    // 清除file路徑
    selectForm.value = '';    
}

// 動態新增產品列表 published,unpublished
var publishBtn = document.querySelector('#publish');
var unpublishBtn = document.querySelector('#unpublish');
var data = [];
var list = document.querySelector('#productList');

publishBtn.addEventListener('click',addData,false);
unpublishBtn.addEventListener('click',addData,false);

function addData(e){
    e.preventDefault();
    var inputImg = document.querySelector('.inputImg').getAttribute('src');
    var inputTitle = document.querySelector('#inputTitle').value;
    var inputOriginalPrice = document.querySelector('#originalPrice').value;
    var inputDiscountPrice = document.querySelector('#discountPrice').value;
    var inputSize = document.querySelector('.inputSize').value;
    var inputColor = document.querySelector('.inputColor').value;
    var inputInventory = document.querySelector('.inputInventory').value;
    // document.querySelector('.inputImg').removeAttribute('src');
    // document.querySelector('#inputTitle').value


    // var productData = {
    //     img: inputImg,
    //     title: inputTitle,
    //     originalPrice: inputOriginalPrice,
    //     discountPrice: inputDiscountPrice,
    //     size: inputSize,
    //     color: inputColor,
    //     inventory: inputInventory
    //   };
    // data.push(productData);
	// localStorage.setItem('productData', JSON.stringify(data));
    updateData(e);

    // submit 後清除 input 資料
    let cleanPreview = document.querySelector('#previewImg');
    cleanPreview.innerHTML = '';
    document.querySelector('#inputTitle').value = '';
    document.querySelector('#originalPrice').value = '$';
    document.querySelector('#discountPrice').value = '$';
    document.querySelector('.inputSize').value = 'XS';
    document.querySelector('.inputColor').value = '';
    document.querySelector('.inputInventory').value = '';

    
    // 更新網頁product內容
    function updateData(e){
        e.preventDefault();
            if(e.target.innerHTML == 'PUBLISH'){
                // 創建 tr
                let tr = document.createElement('tr');
                list.appendChild(tr);
                
                // 創建 照片td
                let imgTd = document.createElement('td');
                imgTd.setAttribute('scope', 'row');
                imgTd.classList.add('pl-4');
                tr.appendChild(imgTd);
                    let imgDiv = document.createElement('div');
                    imgDiv.classList.add('d-flex', 'align-items-center');
                    imgTd.appendChild(imgDiv);
                        let imgInput = document.createElement('input');
                        imgInput.setAttribute('type', 'checkbox');
                        imgInput.classList.add('formCheck', 'mt-0', 'mr-2');
                        imgDiv.appendChild(imgInput);

                        let imgDiv2 = document.createElement('div');
                        imgDiv2.classList.add('product-bg', 'mr-3');
                        imgDiv.appendChild(imgDiv2);

                        let imgImg = document.createElement('img');
                        imgImg.classList.add('mr-3');
                        imgImg.setAttribute('src', inputImg);
                        imgImg.setAttribute('alt', 'Generic placeholder image');
                        imgDiv2.appendChild(imgImg);

                        let imgP = document.createElement('p');
                        imgP.classList.add('m-0');
                        imgP.textContent = inputTitle;
                        imgDiv.appendChild(imgP);

                // 創建 original price td
                let opTd = document.createElement('td');
                tr.appendChild(opTd);
                    let opDiv = document.createElement('div');
                    opDiv.classList.add('d-flex', 'justify-content-end', 'align-items-center');
                    opDiv.setAttribute('style', 'height: 80px');
                    opTd.appendChild(opDiv);
                        let opP = document.createElement('p');
                        opP.classList.add('m-0');
                        opDiv.appendChild(opP);
                        opP.textContent = inputOriginalPrice;

                // 創建 discount price td
                let dpTd = document.createElement('td');
                tr.appendChild(dpTd);
                    let dpDiv = document.createElement('div');
                    dpDiv.classList.add('d-flex', 'justify-content-end', 'align-items-center');
                    dpDiv.setAttribute('style', 'height: 80px');
                    dpTd.appendChild(dpDiv);
                        let dpP = document.createElement('p');
                        dpP.classList.add('m-0');
                        dpDiv.appendChild(dpP);
                        dpP.textContent = inputDiscountPrice;

                // 創建 size td
                let sizeTd = document.createElement('td');
                tr.appendChild(sizeTd);
                    let sizeDiv = document.createElement('div');
                    sizeDiv.classList.add('d-flex', 'align-items-center');
                    sizeDiv.setAttribute('style', 'height: 80px');
                    sizeTd.appendChild(sizeDiv);
                        let sizeP = document.createElement('p');
                        sizeP.classList.add('m-0');
                        sizeDiv.appendChild(sizeP);
                        sizeP.textContent = inputSize;
                
                // 創建 color td
                let colorTd = document.createElement('td');
                tr.appendChild(colorTd);
                    let colorDiv = document.createElement('div');
                    colorDiv.setAttribute('style', 'position: relative; height: 80px;');
                    colorTd.appendChild(colorDiv);
                        let colorDiv2 = document.createElement('div');
                        colorDiv2.setAttribute('style', 'position: absolute; top: 50%; transform: translateY(-50%);');
                        colorDiv.appendChild(colorDiv2);
                            let colorP = document.createElement('p');
                            colorP.classList.add('m-0');
                            colorP.textContent = inputColor;
                            colorDiv2.appendChild(colorP);

                // 創建 inventory td
                let inventoryTd = document.createElement('td');
                tr.appendChild(inventoryTd);
                    let inventoryDiv = document.createElement('div');
                    inventoryDiv.setAttribute('style', 'position: relative; height: 80px;');
                    inventoryTd.appendChild(inventoryDiv);
                        let inventoryDiv2 = document.createElement('div');
                        inventoryDiv2.setAttribute('style', 'position: absolute; top: 50%; right: 0%; transform: translateY(-50%);');
                        inventoryDiv.appendChild(inventoryDiv2);
                            let inventoryP = document.createElement('p');
                            inventoryP.classList.add('m-0');
                            inventoryP.textContent = inputInventory;
                            inventoryDiv2.appendChild(inventoryP);

                // 創建按鈕td
                let btnTd = document.createElement('td');
                tr.appendChild(btnTd);
                
                    let btnDiv = document.createElement('div');
                    btnDiv.classList.add('d-flex', 'align-items-center', 'justify-content-center');
                    btnDiv.setAttribute('style', 'height: 80px');
                    btnTd.appendChild(btnDiv);
                        let btnDiv2 = document.createElement('div');
                        btnDiv2.classList.add('dropdown');
                        btnDiv.appendChild(btnDiv2);
                            let btnA = document.createElement('button');
                            btnA.classList.add('btn', 'bgSuccessColor', 'dropdown-toggle');
                            btnA.setAttribute('id', 'dropdownMenuButton');
                            btnA.setAttribute('data-toggle', 'dropdown');
                            btnA.setAttribute('aria-haspopup', 'true');
                            btnA.setAttribute('aria-expanded','false');
                            btnA.textContent = 'Published';
                            btnDiv2.appendChild(btnA);

                            let btnDiv3 = document.createElement('div');
                            btnDiv3.classList.add('dropdown-menu');
                            btnDiv3.setAttribute('aria-labelledby', 'dropdownMenuButton');
                            btnDiv2.appendChild(btnDiv3);
                                let btnA2 = document.createElement('a');
                                btnA2.classList.add('dropdown-item', 'active');
                                btnA2.setAttribute('href', '#');
                                btnA2.textContent = 'Published';
                                btnDiv3.appendChild(btnA2);

                                let btnA3 = document.createElement('a');
                                btnA3.classList.add('dropdown-item');
                                btnA3.setAttribute('href', '#');
                                btnA3.textContent = 'Unpublished';
                                btnDiv3.appendChild(btnA3);

            }else if(e.target.innerHTML == 'SAVE DRAFT'){
                // 創建 tr
                let tr = document.createElement('tr');
                tr.classList.add('table-inactive');
                list.appendChild(tr);
                
                // 創建 照片td
                let imgTd = document.createElement('td');
                imgTd.setAttribute('scope', 'row');
                imgTd.classList.add('pl-4');
                tr.appendChild(imgTd);
                    let imgDiv = document.createElement('div');
                    imgDiv.classList.add('d-flex', 'align-items-center');
                    imgTd.appendChild(imgDiv);
                        let imgInput = document.createElement('input');
                        imgInput.setAttribute('type', 'checkbox');
                        imgInput.classList.add('formCheck', 'mt-0', 'mr-2');
                        imgDiv.appendChild(imgInput);

                        let imgDiv2 = document.createElement('div');
                        imgDiv2.classList.add('product-bg', 'mr-3');
                        imgDiv.appendChild(imgDiv2);

                        let imgImg = document.createElement('img');
                        imgImg.classList.add('mr-3');
                        imgImg.setAttribute('src', inputImg);
                        imgImg.setAttribute('alt', 'Generic placeholder image');
                        imgDiv2.appendChild(imgImg);

                        let imgP = document.createElement('p');
                        imgP.classList.add('m-0');
                        imgP.textContent = inputTitle;
                        imgDiv.appendChild(imgP);

                // 創建 original price td
                let opTd = document.createElement('td');
                tr.appendChild(opTd);
                    let opDiv = document.createElement('div');
                    opDiv.classList.add('d-flex', 'justify-content-end', 'align-items-center');
                    opDiv.setAttribute('style', 'height: 80px');
                    opTd.appendChild(opDiv);
                        let opP = document.createElement('p');
                        opP.classList.add('m-0');
                        opDiv.appendChild(opP);
                        opP.textContent = inputOriginalPrice;

                // 創建 discount price td
                let dpTd = document.createElement('td');
                tr.appendChild(dpTd);
                    let dpDiv = document.createElement('div');
                    dpDiv.classList.add('d-flex', 'justify-content-end', 'align-items-center');
                    dpDiv.setAttribute('style', 'height: 80px');
                    dpTd.appendChild(dpDiv);
                        let dpP = document.createElement('p');
                        dpP.classList.add('m-0');
                        dpDiv.appendChild(dpP);
                        dpP.textContent = inputDiscountPrice;

                // 創建 size td
                let sizeTd = document.createElement('td');
                tr.appendChild(sizeTd);
                    let sizeDiv = document.createElement('div');
                    sizeDiv.classList.add('d-flex', 'align-items-center');
                    sizeDiv.setAttribute('style', 'height: 80px');
                    sizeTd.appendChild(sizeDiv);
                        let sizeP = document.createElement('p');
                        sizeP.classList.add('m-0');
                        sizeDiv.appendChild(sizeP);
                        sizeP.textContent = inputSize;
                
                // 創建 color td
                let colorTd = document.createElement('td');
                tr.appendChild(colorTd);
                    let colorDiv = document.createElement('div');
                    colorDiv.setAttribute('style', 'position: relative; height: 80px;');
                    colorTd.appendChild(colorDiv);
                        let colorDiv2 = document.createElement('div');
                        colorDiv2.setAttribute('style', 'position: absolute; top: 50%; transform: translateY(-50%);');
                        colorDiv.appendChild(colorDiv2);
                            let colorP = document.createElement('p');
                            colorP.classList.add('m-0');
                            colorP.textContent = inputColor;
                            colorDiv2.appendChild(colorP);

                // 創建 inventory td
                let inventoryTd = document.createElement('td');
                tr.appendChild(inventoryTd);
                    let inventoryDiv = document.createElement('div');
                    inventoryDiv.setAttribute('style', 'position: relative; height: 80px;');
                    inventoryTd.appendChild(inventoryDiv);
                        let inventoryDiv2 = document.createElement('div');
                        inventoryDiv2.setAttribute('style', 'position: absolute; top: 50%; right: 0%; transform: translateY(-50%);');
                        inventoryDiv.appendChild(inventoryDiv2);
                            let inventoryP = document.createElement('p');
                            inventoryP.classList.add('m-0');
                            inventoryP.textContent = inputInventory;
                            inventoryDiv2.appendChild(inventoryP);

                // 創建按鈕td
                let btnTd = document.createElement('td');
                tr.appendChild(btnTd);
                
                    let btnDiv = document.createElement('div');
                    btnDiv.classList.add('d-flex', 'align-items-center', 'justify-content-center');
                    btnDiv.setAttribute('style', 'height: 80px');
                    btnTd.appendChild(btnDiv);
                        let btnDiv2 = document.createElement('div');
                        btnDiv2.classList.add('dropdown');
                        btnDiv.appendChild(btnDiv2);
                            let btnA = document.createElement('button');
                            btnA.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
                            btnA.setAttribute('id', 'dropdownMenuButton');
                            btnA.setAttribute('data-toggle', 'dropdown');
                            btnA.setAttribute('aria-haspopup', 'true');
                            btnA.setAttribute('aria-expanded','false');
                            btnA.textContent = 'Unpublished';
                            btnDiv2.appendChild(btnA);

                            let btnDiv3 = document.createElement('div');
                            btnDiv3.classList.add('dropdown-menu');
                            btnDiv3.setAttribute('aria-labelledby', 'dropdownMenuButton');
                            btnDiv2.appendChild(btnDiv3);
                                let btnA2 = document.createElement('a');
                                btnA2.classList.add('dropdown-item');
                                btnA2.setAttribute('href', '#');
                                btnA2.textContent = 'Published';
                                btnDiv3.appendChild(btnA2);

                                let btnA3 = document.createElement('a');
                                btnA3.classList.add('dropdown-item', 'active');
                                btnA3.setAttribute('href', '#');
                                btnA3.textContent = 'Unpublished';
                                btnDiv3.appendChild(btnA3);
            } // end of else if
    } // end of updateData()
} // end of addData()




//切換publish、unpublish樣式
var changeStatusProduct = document.querySelector('#productList');
changeStatusProduct.addEventListener('click',changeS,false);
function changeS(e){
    if(e.target.nodeName =="A"){
        e.preventDefault();
        if(e.target.innerText == 'Unpublished'){
            let unpublishedBtn = e.target.parentNode.parentNode.children[0];
            unpublishedBtn.textContent = "Unpublished";
            unpublishedBtn.classList.replace('bgSuccessColor', 'btn-secondary');
            e.target.classList.add('active');
            e.target.parentNode.children[0].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            tr.classList.add('table-inactive');
        }else if(e.target.innerText == 'Published'){
            let publishedBtn = e.target.parentNode.parentNode.children[0];
            publishedBtn.textContent = "Published";
            publishedBtn.classList.replace('btn-secondary', 'bgSuccessColor');
            e.target.classList.add('active');
            e.target.parentNode.children[1].classList.remove('active');
            var tr = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            tr.classList.remove('table-inactive');
        }
    }else if(e.target.nodeName =="INPUT"){
        let select = e.target.parentNode.parentNode.parentNode;
        if(select.classList.contains('table-selected')){
            select.classList.remove('table-selected');
        }else{
            select.classList.add('table-selected');
        }
    }
}


// select all, unselect all, select published, select unpublished
//select all
var p_selectAllBtn = document.querySelector('#p_selectAllBtn');
p_selectAllBtn.addEventListener('click', p_selectAllProduct, false);
function p_selectAllProduct(){
    clickCheckbox.checked = true;
    let checkboxs = document.querySelectorAll('.formCheck');
    let checkboxsLen = checkboxs.length;
    for(let i=0; i<checkboxsLen; i++){
        checkboxs[i].checked = true;
    } 
    let selectAll = document.querySelector('#productList').children;
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
        let selectAll = document.querySelector('#productList').children;
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
        let selectAll = document.querySelector('#productList').children;
        let selectAllLen = selectAll.length;
        for(let i=0; i<selectAllLen; i++){
            selectAll[i].classList.remove('table-selected');
        }
    }  
}

// unselect all
var p_unselectAllBtn = document.querySelector('#p_unselectAllBtn');
p_unselectAllBtn.addEventListener('click', p_unselectAllProduct, false);
function p_unselectAllProduct(){
    clickCheckbox.checked = false;
    let checkboxs = document.querySelectorAll('.formCheck');
    let checkboxsLen = checkboxs.length;
    for(let i=0; i<checkboxsLen; i++){
        checkboxs[i].checked = false;
    } 
    let selectAll = document.querySelector('#productList').children;
    let selectAllLen = selectAll.length;
    for(let i=0; i<selectAllLen; i++){
        selectAll[i].classList.remove('table-selected');
    }
}

// select published
var selectPublishedBtn = document.querySelector('#selectPublishedBtn');
selectPublishedBtn.addEventListener('click', selectPublished, false);
function selectPublished(){
    let checkboxs = document.querySelectorAll('.bgSuccessColor');
    let checkboxsLen = checkboxs.length;
    for (let i = 0; i < checkboxsLen; i++) {
        let selectPub = checkboxs[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0];
        selectPub.checked = true;
    } 
    let published = document.querySelectorAll('.bgSuccessColor');
    let publishedLen = published.length;
    for (let i = 0; i < publishedLen; i++) {
        let selectPub = published[i].parentNode.parentNode.parentNode.parentNode;
        selectPub.classList.add('table-selected');
    }

    let checkboxs2 = document.querySelectorAll('.btn-secondary');
    let checkboxsLen2 = checkboxs2.length;
    for (let i = 0; i < checkboxsLen2; i++) {
        let selectPub = checkboxs2[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0];
        selectPub.checked = false;
    } 
    let published2 = document.querySelectorAll('.btn-secondary');
    let publishedLen2 = published2.length;
    for (let i = 0; i < publishedLen2; i++) {
        let selectPub = published2[i].parentNode.parentNode.parentNode.parentNode;
        selectPub.classList.remove('table-selected');
    }
}

// select unpublished
var selectUnpublishedBtn = document.querySelector('#selectUnpublishedBtn');
selectUnpublishedBtn.addEventListener('click', selectUnpublished, false);
function selectUnpublished(){
    let checkboxs = document.querySelectorAll('.btn-secondary');
    let checkboxsLen = checkboxs.length;
    for (let i = 0; i < checkboxsLen; i++) {
        let selectPub = checkboxs[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0];
        selectPub.checked = true;
    } 
    let published = document.querySelectorAll('.btn-secondary');
    let publishedLen = published.length;
    for (let i = 0; i < publishedLen; i++) {
        let selectPub = published[i].parentNode.parentNode.parentNode.parentNode;
        selectPub.classList.add('table-selected');
    }

    let checkboxs2 = document.querySelectorAll('.bgSuccessColor');
    let checkboxsLen2 = checkboxs2.length;
    for (let i = 0; i < checkboxsLen2; i++) {
        let selectPub = checkboxs2[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0];
        selectPub.checked = false;
    } 
    let published2 = document.querySelectorAll('.bgSuccessColor');
    let publishedLen2 = published2.length;
    for (let i = 0; i < publishedLen2; i++) {
        let selectPub = published2[i].parentNode.parentNode.parentNode.parentNode;
        selectPub.classList.remove('table-selected');
    }
}



// var clickDropdown = document.querySelector('#clickDropdown');
// clickDropdown.addEventListener('click',function(){
//     let clickCheckbox = document.querySelector('#clickCheckbox');
//     clickCheckbox.classList.add('bg');
//     clickDropdown.classList.add('bg');
// }, false);