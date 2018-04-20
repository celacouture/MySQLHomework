const mysql=require('mysql');
const inquirer=require('inquirer');
const Table=require('cli-table');


let connection =mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password:"",
  database:"bamazon"
});
connection.connect(function(err) {
	if (err) throw err;
  displayInventory();
});

function displayInventory() {
  var table = new Table({
    head: ['Item ID', 'Product Name', 'Price', 'Department',]
  });

  var tableArray = [];
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res){
    for (i = 0; i < res.length; i++) {
      tableArray.push([res[i].item_id, res[i].product_name, '$ ' +res[i].price, res[i].department_name]);
    }

    for (i= 0; i < res.length; i++) {
      table.push(tableArray[i]);
    }

    console.log(table.toString());
    selectProduct();
  });
}

function selectProduct(){
  inquirer.prompt([
    {
    name:"itemID",
    type: "input",
    message:"What is the Item ID of the product you would like to buy?",
    validate:function(value){
      if(isNaN(value)===false){
        return true;
      }
      return false;
    }
  },
  {
    name:"quantity",
    type:"input",
    message:"How many would you like to purchase?",
    validate:function(value){
      if(isNaN(value)===false){
        return true;
      }
      return false;
    }
  }
])
.then(function(answer){
  let query='SELECT * FROM products WHERE ?';
  connection.query(query, {item_id: answer.itemID}, function(err, res){
    if(err) throw err;
    if(answer.quantity<=res[0].stock_quantity){
      let updateQuantity=res[0].stock_quantity-answer.quantity;
      let queryTwo= 'UPDATE products SET ? WHERE ?';
      connection.query(queryTwo, [{ stock_quantity: updateQuantity }, { item_id: answer.id }], function(err, res) {
            console.log(answer.id);
            if(err) throw err;
          })
        console.log("Thank you for your purchase your total is $ " + (res[0].price*answer.quantity));
        console.log('There are ' +updateQuantity+ ' ' +res[0].product_name+ 's left in stock');

    }
    else{
      console.log("The item you have requested is no longer in stock. Please select another item");

    }
      connection.end();
  });
});

}


//   checkInventory(answers.itemID, answers.quantity);
// });
// };
//
// function checkInventory(itemID, quantity) {
//   console.log("Checking availability...");
//
//   var query = "SELECT stock_quantity FROM products WHERE ?";
//
//   connection.query(query, {item_id: answers.itemID}, function(err, res){
//
//       if(res.stock_quantity >= answers.quantity) {
//         console.log("We have availability! Purchasing now!");
//         // buyProduct(itemID, quantity);
//       } else {
//         console.log("Insufficient quantity!");
//         connection.end();
//       };
//   });
// };
