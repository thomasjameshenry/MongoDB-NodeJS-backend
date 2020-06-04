var add1 = ["The Burrow",	"Windyridge",	"Garden Cottage",	"Wild Bank","Mile End",	"Dreamwood	Stillness",	"Mighty Oaks","Bridgelands",	"Kuredu	Cumfrubrum",	"Elmsgate",
"Chestnuts",	"Wisteria Cottages",	"Daisy Cottage",	"South Bank","Lealands",	"The Cherries",	"The Warren","Jackdaws",	"Brookvale",	"Newland Cottage",	"Little Copse",
"Crystal Cottage",	"Nabdean",	"High Trees",	"Robins Hedge","Campion",	"Heatherbell",	"Chimney Cottage",	"Welcombe","Rosemary House",	"Hunters Wood",	"Elm Tree Wood",	"Church View",
"Court Lodge",	"Mulberry",	"Silverwood",	"Cedar Cabin","Sierra Lodge",	"Crows Nest",	"Southcote",	"Eastholme","Holmeswood",	"White Goose",	"Bulverton House",	"Tannery Gardens",
"Kites Farm",	"Snowdrops Cottage",	"Seren Cottage",	"Hope Corner","Taw Court",	"Little Acorn",	"Seacrest",	"Oak Cottage","Ardoran",	"Rose Cottage",	"Woodhouse Barn",	"Little Wood",
"Oystercatchers",	"Oakhall Cottage",	"Barton Villa",	"Queen Oaks Court","Pine View",	"Jasmine Cottage",	"Blossom",	"Mill House Farm","Stonehurst",	"Blackberry Cottage",	"Oaklands",	"Old Cottage",
"Woolley Cottage",	"Oak View",	"Riverside",	"Greenhills","Druid's Cottage",	"Grey Barn",	"Appletree Lodge",	"The Old Parsonage"];

var town = ["Abbeydorney","Abbeyfeale","Abbeyknockmoy","Abbeylara","Blackwater","Blanchardstown","Blarney","Blennerville","Blessington","Blue Ball","Boherbue",
"Clondalkin","Clondrohid","Clonegal","Clones","Clonfert","Clonlara","Clonliffe","Clonmacnoise","Clonmany","Clonmel","Clonmellon","Dolphin's Barn","Donabate","Donaghmede",
"Eadestown","Easky","Flagmount","Fossa","Goleen","Goresbridge","Holycross","Inagh","Johnstown","Killucan","Killurin","Killybegs","Loughlinstown","Loughmore","Mahoonagh","Narin","Narraghmore","Patrickswell",
"Rathmolyon","Rathmore","Rathmullan","Scariff","Timahoe","Timoleague"];

var counties = ["County Cork",  "County Galway","County Mayo","County Donegal","County Kerry","County Tipperary","County Clare","County Tyrone","County Antrim","County Limerick",
"County Roscommon","County Down","County Wexford","County Meath","County Londonderry","County Kilkenny","County Wicklow","County Offaly","County Cavan","County Waterford",
"County Westmeath","County Sligo","County Laois","County Kildare","County Fermanagh","County Leitrim","County Armagh","County Monaghan","County Longford","County Dublin",
"County Carlow","County Louth"
];

var girlsNames = ["Emma","Olivia","Ava","Isabella","Sophia","Charlotte","Mia","Amelia","Harper","Evelyn","Abigail","Emily","Elizabeth","Mila","Ella","Avery","Sofia",
"Camila","Aria","Scarlett","Victoria","Madison","Luna","Grace","Chloe","Penelope","Layla","Riley","Zoey","Nora","Lily","Eleanor","Hannah","Lillian","Addison","Aubrey",
"Ellie","Stella","Natalie","Zoe","Leah","Hazel","Violet","Aurora","Savannah","Audrey","Brooklyn","Bella","Claire","Skylar"];

var boysNames = ["Noah","Jacob","Liam", "Mason", "William","Ethan","Michael","Alexander","Jayden","Daniel","Elijah","Aiden","James","Benjamin","Matthew","Jackson",
"Logan","David","Anthony","Joseph","Joshua","Andrew","Lucas","Gabriel","Samuel","Christopher","John","Dylan","Isaac","Ryan","Nathan","Caleb","Carter","Luke","Christian",
"Hunter","Henry","Owen","Landon","Jack","Wyatt","Jonathan","Eli","Isaiah","Sebastian","Jaxon","Julian","Brayden","Gavin","Levi","Aaron"];

