exports.up = function (knex) {
    return knex.schema.alterTable('airmen', table => {
      table.boolean('adls_training').alter();
      table.boolean('physical_fitness_test').alter();
      table.boolean('medical_readiness').alter();
      table.boolean('evaluations').alter();
      table.integer('flight_assigned_to').references('flight_id').inTable('flights').alter();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('airmen')
};
