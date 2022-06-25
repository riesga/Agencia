'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('testimoniales', [{
      nombre: 'Ricardo',      
      correo: 'example@example.com',
      mensaje: 'Excelente, lo recomiendo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Georgina',      
      correo: 'gina@example.com',
      mensaje: 'Otro testimonial',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('testimoniales', null, {});
  }
};
