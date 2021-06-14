//cost Info
{
var workerAntCost = 25;
var farmerAntCost = 15;
var soldierAntsCost = 50;
var territoryFoodCost = 1000;
var territorySoldierCost = 5;
var armyRequired = 5;
var upgradeFood = 250;
}

//base price
{
    var soldierAntsBasePrice = 50;
    var farmerAntsBasePrice = 15;
    var workerAntsBasePrice = 25;
    var territoryFoodCostBasePrice = 1000;
    var territorySoldierCostBasePrice = 5;
    var armyRequiredBasePrice = 5;
}
//resources Info
{
var food = 0;
var farmerAnts = 0;
var workerAnts = 0;
var soldierAnts = 0;
var foodPerSecond = 0;
var territories = 0;
var currentUpgrade = 0;
}
//multipliers
{
var workerAntsFoodFactor = 1.3; // WorkAnts food generation factor
var farmerAntsFoodFactor = 1.2;
var soldierAntsCostFactor = 1.1;
var farmerAntsCostFactor = 1.15;
var workerAntsCostFactor = 1.2;
var territorySoldierCostFactor = 1.1;
var territoryFoodCostFactor = 1.2;
}
//perks
{
var farmerAntsCostReduction = 0;
var workerAntsCostReduction = 0;
var soldierAntsCostReduction = 0;
var territoryCostReduction = 0;
var farmerAntsFoodBonus = 0;
var workerAntsFoodBonus = 0;
var soldierAntsAttackBonus = 0;
var soldierAntsDefenseBonus = 0;
}

var perksDict = {1:["farmerAntsCostReduction",5],
    4:["farmerAntsFoodBonus",5],
    10:["farmerAntsCostReduction",10],
    11:["farmerAntsFoodBonus",10],
    29:["farmerAntsFoodBonus",15],
    44:["farmerAntsCostReduction",15],
    51:["farmerAntsFoodBonus",20],
    59:["farmerAntsCostReduction" ,25],
    64:["farmerAntsFoodBonus",30],
    73:["farmerAntsFoodBonus",40],
    82:["farmerAntsFoodBonus",50],
    2:["workerAntsFoodBonus",5],
    5:["workerAntsCostReduction",5],
    7:["workerAntsFoodBonus",10],
    9:["workerAntsCostReduction",10],
    22:["workerAntsCostReduction",15],
    23:["workerAntsFoodBonus",15],
    28:["workerAntsFoodBonus",20],
    30:["workerAntsCostReduction",20],
    32:["workerAntsFoodBonus",25],
    34:["workerAntsCostReduction",25],
    36:["workerAntsFoodBonus",30],
    38:["workerAntsFoodBonus",35],
    41:["workerAntsCostReduction",30],
    53:["workerAntsFoodBonus",40],
    57:["workerAntsCostReduction",35],
    61:["workerAntsCostReduction",40],
    70:["workerAntsFoodBonus",45],
    75:["workerAntsFoodBonus",50],
    83:["workerAntsCostReduction",50],
    3:["soldierAntsCostReduction",5],
    8:["soldierAntsAttackBonus",5],
    13:["soldierAntsAttackBonus",10],
    14:["soldierAntsAttackBonus",15],
    16:["soldierAntsCostReduction",10],
    19:["soldierAntsCostReduction",15],
    20:["soldierAntsCostReduction",20],
    40:["soldierAntsAttackBonus",20],
    43:["soldierAntsCostReduction",30],
    54:["soldierAntsAttackBonus",25],
    69:["soldierAntsAttackBonus",30],
    71:["soldierAntsAttackBonus",40],
    80:["soldierAntsCostReduction",40],
    84:["soldierAntsAttackBonus",50],
    6:["soldierAntsDefenseBonus",5],
    15:["territoryCostReduction",5],
    17:["territoryCostReduction",10],
    18:["territoryCostReduction",15],
    21:["territoryCostReduction",20],
    25:["territoryCostReduction",30],
    35:["soldierAntsDefenseBonus",10],
    37:["soldierAntsDefenseBonus",15],
    45:["soldierAntsDefenseBonus",20],
    46:["soldierAntsDefenseBonus",30],
    53:["territoryCostReduction",40],
    60:["soldierAntsDefenseBonus",40],
    67:["territoryCostReduction",50]};

