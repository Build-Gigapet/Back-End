
exports.up = function(knex) {
  return knex.schema.createTable('kids', table =>{
      table.increments();

      table.string('name', 50).notNullable();

      table.integer('age', 3).notNullable();

      table.string('pet_name', 50).notNullable();

      table.integer('score', 1000)

      table.string('height', 10);

      table.string('fav_food', 70);

      table.string('weight', 10);

      table.integer('parent_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('kids');
};
