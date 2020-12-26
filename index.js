const data = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

var toppings = [];
var ids = [];
var batters = [];
var batteryids = [];
var toppingsids = [];
var ppu = [];

for(var i = 0 ; i< data.length; i++){
	ids.push(data[i].id);
	ppu.push(data[i].ppu);
	for(var j = 0; j<(data[i].batters.batter.length);j++){
		batters.push((Object.values(data[i].batters.batter[j].type)).join(""));
		batteryids.push((Object.values(data[i].batters.batter[j].id)).join(""));
}
	for(var k =0; k<(data[i].topping.length); k++){
		toppings.push(data[i].topping[k].type);
		toppingsids.push(data[i].topping[k].id);
	}
}


printToCon("toppings: ",toUnique(toppings));
printToCon("topping id's: ",toUnique(toppingsids));
printToCon("batters: ",toUnique(batters));
printToCon("batters id's: ",toUnique(batteryids));
console.log("ppu average:"+getArraySum(ppu)/ppu.length);
console.log("ppu sum: "+getArraySum(ppu));
printToCon("Data id's: ",toUnique(ids));






function toUnique(array){               //array,placeholder,placeholder
	let uniqe = [...new Set(array)];
	return uniqe;
   }



  function printToCon(stringe,arrayb){
	var res = ', ';
	var array_content = '';
	for (i = 0; i < arrayb.length; i++)
	  array_content = array_content + arrayb[i] + res;
  
	console.log(stringe,array_content);
  }

  function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}
