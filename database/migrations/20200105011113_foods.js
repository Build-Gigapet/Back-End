
exports.up = function(knex) {
    return knex.schema.createTable('foods', table =>{
        table.increments();

        table.string('food_name', 100).notNullable();

        table.string('food_type', 100).notNullable();

        table.date('date').notNullable();

        table.integer('kid_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('kids')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('foods');
};
