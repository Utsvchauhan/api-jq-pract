<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
    <link rel="stylesheet" href="src/index.css">
  </head>
  <body>
    <div class="flex justify-end p-2">
      <button class="bg-indigo-700 text-white font-bold rounded p-1" onclick="ShowStorage()">Go to Cart</button>
    </div>
    <div id="res"></div>
    <script>
      let file = 'api.json';
      fetch(file)
        .then(data => data.json())
        .then(data => pro(data))
  
      var product;
      function pro(data) {
        product = data["products"];
        let result = '<div class="grid grid-cols-4 gap-2">'
        let x = 0;
        for (let i of product) {
          result += '<div class="grid-col"><div class="border rounded border-red-600 p-3 m-2">'
          result += '<div> name : ' + i['Name'] + '</div>';
          result += '<div> price : ' + i['Price'] + '</div>';
          result += '<div> location : ' + i['Location'] + '</div>';
          result += '<button class="bg-green-500 text-white rounded p-1" onclick="add(' + x + ')">Add to Cart</button></div></div>'
          x += 1;
        }
        result += '</div>';
        document.getElementById("res").innerHTML = result;
      }
      var store = [];
      function add(x) {
        let find = product[x];
        store.push(find);
      }
      function ShowStorage(){
        localStorage.setItem('store', JSON.stringify(store));
        var show = JSON.parse(localStorage.getItem('store'));
        console.log(show); 
      }
  
    </script>
  </body>
  
</html>
