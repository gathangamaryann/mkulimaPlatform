class Mkulima{
    constructor(farms,products){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let farm = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(farm);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
    let theFarm = this.farms.find(item => item.farmId ===farmId)
    theFarm.farmId =newFarmId;
    theFarm.farmName =newFarmName;
    theFarm.farmer =newFarmersName;
    theFarm.phone =newPhone;
    theFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let farm = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let theProduct = this.product.find(item => item.productId ===productId)
    theProduct.productId =newProductId;
    theProduct.productName = newProductName;
    theProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let theProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${theProduct.productName} for Kshs ${quantity*theProduct.price}`);
    }
    }
    }
    let farmer = new Mkulima();
    farmer.addFarm("5A 0.78ha","sharzer","icy","+254 743 123 456", "087-432");
    farmer.addFarm("8C 0.82ha","rajan","nana","+254 754 789 101", "345-675");
    farmer.addFarm("10B 0.25ha","tete","jackie","+254 123 456 784", "123-567")
    console.log(farmer.farms);
    farmer.removeFarm("10B 0.25ha");
    console.log(farmer)