var territoriesArray = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,25,
                        28,29,30,32,34,35,36,37,38,40,41,43,44,45,46,51,53,54,57,59,
                        60,61,64,67,69,70,71,73,75,80,82,83,84];

var technologyDict = {1:"Leaf-cutter Ants Technology Lv.1: Farmer Ants Cost Reduction- +5%",
                        4:"Harvester Ants Technology Lv.1: Farmer Ants Food Generation Speed- +5%",
                        10:"Leaf-cutter Ants Technology Lv.2: Farmer Ants Cost Reduction- +10%",
                        11:"Harvester Ants Technology Lv.2: Farmer Ants Food Generation Speed- +10%",
                        29:"Harvester Ants Technology Lv.3: Farmer Ants Food Generation Speed- +15%",
                        44:"Leaf-cutter Ants Technology Lv.3: Farmer Ants Cost Reduction- +15%",
                        51:"Harvester Ants Technology Lv.4: Farmer Ants Food Generation Speed- +20%",
                        59:"Leaf-cutter Ants Technology Lv.4: Farmer Ants Cost Reduction- +25%",
                        64:"Harvester Ants Technology Lv.5: Farmer Ants Food Generation Speed- +30%",
                        73:"Harvester Ants Technology Lv.6: Farmer Ants Food Generation Speed- +40%",
                        82:"Harvester Ants Technology Lv.7: Farmer Ants Food Generation Speed- +50%",
                        2:"Field Ants Technology Lv.1: Worker Ants Food Generation Speed- +5%",
                        5:"Thief Ants Technology Lv.1: Worker Ants Cost Reduction- +5%",
                        7:"Carpenter Ants Technology Lv.1: Worker Ants Food Generation Speed- +10%",
                        9:"Acrobat Ants Technology Lv.1: Worker Ants Cost Reduction- +10%",
                        22:"Thief Ants Technology Lv.2: Worker Ants Cost Reduction- +15%",
                        23:"Carpenter Ants Technology Lv.2: Worker Ants Food Generation Speed- +15%",
                        28:"Field Ants Technology Lv.2: Worker Ants Food Generation Speed- +20%",
                        30:"Pharaoh Ants Technology Lv.1: Worker Ants Cost Reduction- +20%",
                        32:"Field Ants Technology Lv.3: Worker Ants Food Generation Speed- +25%",
                        34:"Acrobat Ants Technology Lv.2: Worker Ants Cost Reduction- +25%",
                        36:"Carpenter Ants Technology Lv.3: Worker Ants Food Generation Speed- +30%",
                        38:"Carpenter Ants Technology Lv.4: Worker Ants Food Generation Speed- +35%",
                        41:"Thief Ants Technology Lv.3: Worker Ants Cost Reduction- +30%",
                        53:"Field Ants Technology Lv.4: Worker Ants Food Generation Speed- +40%",
                        57:"Thief Ants Technology Lv.4: Worker Ants Cost Reduction- +35%",
                        61:"Pharaoh Ants Technology Lv.2: Worker Ants Cost Reduction- +40%",
                        70:"Carpenter Ants Technology Lv.5: Worker Ants Food Generation Speed- +45%",
                        75:"Carpenter Ants Technology Lv.6: Worker Ants Food Generation Speed- +50%",
                        83:"Pharaoh Ants Technology Lv.3: Worker Ants Cost Reduction- +50%",
                        3:"Bullet Ants Technology Lv.1: Soldier Ants Cost Reduction- +5%",
                        8:"Fire Ants Technology Lv.1: Soldier Ants Attack- +5%",
                        13:"Fire Ants Technology Lv.2: Soldier Ants Attack- +10%",
                        14:"Fire Ants Technology Lv.3: Soldier Ants Attack- +15%",
                        16:"Bullet Ants Technology Lv.2: Soldier Ants Cost Reduction- +10%",
                        19:"Bullet Ants Technology Lv.3: Soldier Ants Cost Reduction- +15%",
                        20:"Bullet Ants Technology Lv.4: Soldier Ants Cost Reduction- +20%",
                        40:"Fire Ants Technology Lv.4: Soldier Ants Attack- +20%",
                        43:"Bullet Ants Technology Lv.5: Soldier Ants Cost Reduction- +30%",
                        54:"Fire Ants Technology Lv.5: Soldier Ants Attack- +25%",
                        69:"Fire Ants Technology Lv.6: Soldier Ants Attack- +30%",
                        71:"Fire Ants Technology Lv.7: Soldier Ants Attack- +40%",
                        80:"Bullet Ants Technology Lv.6: Soldier Ants Cost Reduction- +40%",
                        84:"Fire Ants Technology Lv.8: Soldier Ants Attack- +50%",
                        6:"Ghost Ants Technology Lv.1: Soldier Ants Defense- +5%",
                        15:"Argentine Ants Technology Lv.1: Territory Cost Reduction- +5%",
                        17:"Argentine Ants Technology Lv.2: Territory Cost Reduction- +10%",
                        18:"Argentine Ants Technology Lv.3: Territory Cost Reduction- +15%",
                        21:"Argentine Ants Technology Lv.4: Territory Cost Reduction- +20%",
                        25:"Argentine Ants Technology Lv.5: Territory Cost Reduction- +30%",
                        35:"Ghost Ants Technology Lv.2: Soldier Ants Defense- +10%",
                        37:"Ghost Ants Technology Lv.3: Soldier Ants Defense- +15%",
                        45:"Ghost Ants Technology Lv.4: Soldier Ants Defense- +20%",
                        46:"Ghost Ants Technology Lv.5: Soldier Ants Defense- +30%",
                        53:"Argentine Ants Technology Lv.6: Territory Cost Reduction- +40%",
                        60:"Ghost Ants Technology Lv.6: Soldier Ants Defense- +40%",
                        67:"Argentine Ants Technology Lv.7: Territory Cost Reduction- +50%"};

