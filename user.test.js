const User = require('./user');

describe('user', () => {
    const user = new User('Ben')
    it('displays name', () => {
     expect(user.getName()).toEqual('Ben')
     
    })
 });

 describe('user', () => {
    const user = new User('Ben')
    it('is an instance of User class', () => {
     expect(user).toBeInstanceOf(User)
     
    })
 });

 describe('user', () => {
    const user = new User('Ben')
    it('is an instance of User class', () => {
     expect(user.getIntroduction()).toEqual("Hi, my name is Ben")
     
    })
 });