var surnames = ["Chung","Chen","Melton","Hill","Puckett","Song","Hamilton","Bender","Wagner","McLaughlin","McNamara","Raynor","Moon","Woodard","Desai","Wallace",
"Lawrence","Griffin","Dougherty","Powers","May","Steele","Teague","Vick","Gallagher","Solomon","Walsh","Monroe","Connolly","Hawkins","Middleton","Goldstein","Watts",
"Johnston","Weeks","Wilkerson","Barton","Walton","Hall","Ross","Chung","Bender","Woods","Mangum","Joseph","Rosenthal","Bowden","Barton","Underwood","Jones"];

var femaleTitle =["Ms","Mrs","Miss"];

var otherTitle =["Dr","Mx"];

var domains = ["@gmail.com", "@mumail.ie","@hotmail.com","@yahoo.co.uk","@outlook.com"];
var firstnames;
var secondnames;
var add1 = ["The Burrow",	"Windyridge",	"Garden Cottage",	"Wild Bank","Mile End",	"Dreamwood	Stillness",	"Mighty Oaks","Bridgelands",	"Kuredu	Cumfrubrum",	"Elmsgate",
"Chestnuts",	"Wisteria Cottages",	"Daisy Cottage",	"South Bank","Lealands",	"The Cherries",	"The Warren","Jackdaws",	"Brookvale",	"Newland Cottage",	"Little Copse",
"Crystal Cottage",	"Nabdean",	"High Trees",	"Robins Hedge","Campion",	"Heatherbell",	"Chimney Cottage",	"Welcombe","Rosemary House",	"Hunters Wood",	"Elm Tree Wood",	"Church View",
"Court Lodge",	"Mulberry",	"Silverwood",	"Cedar Cabin","Sierra Lodge",	"Crows Nest",	"Southcote",	"Eastholme","Holmeswood",	"White Goose",	"Bulverton House",	"Tannery Gardens",
"Kites Farm",	"Snowdrops Cottage",	"Seren Cottage",	"Hope Corner","Taw Court",	"Little Acorn",	"Seacrest",	"Oak Cottage","Ardoran",	"Rose Cottage",	"Woodhouse Barn",	"Little Wood",
"Oystercatchers",	"Oakhall Cottage",	"Barton Villa",	"Queen Oaks Court","Pine View",	"Jasmine Cottage",	"Blossom",	"Mill House Farm","Stonehurst",	"Blackberry Cottage",	"Oaklands",	"Old Cottage",
"Woolley Cottage",	"Oak View",	"Riverside",	"Greenhills","Druid's Cottage",	"Grey Barn",	"Appletree Lodge",	"The Old Parsonage"];

var town = ["Abbeydorney","Abbeyfeale","Abbeyknockmoy","Abbeylara","Blackwater","Blanchardstown","Blarney","Blennerville","Blessington","Blue Ball","Boherbue",
"Clondalkin","Clondrohid","Clonegal","Clones","Clonfert","Clonlara","Clonliffe","Clonmacnoise","Clonmany","Clonmel","Clonmellon","Dolphin's Barn","Donabate","Donaghmede",
"Eadestown","Easky","Flagmount","Fossa","Goleen","Goresbridge","Holycross","Inagh","Johnstown","Killucan","Killurin","Killybegs","Loughlinstown","Loughmore","Mahoonagh","Narin","Narraghmore","Patrickswell",
"Rathmolyon","Rathmore","Rathmullan","Scariff","Timahoe","Timoleague"];