var techniqueCost = [];
//todo
{
//todo:
//upgrades
//bullet ants technologies in upgrades etc
//food required for upgrades
//territories required for upgrade
//region wise upgrades for powerful and precise upgrades
//help button
//battle log
}
//research
{
//info:
//attack//fire ants regions: US, China, Taiwan, Australia=> good for attack, aggression
//territory//argentine ants: Argentina, Urugway, Paragway, Bolivia, NewZealand, Europe, Japan, Hawaai
//=>good for territory expansion
//attack//bullet ants: Nicaragua, Paragway, Honduras, Columbia, Brazil, Costa Rica, Venezuela, Peru
//farmer//Harvester Ants: Mexico, US, Canada
//worker//Thief Ants: Canada to Argentina
//worker//Field Ants: Europe, America, India
//worker//Carpenter Ants: China, Arizona, India, Africa
//Territory//Ghost Ants: Florida, Hawaaai, Africa, MiddleEast => Good For: Territory Expansion
//Worker//Acrobat Ants: Florida, hot region
//Farmer//Leaf Cutter Ants: Texas
//Worker//Pharaoh Ants: Egypt, Australia, SouthEast Asia, 
//farmer Ants Achievement
//Texas, Canada, Mexico. Territories=> 1,4,10,11,29,44,51,59,64,73,82
//worker Ants Achievement
//Canada, Argentina, europe, america, india, China, Arizona, Africa, Florida, Egypt, Australia, SouthEast Asia
// Territories=>2,5,7,9,22,23,28,30,32,34,36,38,41,53,57,61,70,75,83
//territory ants
//argentina, uk, hawaai, middleeast, africa,urugway, newzealand, japan, europe,
//territories:  6,15,17,18,21,25,35,37,45,46,53,60,67
//attack ants: 3,8,13,14,16,19,20,40,43,54,69,71,80,84
//us, china, taiwan, australia, paragway, columbia, brazil, costarica, venezuela, peru, 
//result = result + int(base2 * 1.2);
}

