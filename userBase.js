

class UserBase {
    constructor(users) {
      this.users = users
    }

count() {
    return this.users.length
}     

getNames() {
    return this.users.map(users => users.getName())
    }

getIntroductions(){
    return this.users.map(users => users.getIntroduction())

}

}

module.exports = UserBase;