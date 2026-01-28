'use strict';

const { UPDATE } = require("sequelize/lib/query-types");

module.exports = {
  // email: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   address: DataTypes.STRING,
  //   gender: DataTypes.BOOLEAN,
  //   roleId: DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Ninh',
      lastName: 'Huy',
      address: 'VN',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