var counties = ["County Cork",  "County Galway","County Mayo","County Donegal","County Kerry","County Tipperary","County Clare","County Tyrone","County Antrim","County Limerick",
"County Roscommon","County Down","County Wexford","County Meath","County Londonderry","County Kilkenny","County Wicklow","County Offaly","County Cavan","County Waterford",
"County Westmeath","County Sligo","County Laois","County Kildare","County Fermanagh","County Leitrim","County Armagh","County Monaghan","County Longford","County Dublin",
"County Carlow","County Louth"
];
const items = ["5ea17d14bcf4c8ef52072147",
                "5ea17d14bcf4c8ef52072148",
                "5ea17d14bcf4c8ef52072149",
                "5ea17d14bcf4c8ef5207214a",
                "5ea17d14bcf4c8ef5207214b",
                "5ea17d14bcf4c8ef5207214c",
                "5ea17d14bcf4c8ef5207214d",
                "5ea17d14bcf4c8ef5207214e",
                "5ea17ce6bcf4c8ef5207213f",
                "5ea17ce6bcf4c8ef52072140",
                "5ea17ce6bcf4c8ef52072141",
                "5ea17ce6bcf4c8ef52072142",
                "5ea17ce6bcf4c8ef52072143",
                "5ea17ce6bcf4c8ef52072144",
                "5ea17ce6bcf4c8ef52072145",
                "5ea17ce6bcf4c8ef52072146",
                "5ea17d74bcf4c8ef5207214f",
                "5ea17d74bcf4c8ef52072150",
                "5ea17d74bcf4c8ef52072151",
                "5ea17d74bcf4c8ef52072152",
                "5ea17d74bcf4c8ef52072153",
                "5ea17d74bcf4c8ef52072154",
                "5ea17d74bcf4c8ef52072155",
                "5ea17d74bcf4c8ef52072156"]
var ID =0;
var rand = 0;
var insertArray= [];
  for(var i=0; i<15; i++){
    rand = Math.floor(Math.random()*14);
    if(rand<4){
      insertArray.push("{\"Title\":\""+getRandomTitle()+"\",\"fname\":\""+getRandomFname()+"\",\"lname\":\""+getRandomSname()+"\",\"orders\":[{\"item_id\":\""+getRandomItem()+"\"},{\"item_id\":\""+getRandomItem()+"\"},{\"item_id\":\""+getRandomItem()+"\"}],\"email\":\""+getRandomEmail()+"\",\"mobile\":[{\"phone\":\""+getRandomPhoneNum()+"\"},{\"phone\":\""+getRandomPhoneNum()+"\"},{\"phone\":\""+getRandomPhoneNum()+"\"}],\"DoB\":\""+getRandomDoB()+"\",\"homeAdd\":[{"+getRandomAddressHome()+"}],\"shipAdd\":[{"+getRandomAddressHome()+"}]}");
    }
    else if (rand<7){
      insertArray.push("{\"Title\":\""+getRandomTitle()+"\",\"fname\":\""+getRandomFname()+"\",\"lname\":\""+getRandomSname()+"\",\"orders\":[{\"item_id\":\""+getRandomItem()+"\"},{\"item_id\":\""+getRandomItem()+"\"}],\"email\":\""+getRandomEmail()+"\",\"mobile\":[{\"phone\":\""+getRandomPhoneNum()+"\"},{\"phone\":\""+getRandomPhoneNum()+"\"}],\"DoB\":\""+getRandomDoB()+"\",\"homeAdd\":[{"+getRandomAddressHome()+"}],\"shipAdd\":[{"+getRandomAddressHome()+"}]}");
    }
    //{"fname":"Alondra","lname":"Dunne","email":"alondra.dunne@purplemail.ie","mobile":"0849937354","DoB":"1998-05-02"}
    insertArray.push("{\"Title\":\""+getRandomTitle()+"\",\"fname\":\""+getRandomFname()+"\",\"lname\":\""+getRandomSname()+"\",\"orders\":[{\"item_id\":\""+getRandomItem()+"\"}],\"email\":\""+getRandomEmail()+"\",\"mobile\":[{\"phone1\":\""+getRandomPhoneNum()+"\"}],\"DoB\":\""+getRandomDoB()+"\",\"homeAdd\":[{"+getRandomAddressHome()+"}],\"shipAdd\":[{"+getRandomAddressHome()+"}]}");
    //console.log(" (CustomerID, TITLE, FirstName ,LastName, DateOfBirth,  EmailAddress, MobileNumber) VALUES (NULL, '"+getRandomTitle()+"', '"+getRandomFname()+"', '"+getRandomSname()+"', '"+getRandomDoB()+"', '"+getRandomEmail()+"', '"+getRandomPhoneNum()+"');");
    ID++;
  }
