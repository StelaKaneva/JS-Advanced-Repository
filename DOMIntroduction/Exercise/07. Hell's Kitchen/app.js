function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //1. Select elements for input
      let textAreaElement = document.querySelector('#inputs textarea');

      //2. Extract/Parse input data

      let text = textAreaElement.value;
      let inputArr = JSON.parse(text);
      //3. Add object to keep restaurant and workers data

      let restaurants = {};
      //4. Fill restaurant object with input data

      for (let index = 0; index < inputArr.length; index++) {
         let[restaurantName, workersString] = inputArr[index].split(' - ');
         let inputWorkers = workersString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
         });

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               workers: [],
               restaurantName: restaurantName,
               getAverageSalary: function() { return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length}
            };
         }

         restaurants[restaurantName].workers = restaurants[restaurantName].workers
               .concat(inputWorkers);
      }
      //5. Calculate best restaurant

      let sortedRestaurants = Object.values(restaurants)
         .sort((a, b) => b.getAverageSalary() - a.getAverageSalary());
      let bestRestaurant = sortedRestaurants[0];
      let sortedWorkers = bestRestaurant.workers
         .sort((a, b) => b.salary - a.salary);
      let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);
      let bestSalary = sortedWorkers[0].salary.toFixed(2);
      let bestRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      let workersString = sortedWorkers
         .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
         .join(' ');
      //6. Insert best restaurant and workers data into DOM

      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let workersElement = document.querySelector('#workers p');
      
      bestRestaurantElement.textContent = bestRestaurantString;
      workersElement.textContent = workersString;
   }
}