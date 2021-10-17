function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let bestRestaurantElement = document.querySelector('#bestRestaurant p');
   let workersElement = document.querySelector('#workers p');


   function onClick() {
      let array = JSON.parse(input.value);

      let restaurants = {};

      array.forEach((line) => {
         let tokens = line.split(' - ');
         let name = tokens[0];
         let workersString = tokens[1].split(', ');
         let workers = [];

         for (let worker of workersString) {
            let workerTokens = worker.split(' ');
            let salary = Number(workerTokens[1]);
            workers.push({
               name: workerTokens[0],
               salary: salary
            })
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);

         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }

            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      let bestRestaurantName = bestRestaurant.name;
      let avgSalary = bestRestaurant.averageSalary.toFixed(2);
      let bstSalary = bestRestaurant.bestSalary.toFixed(2);
      bestRestaurantElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${avgSalary} Best Salary: ${bstSalary}`;
      
      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      })
      workersElement.textContent = workersResult.join(' ');
   }
}