window.onload = function(){
    populateTechniqueCost();
    //add event listner on foodpile
    id("foodpile").addEventListener("click", function(){
        food = food + (2 * (territories + 1));
        id("food").innerHTML = food;
    });

    //add event listener on farmerAnts button
    id("farmerAntsBtn").addEventListener("click", function(){
        if(food >= farmerAntCost){
            //update food and worker ants details
            food = food - farmerAntCost;
            farmerAnts = farmerAnts + 1;
            //farmerAntCost = Math.round(farmerAntCost * farmerAntsCostFactor);
            farmerAntCost = farmerAntCost + Math.round(farmerAntsBasePrice * farmerAntsCostFactor);
            //update buttons
            id("food").innerHTML = food;
            id("farmerAntsCost").innerHTML = farmerAntCost;
            id("farmerAnts").innerHTML = farmerAnts;
            updateFoodPerSecond();
        }
    });

    //add event listener on workerAnts button
    id("workerAntsBtn").addEventListener("click", function(){
        if(food >= workerAntCost){
            //update food and worker ants details
            food = food - workerAntCost;
            workerAnts = workerAnts + 1;
            //workerAntCost = Math.round(workerAntCost * workerAntsCostFactor);
            workerAntCost = workerAntCost + Math.round(workerAntsBasePrice * workerAntsCostFactor);
            //update buttons
            id("food").innerHTML = food;
            id("workerAntsCost").innerHTML = workerAntCost;
            id("workerAnts").innerHTML = workerAnts;
            updateFoodPerSecond();
        }
    });

    //add event listener on soldierAnts button
    id("soldierAntsBtn").addEventListener("click", function(){
        if(food >= soldierAntsCost){
            //update food and worker ants details
            food = food - soldierAntsCost;
            soldierAnts = soldierAnts + 1;
            //soldierAntsCost = Math.round(soldierAntsCost * soldierAntsCostFactor);
            soldierAntsCost = soldierAntsCost + Math.round(soldierAntsBasePrice * soldierAntsCostFactor);
            //update buttons
            id("food").innerHTML = food;
            id("soldierAntsCost").innerHTML = soldierAntsCost;
            id("soldierAnts").innerHTML = soldierAnts;
        }
    });
    //generic modal
    var modal = document.querySelectorAll(".modal");

    var helpModal = id("helpModal");
    var helpSpan = document.getElementsByClassName("close")[0];

    //click event listener
    id("helpBtn").addEventListener("click", function(){
        modal[0].style.display = "block";
    });

    //close event listener
    helpSpan.onclick = function(){
        modal[0].style.display = "none";
    };

    // when user cliks elsewhere, close modal
    window.onclick = function(event) {
        if (event.target == modal[0]) {
            modal[0].style.display = "none";
        }
    }

    //territories modal section
    var territoryModal = id("territoryModal");
    var territorySpan = document.getElementsByClassName("close")[1];

    var firstImg = document.getElementById("myImage");
    //click Territory event listener
    id("territoryBtn").addEventListener("click", function(){
        if(food >= territoryFoodCost && soldierAnts >= territorySoldierCost){
            //update food and worker ants details
            food = food - territoryFoodCost;
            soldierAnts = soldierAnts - territorySoldierCost;
            //territorySoldierCost = Math.round(territorySoldierCost * territorySoldierCostFactor);
            territorySoldierCost = territorySoldierCost + Math.round(territorySoldierCostBasePrice * territorySoldierCostFactor);
            //territoryFoodCost = Math.round(territoryFoodCost * territoryFoodCostFactor);
            territoryFoodCost = territoryFoodCost + Math.round(territoryFoodCostBasePrice * territoryFoodCostFactor);
            //soldierAntsCost = Math.round(soldierAntsCost * 1.3);
            territories = territories + 1;

            //update buttons
            id("food").innerHTML = food;
            id("territoryFoodCost").innerHTML = territoryFoodCost;
            id("territorySoldierCost").innerHTML = territorySoldierCost;
            id("territories").innerHTML = territories;
            id("soldierAnts").innerHTML = soldierAnts;
            
            for(let i = 1; i <= 88; i++){
                if(territories === i){
                    firstImg.src = "Territories/"+i.toString()+".png"; 
                }
            }
        }
        modal[1].style.display = "block";
    });

    //close event listener
    territorySpan.onclick = function(){
        modal[1].style.display = "none";
    };

    // when user cliks elsewhere, close modal
    window.onclick = function(event) {
        if (event.target == modal[1]) {
            modal[1].style.display = "none";
        }
    }

    //upgrades modal section
    var upgradeModal = id("upgradeModal");
    var upgradeSpan = document.getElementsByClassName("close")[2];
    
    id("costButton").addEventListener("click", function(){
        if(techniqueCost[currentUpgrade] < food && territoriesArray[currentUpgrade] <= territories){
            food = food - techniqueCost[currentUpgrade];
            id("food").innerHTML = food;
            updatePerks(currentUpgrade);
            id("upcomingUpgrade").deleteRow(0);
             // add row to upcoming upgrades
            currentUpgrade = currentUpgrade + 1;
            id("technique").textContent =  technologyDict[territoriesArray[currentUpgrade]]
            id("techniqueCost").textContent = techniqueCost[currentUpgrade];
            id("minTerritories").textContent = territoriesArray[currentUpgrade];
            addRow();
            //update perks
        }
    });

    populateUpcomingUpgrades();
    //click upgrade event listener
    id("upgradeBtn").addEventListener("click", function(){
        modal[2].style.display = "block";
    });

    //close event listener
    upgradeSpan.onclick = function(){
        modal[2].style.display = "none";
    };

    // when user cliks elsewhere, close modal
    window.onclick = function(event) {
        if (event.target == modal[2]) {
            modal[2].style.display = "none";
        }
    }

    //food generation per second
    setInterval(function(){
        food = food + Math.round(workerAnts * workerAntsFoodFactor);
        food = food + Math.round(farmerAnts * farmerAntsFoodFactor);
        id("food").innerHTML = food;
    }, 1000);

    //enemy holdup 15 minutes,
    var holdup = 1000*60*15;
    var timer = 300; //300 seconds
    var timeRemaining = timer;
    var resetFlag = false;
    var stopFlag = true;
    setInterval(function(){
        if(!stopFlag){
            if(resetFlag){
                timeRemaining = timer;
                resetFlag = false;
            }
            else {
                timeRemaining--;
                if(timeRemaining === 0){
                    id("plainWarning").innerHTML = timeConversion(timeRemaining);
                    id("enemyWarning").classList.add("hiddenWarning");
                    updateArmy();
                    stopFlag = true;
                }
            }
            id("plainWarning").textContent = timeConversion(timeRemaining);
            id("army").textContent = armyRequired;
            
        }
    },1000);

    setInterval(function(){
        stopFlag = false;
        resetFlag = true;
        setTimeout(() => {
            id("enemyWarning").classList.remove("hiddenWarning");
        }, 1001);
    },holdup);
}

