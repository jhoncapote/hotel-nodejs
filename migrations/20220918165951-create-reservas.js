'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
     reservas_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
      },
      habitacion: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Habitaciones'
          },
          key: 'id_habitaciones'
        },
        allowNull: false
      },
      huesped: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Huespedes'
          },
          key: 'id_huespe'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};