
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin_categories').insert([
        {admin_categories_id: 1, admin_category_airmen: 1, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 2, admin_category_airmen: 2, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 3, admin_category_airmen: 3, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 4, admin_category_airmen: 4, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 5, admin_category_airmen: 5, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 6, admin_category_airmen: 6, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 7, admin_category_airmen: 7, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 8, admin_category_airmen: 8, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: false},
        {admin_categories_id: 9, admin_category_airmen: 9, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 10, admin_category_airmen: 10, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 11, admin_category_airmen: 11, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 12, admin_category_airmen: 12, adls_training: true, physical_fitness_test: true, medical_readiness: false, evaluations: false},
        {admin_categories_id: 13, admin_category_airmen: 13, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 14, admin_category_airmen: 14, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 15, admin_category_airmen: 15, adls_training: true, physical_fitness_test: false, medical_readiness: false, evaluations: false},
        {admin_categories_id: 16, admin_category_airmen: 16, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 17, admin_category_airmen: 17, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 18, admin_category_airmen: 18, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 19, admin_category_airmen: 19, adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true},
        {admin_categories_id: 20, admin_category_airmen: 20, adls_training: true, physical_fitness_test: false, medical_readiness: false, evaluations: false},
      ]);
    });
};
