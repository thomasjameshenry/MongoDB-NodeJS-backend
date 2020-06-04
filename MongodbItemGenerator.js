var inputArray = [];
const manu = ["\"Apple\"","\"Samsung\"","\"Huawei\"","\"Google\"","\"Sony\""];
const color = ["\"black\"","\"white\"","\"red\"","\"blue\"","\"rose gold\"","\"green\""];
const reso = ["\"480×800\"", "\"640×1136\"", "\"720×1280\"", "\"750×1334\"", "\"1080×1920\"","\"1440×2560\""];

const apple = ["\"Iphone 6\"","\"Iphone 7\"","\"Iphone 8\"","\"Iphone X\""];
const samsung = ["\"Galaxy 7\"","\"Galaxy 8\"","\"J3\"","\"A7\""];
const huawei = ["\"Huawei Mate 30 Pro\"","\"Huawei Y9 Prime 2019\"","\"Huawei P30 Lite\"","\"Huawei P30 Pro\""];
const google = ["\"Google Pixel 4 XL\"","\"Google Pixel 4\"","\"Google Pixel 3\"","\"Google Pixel 3a\"","\"Google Pixel 3 XL\""];
const sony = ["\"Sony Xperia XZ2\"","\"Sony Xperia L2\"","\"Sony Xperia XA2 Ultra\"","\"Sony Xperia XA2\""];

var manuArray = [];
var colorArray = [];
var resoArray = [];
var sizeArray = [];
var priceArray = [];
var modelArray = [];
var numArray = [];

function getSize(){
  for(var i=0;i<8;i++){
    sizeArray.push((Math.floor(Math.random()*200)+120)/10);
  }
}
function getPrice(){
  for(var i=0;i<8;i++){
    priceArray.push((Math.floor(Math.random()*100000)+8000)/100);
  }
}
function getColor(){
  for(var i=0;i<8;i++){
    colorArray.push(color[getRandom(color.length)]);
  }
}
function getReso(){
  for(var i=0;i<8;i++){
    resoArray.push(reso[getRandom(reso.length)]);
  }
}
function getManu(){
  var num;
  for(var i=0;i<8;i++){
    num = getRandom(manu.length);
    numArray.push(num);
    manuArray.push(manu[num]);
  }
}
function getModel(){
  for(var i =0; i<8;i++){
    if(numArray[i]==0){
      modelArray.push(apple[getRandom(apple.length)]);
    }
    else if(numArray[i]==1){
      modelArray.push(samsung[getRandom(samsung.length)]);
    }
    else if(numArray[i]==2){
      modelArray.push(huawei[getRandom(huawei.length)]);
    }
    else if(numArray[i]==3){
      modelArray.push(google[getRandom(google.length)]);
    }
    else {
      modelArray.push(sony[getRandom(sony.length)]);
    }
  }
}
function getRandom(max){
  return Math.floor(Math.random()*max);
}
getManu();
getModel();
getReso();
getPrice();
getColor();
getSize();
for(var j=0;j<8;j++){
  inputArray.push("{\"manufacturer\":"+manuArray[j]+",\"model\":"+modelArray[j]+",\"price\":\"£"+priceArray[j]+"\",\"size\":\""+sizeArray[j]+"\",\"resolution\":"+resoArray[j]+",\"color\":"+colorArray[j]+"}");
}
console.log("db.items.insertMany(["+inputArray[0]+","+inputArray[1]+","+inputArray[2]+","+inputArray[3]+","+inputArray[4]+","+inputArray[5]+","+inputArray[6]+","+inputArray[7]+"])");
