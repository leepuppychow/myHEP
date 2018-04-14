import Service from './service'

class UserService extends Service {

  getUserToken(body) {
    return fetch(this.base_url() + "user_token", this.postOptions(body))
  }

}

module.exports = UserService
