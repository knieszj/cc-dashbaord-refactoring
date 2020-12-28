exports.up = function (knex) {
    return knex.schema.alterTable('airmen', table => {
      table.dropColumns('adls_training', 'physical_fitness_test','medical_readiness','evaluations');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('airmen')
};
