'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert(
        'Users',
        [
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'doe@hotmail.com',
            phone_num: '123456789',
            providers: [{
              "name": "Dell 123 Laptop Computer",
              "price": 1300
            },
             {
              "name": "Mechanical Keyboard",
              "price": 120
            }
            ],
            photo: 'url',
            services: [{
              "name": "Dell 123 Laptop Computer",
              "price": 1300
            },
             {
              "name": "Mechanical Keyboard",
              "price": 120
            }],
            createdAt: new DATE(),
            updatedAt: new DATE(),
         },
         {
          id: 2,
          first_name: 'John',
          last_name: 'Doe',
          email: 'doenn@hotmail.com',
          phone_num: '123456789',
          providers: [{
            "name": "Mac Laptop Computer",
            "price": 1300
          },
           {
            "name": "Electrical Keyboard",
            "price": 120
          }
          ],
          photo: 'url',
          services: [{
            "name": "Dell 123 Laptop Computer",
            "price": 1300
          },
           {
            "name": "Mechanical Keyboard",
            "price": 120
          }],
          createdAt: new DATE(),
          updatedAt: new DATE(),
       }
        ],
      {}
    ),

  //   await queryInterface.bulkInsert(
  //     'Providers',
  //     [
  //       {
  //           id: 1,
  //           user_id: 1,
  //           alias: 'the few the proud the brave',
  //           name: 'John',
  //           image_url: 'Doe',
  //           url: 'doe@hotmail.com',
  //           review_count: '123456789',
  //           categories: [{'s':'all for one'}, {'w':'one for all'}],
  //           rating: 2.5,
  //           coordinates: [{'s':'all for one'}, {'w':'one for all'}],
  //           location: [{'k':'all for one'}, {'j':'one for all'}],
  //           createdAt: new DATE(),
  //           updatedAt: new DATE(),
  //       },
  //       {
  //           id: 2,
  //           user_id: 2,
  //           alias: 'the few the proud the brave',
  //           name: 'John',
  //           image_url: 'Doe',
  //           url: 'doejane@hotmail.com',
  //           review_count: '123456789'0,
  //           categories: [{'e':'all for one'}, {'g':'one for all'}],
  //           rating: 4,
  //           coordinates: [{'p':'all for one'}, {'v':'one for all'}],
  //           location: [{'q':'all for one'}, {'b':'one for all'}],
  //           createdAt: new DATE(),
  //           updatedAt: new DATE(),
  //       },
  //     ],
  //     {}
  //  );
  // },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
