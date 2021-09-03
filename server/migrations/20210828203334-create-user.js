'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone_num: {
        type: Sequelize.STRING,
      },
      providers: {
        type: Sequelize.JSONB,
      },
      photo: {
        type: Sequelize.STRING,
      },
      services: {
        type: Sequelize.JSONB,
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

    // await queryInterface.createTable('Providers', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   user_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model:'Users',
    //       key: 'id'
    //     }
    //   },
    //   alias: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   name: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   image_url: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   url: {
    //     type: Sequelize.TEXT,
    //   },
    //   review_count: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   categories: {
    //     type: Sequelize.JSONB
    //   },
    //   rating: {
    //     type: Sequelize.NUMERIC,
    //   },
    //   coordinates: {
    //     type: Sequelize.JSONB
    //   },
    //   location: {
    //     type: Sequelize.JSONB
    //   },
    //   phone_num: {
    //     type: Sequelize.TEXT,
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};