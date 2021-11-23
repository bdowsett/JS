const User = require('./user');

describe('user', () => {
    const user = new User('Ben')
    it('displays name', () => {
     expect(user.getName()).toEqual('Ben')
     
    })
 });

 