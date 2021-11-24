const UserBase = require('./userBase');
const User = require('./user');


describe('userbase', () => {
    const users = [
        new User('Uma'),
        new User('Josh'),
        new User('Ollie')
      ];
      const userBase = new UserBase(users);
    it('displays name', () => {
     expect(userBase.getNames()).toEqual[ 'Uma', 'Josh', 'Ollie' ]
     
    })
    it('shows the count of users', () => {
        expect(userBase.count()).toBe(3)

    })
    it('displays Hi my name is, for each user', () => {
        expect(userBase.getIntroductions()).toEqual[
            'Hi, my name is Uma',
            'Hi, my name is Josh',
            'Hi, my name is Ollie'
          ]

    })
 });
