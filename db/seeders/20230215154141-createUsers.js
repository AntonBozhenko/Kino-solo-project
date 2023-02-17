module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Anton88',
        email: 'Anton88@mail.ru',
        password: '$2b$10$JW6Vl/RTA0mT2.T1yrrVFOr0AehmgIGpcA2V88uSemn94s9Tb3f.u',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Petr228',
        email: 'Petr228@mail.ru',
        password: '$2b$10$t1Aq4Y2FB/uL/LZcWybs2eefobl8oRpxDlmctU9PiqOnSQ8Dee4Rm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elvis',
        email: 'Elvis@mail.ru',
        password: '$2b$10$e6ugdOIumZV1cyRcJGfQvu/yRaoalXnWd6I.GumaOylMr4nyFPUY.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, { restartIdentity: true, truncate: true });
  },
};
