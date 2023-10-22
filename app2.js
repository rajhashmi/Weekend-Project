let data = [
    {
      category: "mobile",
      id: 0,
      items: [
        "iPhone 12",
        "Samsung Galaxy S21",
        "Realme 8",
        "Google Pixel 5",
        "OnePlus 9",
      ],
    },
    {
      category: "laptop",
      id: 1,
      items: [
        "Infinix X1 Slim",
        "MacBook Pro",
        "HP Spectre x360",
        "Dell XPS 13",
        "Lenovo ThinkPad X1 Carbon",
      ],
    },
    {
      category: "tablet",
      id: 2,
      items: [
        "iPad Pro",
        "Samsung Galaxy Tab S7",
        "Amazon Fire HD",
        "Microsoft Surface Go",
      ],
    },
    {
      category: "smartwatch",
      id: 3,
      items: [
        "Apple Watch Series 6",
        "Samsung Galaxy Watch 4",
        "Fitbit Versa 3",
        "Garmin Venu",
      ],
    },
    {
      category: "camera",
      id: 4,
      items: ["Canon EOS R5", "Sony Alpha A7III", "Nikon Z6", "Fujifilm X-T4"],
    },
    {
      category: "headphones",
      id: 5,
      items: [
        "AirPods Pro",
        "Sony WH-1000XM4",
        "Bose QuietComfort 35 II",
        "JBL Free X",
      ],
    },
    {
      category: "homeAppliance",
      id: 6,
      items: [
        "Roomba i7+",
        "Nest Learning Thermostat",
        "Instant Pot Duo",
        "Dyson V11",
      ],
    },
    {
      category: "gamingConsole",
      id: 7,
      items: [
        "PlayStation 5",
        "Xbox Series X",
        "Nintendo Switch",
        "PC Gaming Rig",
      ],
    },
    {
      category: "kitchenAppliance",
      id: 8,
      items: [
        "KitchenAid Stand Mixer",
        "Vitamix Blender",
        "Cuisinart Food Processor",
        "Instant Pot Duo",
      ],
    },
  ];


  const input = document.querySelector(".input");
const showResult = document.querySelector(".unordedList");
const Items = document.querySelector(".items");


function clearPrevious(tagName) {
    tagName.innerHTML = "";
}

function filterList(inputValue){
   for(const [index, { category, id, items }] of data.entries()){
    console.log(index, category, id, items)


    
   }
}
 
  
  

  input.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    let value = inputValue.trim().toLowerCase();
    console.log(value)
    clearPrevious(showResult);
    filterList(value);
  });
  