//update functions
{
function updateArmy(){
    if(armyRequired > soldierAnts){
        var updatedArmy = armyRequired - soldierAnts;
        if((updatedArmy * 2) > workerAnts){
            alert("You Lost!!! Try Again.");
            resetGame();
        }
        else{
            workerAnts = workerAnts - Math.floor(updatedArmy * 2);
        }
        soldierAnts = soldierAnts - ( armyRequired - updatedArmy);
        armyRequired = Math.floor(armyRequired * 1.2);
    }
    else{
        soldierAnts = soldierAnts - armyRequired;
        armyRequired = Math.floor(armyRequired * 1.2);
    }
    id("soldierAnts").innerHTML = soldierAnts;
    id("workerAnts").innerHTML = workerAnts;
}

function updateFoodPerSecond(){
    foodPerSecond = Math.ceil(workerAnts * (workerAntsFoodFactor + (workerAntsFoodBonus / 100))) +
    Math.ceil(farmerAnts * (farmerAntsFoodFactor + (farmerAntsFoodBonus / 100)));
    id("foodpersecond").innerHTML = foodPerSecond;
}

function updatePerks(currentUpgrade){
    var technology = territoriesArray[currentUpgrade];
    var perks = perksDict[technology][0];
    var perksValue = perksDict[technology][1];
    //window[perks] = perksValue;
    switch(perks){
        case "farmerAntsCostReduction":
            farmerAntsCostReduction = perksValue;
            farmerAntCost = Math.round(farmerAntCost - Math.ceil(farmerAntCost * farmerAntsCostReduction / 100));
            id("farmerAntsCost").innerHTML = farmerAntCost;
            break;
        case "workerAntsCostReduction":
            workerAntsCostReduction = perksValue;
            workerAntCost = Math.round(workerAntCost - Math.ceil(workerAntCost * workerAntsCostReduction / 100));
            id("workerAntsCost").innerHTML = workerAntCost;
            break;
        case "soldierAntsCostReduction":
            soldierAntsCostReduction = perksValue;
            soldierAntsCost = Math.round(soldierAntsCost - Math.ceil(soldierAntsCost * soldierAntsCostReduction / 100));
            id("soldierAntsCost").innerHTML = soldierAntsCost;
            break;
        case "territoryCostReduction":
            territoryCostReduction = perksValue;
            territorySoldierCost = Math.round(territorySoldierCost - Math.ceil(territorySoldierCost * territoryCostReduction / 100));
            territoryFoodCost = Math.round(territoryFoodCost - Math.ceil(territoryFoodCost * territoryCostReduction / 100));
            
            id("territoryFoodCost").innerHTML = territoryFoodCost;
            id("territorySoldierCost").innerHTML = territorySoldierCost;
            break;
        case "farmerAntsFoodBonus":
            farmerAntsFoodBonus = perksValue;
            updateFoodPerSecond();
            break;
        case "workerAntsFoodBonus":
            workerAntsFoodBonus = perksValue;
            updateFoodPerSecond();
            break;
        case "soldierAntsAttackBonus":
            soldierAntsAttackBonus = perksValue;
            territorySoldierCost = Math.round(territorySoldierCost - Math.ceil(territorySoldierCost * soldierAntsAttackBonus / 100));
            id("territorySoldierCost").innerHTML = territorySoldierCost;
            break;
        case "soldierAntsDefenseBonus":
            soldierAntsDefenseBonus = perksValue;
            armyRequired = Math.round(armyRequired - Math.ceil(armyRequired * soldierAntsDefenseBonus / 100));
            break;
        default:
    }
}
}
//helper functions
function id(id){
    return document.getElementById(id);
}

