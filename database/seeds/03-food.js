
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
       {food_name: 'Spinach', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 1},
       {food_name: 'Chickpea ', food_type: 'meat', date: '01-06-2020', 'kid_id': 1},
       {food_name: 'Swordfish ', food_type: 'meat', date: '01-06-2020', 'kid_id': 2},
       {food_name: 'Pineapple ', food_type: 'fruit', date: '01-06-2020', 'kid_id': 2},
       {food_name: 'Frangelico', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 3},
       {food_name: 'Monkfish ', food_type: 'meat', date: '01-06-2020', 'kid_id': 4},
       {food_name: 'pie', food_type: 'dessert', date: '01-06-2020', 'kid_id': 4},
       {food_name: 'salad', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 4},
       {food_name: ' chicken soup', food_type: 'meat', date: '01-06-2020', 'kid_id': 5},
       {food_name: 'mangosteen salad', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 5},
       {food_name: ' tubetti salad', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 6},
       {food_name: 'mushroom parcels', food_type: 'vegetables', date: '01-06-2020', 'kid_id': 6},
      ]);
    });
};
