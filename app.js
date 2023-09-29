let data = [
    { category: 'mobile', items: ["iPhone 12", 'Samsung Galaxy S21', 'Realme 8', 'Google Pixel 5', 'OnePlus 9'] },
    { category: 'laptop', items: ['Infinix X1 Slim', 'MacBook Pro', 'HP Spectre x360', 'Dell XPS 13', 'Lenovo ThinkPad X1 Carbon'] },
    { category: 'tablet', items: ['iPad Pro', 'Samsung Galaxy Tab S7', 'Amazon Fire HD', 'Microsoft Surface Go'] },
    { category: 'smartwatch', items: ['Apple Watch Series 6', 'Samsung Galaxy Watch 4', 'Fitbit Versa 3', 'Garmin Venu'] },
    { category: 'camera', items: ['Canon EOS R5', 'Sony Alpha A7III', 'Nikon Z6', 'Fujifilm X-T4'] },
    { category: 'headphones', items: ['AirPods Pro', 'Sony WH-1000XM4', 'Bose QuietComfort 35 II', 'JBL Free X'] },
    { category: 'homeAppliance', items: ['Roomba i7+', 'Nest Learning Thermostat', 'Instant Pot Duo', 'Dyson V11'] },
    { category: 'gamingConsole', items: ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'PC Gaming Rig'] },
    { category: 'kitchenAppliance', items: ['KitchenAid Stand Mixer', 'Vitamix Blender', 'Cuisinart Food Processor', 'Instant Pot Duo'] }
  ];



const input = document.querySelector(".input");
const showResult = document.querySelector(".unordedList");

function clearPrevious(){
    showResult.innerHTML = ''
}

function filterList(value){
    let filter = data.filter((values)=>{
       if(values.category.includes(value) && value !== ''){
        return values
       }
    })
    createList(filter)
}

function createList(filteredData){
   filteredData.forEach((data)=>{
   showResult.innerHTML = filteredData.map(element => `<li><a>${element.category}</a></li>`)
   })
}

input.addEventListener('input', (e)=>{
    let inputValue = e.target.value
    console.log(inputValue);
    let value = inputValue.trim().toLowerCase();
    clearPrevious()
    filterList(value)

})