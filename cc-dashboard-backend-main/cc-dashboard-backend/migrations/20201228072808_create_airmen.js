exports.up = function (knex) {
    return knex.schema.createTable('airmen', table => {
        table.increments('airmen_id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('adls_training');
        table.string('physical_fitness_test');
        table.string('medical_readiness');
        table.string('evaluations');
        table.integer('flight_assigned_to');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('airmen')
};
