exports.up = function (knex) {
    return knex.schema.createTable('flights', table => {
      table.increments('flight_id').primary();
      table.string('flight_name');
      table.integer('squadron_assigned_to')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('flights')
};
