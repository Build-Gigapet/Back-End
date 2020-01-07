
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('kids').insert([
        {kid_name: 'Florence', age: '3', pet_name: 'socks', score: '12', height: '94cm', fav_food: 'pizza', weight: '23 lbs', parent_id: '1'},
        {kid_name: 'Katy', age: '5', pet_name: 'Henri', score: '40', height: '107cm', fav_food: 'Jalapeno ', weight: '31 lbs', parent_id: '1'},
        {kid_name: 'Rachel', age: '4', pet_name: 'Henrietta', score: '10', height: '39cm', fav_food: 'Cheddar ', weight: '34 lbs', parent_id: '2'},
        {kid_name: 'Antonia ', age: '5', pet_name: 'Grubby', score: '3', height: '109cm', fav_food: 'pancake', weight: '40 lbs', parent_id: '3'},
        {kid_name: 'Annabelle', age: '3', pet_name: 'Trueworth', score: '29', height: '98cm', fav_food: 'Chicken ', weight: '35 lbs', parent_id: '4'},
        {kid_name: 'Charlotte', age: '6', pet_name: 'Authentic', score: '34', height: '115cm', fav_food: 'Rosemary ', weight: '44 lbs', parent_id: '4'},
      ]);
    });
};
