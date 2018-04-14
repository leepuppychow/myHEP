import Service from './service'

class UserService extends Service {

  getUserToken(body) {
    return fetch(this.base_url() + "user_token", this.postOptions(body))
  }

  signup(body){
    return fetch(this.base_url() + "users", this.postOptions(body))
  }

}

module.exports = UserService