console.log("db.customers.insertMany(["+insertArray[0]+","+insertArray[1]+","+insertArray[2]+","+insertArray[3]+","+insertArray[4]+","+insertArray[5]+","+insertArray[6]+"])");

var isGirl;
var titleGen;
var counter;
function getRandomDoB(){
  var day;
  var month = (Math.floor(Math.random()*12)+ 1).toFixed(0);
  var year = getRndInteger(1900,2019).toFixed(0);
  if(month=="9" |month=="4" |month=="6" |month=="11"){
    day = (Math.floor(Math.random()*30)+ 1).toFixed(0);
  }
  else{
    day = (Math.floor(Math.random()*31)+ 1).toFixed(0);
  }
  if(parseInt(day)<10){
    day = "0"+day;
  }
  if(parseInt(month)<10){
    month = "0"+month;
  }
  return year+"-"+month+"-"+day;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function getRandomFname(){
  var gender = Math.floor(Math.random() * 2);
  var name;
  counter++;
  if(gender == 0){
    isGirl = true;
    name = girlsNames[Math.floor(Math.random() * girlsNames.length)];
    firstnames =  name;
    return name;
  }
  else{
    isGirl = false;
    name = boysNames[Math.floor(Math.random() * boysNames.length)];
    firstnames = name;
    return name;
  }
}
function getRandomSname(){
  var name = surnames[Math.floor(Math.random()*surnames.length)];
  secondnames = name;
  return name;
}
function getRandomTitle(){
  if(isGirl){
    return femaleTitle[Math.floor(Math.random() * femaleTitle.length)];
  }
  else if(counter%6==0){
    return otherTitle[Math.floor(Math.random() * otherTitle.length)];
  }
  else{
    return "Mr";
  }
}
function getRandomEmail(){
  var num = Math.floor(Math.random()*4);
  var email;
  var dot = ".";
  var random = Math.floor(Math.random()*100);
  var domain = domains[Math.floor(Math.random()*domains.length)];
  if(num==0){
    email  = firstnames.concat(dot,secondnames,domain);
  }
  else if(num==1){
    email = firstnames.concat(random,secondnames,domain);
  }
  else if(num==2){
    email = firstnames.substring(0,1).concat(secondnames,domain);
  }
  else{
    email = firstnames.concat(dot,secondnames,random,domain);
  }
  return email;
}
function getRandomPhoneNum(){
  var phone = "08" + getRndInteger(100000,999999).toFixed(0);
  return phone;
}
function getRandomAddressHome(){
  var addr;
  var compaddr;
  var num1 = Math.floor(Math.random()*add1.length);
  var num2 = Math.floor(Math.random()*add1.length);
  var num3 = Math.floor(Math.random()*town.length);
  var num4 = Math.floor(Math.random()*counties.length);

  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter1 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum1 = Math.floor(Math.random()*99)+10;
  var letter2 = string.charAt(Math.floor(Math.random()*string.length));
  var letter3 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum2 = Math.floor(Math.random()*99)+10;
  var eircode = letter1.concat(randomNum1.toFixed(0),letter2, letter3, randomNum2.toFixed(0));
  addr = add1[num1].concat("\",\"addressLine2\":\"",add1[num2],"\",\"town\":\"",town[num3],"\",\"county\":\"",counties[num4],"\",\"eircode\":\"",eircode,"\"");
  compaddr = ("\"addressLine1\":\"").concat(addr);
  return compaddr;
}
function getRandomAddressShip(){
  var addr;
  var num1 = Math.floor(Math.random()*add1.length);
  var num2 = Math.floor(Math.random()*add1.length);
  var num3 = Math.floor(Math.random()*town.length);
  var num4 = Math.floor(Math.random()*counties.length);

  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter1 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum1 = Math.floor(Math.random()*99)+10;
  var letter2 = string.charAt(Math.floor(Math.random()*string.length));
  var letter3 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum2 = Math.floor(Math.random()*99)+10;
  var eircode = letter1.concat(randomNum1.toFixed(0),letter2, letter3, randomNum2.toFixed(0));
  addr = add1[num1].concat(",",add1[num2],",",town[num3],",",counties[num4],",",eircode);
  return addr;
}
function getRandomItem(){
  return items[getRndInteger(items.length,0)];

}
