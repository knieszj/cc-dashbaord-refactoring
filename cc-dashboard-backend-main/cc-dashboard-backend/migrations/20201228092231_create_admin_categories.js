
exports.up = function(knex) {
  return knex.schema.createTable('admin_categories', table =>{
      table.increments('admin_categories_id').primary();
      table.integer('admin_category_airmen').references('airmen_id').inTable('airmen');
      table.boolean('adls_training');
      table.boolean('physical_fitness_test');
      table.boolean('medical_readiness');
      table.boolean('evaluations');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('admin_categories')
};
