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
  {
    category: "wearables",
    id: 9,
    items: [
      "Fitbit Charge 5",
      "Garmin Forerunner 945",
      "Apple Watch SE",
      "Samsung Galaxy Fit 2",
    ],
  },
  {
    category: "audio",
    id: 10,
    items: [
      "Sony WH-XB900N",
      "Jabra Elite 85t",
      "Bose SoundSport Free",
      "Sennheiser HD 660 S",
    ],
  },
  {
    category: "desktop",
    id: 11,
    items: [
      "HP Pavilion Desktop",
      "Acer Aspire TC",
      "Dell Inspiron 27",
      "Lenovo IdeaCentre 5",
    ],
  },
  {
    category: "cameraAccessories",
    id: 12,
    items: [
      "Manfrotto Tripod",
      "SanDisk Extreme Pro SD Card",
      "Peak Design Camera Strap",
      "Godox V860II Flash",
    ],
  },
  {
    category: "fitnessEquipment",
    id: 13,
    items: [
      "Peloton Bike",
      "Bowflex SelectTech Dumbbells",
      "Fitbit Inspire 2",
      "Yoga Mat",
    ],
  },
  {
    category: "officeSupplies",
    id: 14,
    items: [
      "Desk Organizer",
      "Ergonomic Chair",
      "HP LaserJet Printer",
      "Moleskine Notebook",
    ],
  },
  {
    category: "outdoorGear",
    id: 15,
    items: [
      "Tent",
      "Backpack",
      "Hiking Boots",
      "Sleeping Bag",
    ],
  },
  {
    category: "gadgets",
    id: 16,
    items: [
      "Tile Mate",
      "Anker PowerCore",
      "Raspberry Pi",
      "GoPro Hero 9",
    ],
  },
  {
    category: "furniture",
    id: 17,
    items: [
      "Sofa",
      "Dining Table",
      "Bed",
      "Bookshelf",
    ],
  },
  {
    category: "appliances",
    id: 18,
    items: [
      "Refrigerator",
      "Washing Machine",
      "Microwave",
      "Toaster",
    ],
  },
  {
    category: "clothing",
    id: 19,
    items: [
      "T-Shirt",
      "Jeans",
      "Dress",
      "Sneakers",
    ],
  },
  {
    category: "books",
    id: 20,
    items: [
      "Fiction",
      "Non-Fiction",
      "Mystery",
      "Science Fiction",
    ],
  },
  {
    category: "sportsGear",
    id: 21,
    items: [
      "Running Shoes",
      "Basketball",
      "Yoga Mat",
      "Fitness Tracker",
    ],
  },
  {
    category: "techAccessories",
    id: 22,
    items: [
      "Wireless Mouse",
      "Phone Stand",
      "Laptop Sleeve",
      "USB-C Cable",
    ],
  },
  {
    category: "gardeningTools",
    id: 23,
    items: [
      "Pruning Shears",
      "Watering Can",
      "Garden Gloves",
      "Potting Soil",
    ],
  },
  {
    category: "travelEssentials",
    id: 24,
    items: [
      "Travel Pillow",
      "Luggage Set",
      "Travel Adapter",
      "Portable Charger",
    ],
  },
  {
    category: "petSupplies",
    id: 25,
    items: [
      "Dog Food",
      "Cat Litter",
      "Pet Bed",
      "Collar and Leash",
    ],
  },
  {
    category: "officeFurniture",
    id: 26,
    items: [
      "Office Desk",
      "Ergonomic Chair",
      "Bookshelf",
      "Filing Cabinet",
    ],
  },
  {
    category: "fitnessAccessories",
    id: 27,
    items: [
      "Resistance Bands",
      "Yoga Block",
      "Exercise Ball",
      "Jump Rope",
    ],
  },
  {
    category: "homeDecor",
    id: 28,
    items: [
      "Wall Art",
      "Throw Pillows",
      "Candles",
      "Rug",
    ],
  },
  {
    category: "DIYTools",
    id: 29,
    items: [
      "Power Drill",
      "Screwdriver Set",
      "Measuring Tape",
      "Toolbox",
    ],
  },
  {
    category: "musicalInstruments",
    id: 30,
    items: [
      "Acoustic Guitar",
      "Keyboard",
      "Drum Set",
      "Microphone",
    ],
  },
  {
    category: "outdoorFurniture",
    id: 31,
    items: [
      "Patio Set",
      "Sun Umbrella",
      "Adirondack Chair",
      "Hammock",
    ],
  },
  {
    category: "carAccessories",
    id: 32,
    items: [
      "Car Phone Mount",
      "Seat Covers",
      "Dash Cam",
      "Car Organizer",
    ],
  },
  {
    category: "smartHomeDevices",
    id: 33,
    items: [
      "Smart Bulbs",
      "Smart Thermostat",
      "Smart Doorbell",
      "Security Camera",
    ],
  },
  {
    category: "babyGear",
    id: 34,
    items: [
      "Stroller",
      "Baby Monitor",
      "Diaper Bag",
      "High Chair",
    ],
  },
];



const input = document.querySelector(".input");
const showResult = document.querySelector(".unordedList");
const Items = document.querySelector(".items");
function clearPrevious(tagName) {
  tagName.innerHTML = "";
}

function filterList(value) {

  // let filter = data.filter((values) => {
  //   return values.category.includes(value) && value !== "";
  // });
  let filter = data.filter(category => {
    return category.category.toLowerCase().startsWith(value.toLowerCase()) && value !== "" ;
  });
  
  console.log(filter);
  
  createList(filter);
}

function createList(filteredData) {
  const listItems = filteredData.map((element) => `<li onclick="itemCatogory(${element.id})"><a>${element.category}</a></li>`).join("");
  showResult.innerHTML = listItems;
}

function itemCatogory(index_) {
  clearPrevious(Items);
  input.value = ""
  clearPrevious(showResult);
  const items = data[index_].items;
  items.forEach((item) => {
    let spans = document.createElement("span");
    spans.textContent = item;
    Items.appendChild(spans);
  });
}

input.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let value = inputValue.trim().toLowerCase();
  clearPrevious(showResult);
  filterList(value);
});