function addRow(){
    if(currentUpgrade + 10 < territoriesArray.length){
        var table = id("upcomingUpgrade");
        
        var row = table.insertRow(9);
        row.id = "upgradeRow";
        
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        
        td1.id = "name";
        td2.id = "cost";
        td1.innerHTML = technologyDict[territoriesArray[currentUpgrade+10]];
        td2.innerHTML = "Food: "+techniqueCost[currentUpgrade+10]+"\n Territories: "+territoriesArray[currentUpgrade+10].toString();
    }
    
}

function populateTechniqueCost(){
    for(let index = 0; index < territoriesArray.length; index++){
        techniqueCost.push(territoriesArray[index] * upgradeFood);
    }
}

function populateUpcomingUpgrades(){
    var table = id("upcomingUpgrade");
   /* var rowCount = 0;
    var row = table.insertRow(rowCount);

    var td1 = row.insertCell(0);
    var td2 = row.insertCell(1);

    td1.id = "name";
    td2.id = "cost";

    td1.innerHTML = "Leaf-cutter Ants Technique: Food Generation(Farmer Ants) Bonus- 5%";
    td2.innerHTML = "Food: 1000\n Territories: 2";*/

    for(let rowCount = 0; rowCount < 10; rowCount++){
        
        var row = table.insertRow(rowCount);
        row.id = "upgradeRow";
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);

        td1.id = "name";
        td2.id = "cost";

        td1.innerHTML = technologyDict[territoriesArray[currentUpgrade+1+rowCount]];
        td2.innerHTML = "Food: "+techniqueCost[currentUpgrade+1+rowCount]+"\n Territories: "+territoriesArray[currentUpgrade+1+rowCount].toString();
    }
}

function timeConversion(time){
    let minutes = Math.floor(time/60);
    if(minutes < 10) minutes = "0" + minutes;
    let seconds = time % 60;
    if(seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}
