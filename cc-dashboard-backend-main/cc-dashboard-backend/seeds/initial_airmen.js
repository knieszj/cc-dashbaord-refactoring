exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('airmen').del()
        .then(function () {
            // Inserts seed entries
            return knex('airmen').insert([
                {airmen_id: 1, first_name: 'Adele', last_name: 'Calvert', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 1},
                {airmen_id: 2, first_name: 'Jamil', last_name: 'Lloyd', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 1},
                {airmen_id: 3, first_name: 'Austen', last_name: 'Hills', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 1},
                {airmen_id: 4, first_name: 'Osman', last_name: 'Mueller', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 1},
                {airmen_id: 5, first_name: 'Darcey', last_name: 'Kearney', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 2},
                {airmen_id: 6, first_name: 'Tyra', last_name: 'Simons', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 2},
                {airmen_id: 7, first_name: 'Vanesa', last_name: 'Ferrell', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 2},
                {airmen_id: 8, first_name: 'Ronald', last_name: 'Johns', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: false, flight_assigned_to: 2},
                {airmen_id: 9, first_name: 'Isabella', last_name: 'Appleton', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 3},
                {airmen_id: 10, first_name: 'Jayda', last_name: 'Eaton', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 3},
                {airmen_id: 11, first_name: 'Lawrence', last_name: 'Hahn', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 3},
                {airmen_id: 12, first_name: 'Zoe', last_name: 'Owens', adls_training: true, physical_fitness_test: true, medical_readiness: false, evaluations: false, flight_assigned_to: 3},
                {airmen_id: 13, first_name: 'Mindy', last_name: 'Guevara', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 4},
                {airmen_id: 14, first_name: 'Alima', last_name: 'Blackmore', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 4},
                {airmen_id: 15, first_name: 'Athena', last_name: 'Wicks', adls_training: true, physical_fitness_test: false, medical_readiness: false, evaluations: false, flight_assigned_to: 4},
                {airmen_id: 16, first_name: 'Vijay', last_name: 'Merrill', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 5},
                {airmen_id: 17, first_name: 'Jordon', last_name: 'Goddard', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 5},
                {airmen_id: 18, first_name: 'Cheyanne', last_name: 'Merrill', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 5},
                {airmen_id: 19, first_name: 'Devonte', last_name: 'Combs', adls_training: true, physical_fitness_test: true, medical_readiness: true, evaluations: true, flight_assigned_to: 5},
                {airmen_id: 20, first_name: 'Jose', last_name: 'Ferreira', adls_training: true, physical_fitness_test: false, medical_readiness: false, evaluations: false, flight_assigned_to: 5},
            ]);
        });
};
