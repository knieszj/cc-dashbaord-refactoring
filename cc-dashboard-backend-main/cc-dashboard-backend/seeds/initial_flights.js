
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {flight_id: 1, flight_name: 'Alpha', squadron_assigned_to: null},
        {flight_id: 2, flight_name: 'Bravo', squadron_assigned_to: null},
        {flight_id: 3, flight_name: 'Charlie', squadron_assigned_to: null},
        {flight_id: 4, flight_name: 'Delta', squadron_assigned_to: null},
        {flight_id: 5, flight_name: 'Echo', squadron_assigned_to: null},
      ]);
    });
};
