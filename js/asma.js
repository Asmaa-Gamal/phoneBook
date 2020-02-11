

var productsContainer;

if(localStorage.getItem("productsData") == null)
	{
		productsContainer=[];
	}
   else
     {
productsContainer=JSON.parse(
	localStorage.getItem("productsData"));
}
		
	

var inputs = document.getElementsByClassName("form-control");

function addProduct() {


    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;
    var productDesc = document.getElementById("productDescInp").value;




    var product =
    {
        name: productName,
        price: productPrice,
        category: productCategory,
        desc: productDesc,
    }

    productsContainer.push(product);
	localStorage.setItem("productsData", JSON.stringify( productsContainer));

    clearForm();
    displayProducts();
}

function clearForm()
{
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function displayProducts()
{

var temp = "";
for(var i = 0 ; i < productsContainer.length ;i++)
{
    temp +=`<div class="col-md-4 mb-4">
        <div class="project">
            <img src="images/2.jpg" class="img-fluid">
            <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
            </h4>
            <p>`+productsContainer[i].desc+`</p>
            <span class="badge badge-pill badge-success">`+productsContainer[i].price+`</span>
<button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button>
<button onclick="updateProduct(`+i+`)" class="btn btn-outline-danger">update</button>
        </div>
    </div>
`;
}

document.getElementById("productsRow").innerHTML = temp;

}
function searchProduct(term)
{
	var temp='';
	for(var i=0;i<productsContainer.length;i++)
		{
		if(productsContainer[i].name.includes(term))
				{
					 temp +=`<div class="col-md-4">
        <div class="project">
            <img src="images/2.jpg" class="img-fluid">
            <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
            </h4>
            <p>`+productsContainer[i].desc+`</p>
            <span class="badge badge-pill badge-success">`+productsContainer[i].price+`</span>

        </div>
    </div>
`;
				}
			
		}
	document.getElementById("productsRow").innerHTML=temp;
}


function deleteProduct(indx)
{
	var deleted=productsContainer.splice(indx);
	localStorage.setItem("productsData", JSON.stringify( productsContainer));
	displayProducts();
}










/*
var productName=
	document.getElementById("prouctNameInp");
	
var productPrice=
	document.getElementById("prouctPriceInp");
	
var productCatogry=
document.getElementById("prouctCatogryInp");
	
var productDesc=
	document.getElementById("prouctDescInp");
	

var productsContainer;

var inputs=document.getElementsByClassName("form-control");



function addProduct(){
	

	var product={
		name:productName.value,
		price:productPrice.value,
		catogry:productCatogry.value,
		desc:productDesc.value
		
	}
	
	productsContainer.push(product);

    clearForm();
    displayProducts();
	
}

function clearForm(){
	
	for(var i=0;i=inputs.length;i++){
		
		inputs[i].value="";
	}
		
}

function displayProducts(){

	var temp="";
	for(var i=0;i=productsContainer.length;i++){
		temp +=`<div class="col-md-4">
        <div class="project">
            <img src="images/2.jpg" class="img-fluid">
            <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
            </h4>
            <p>`+productsContainer[i].desc+`</p>
            <span class="badge badge-pill badge-success">`+productsContainer[i].price+`</span>

        </div>
    </div>
`;
		
	document.getElementById("prouctsRow").innerHTML
	=temp;	
		
	}
	
}*/