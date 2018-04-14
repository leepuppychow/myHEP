class Service {
  base_url() {
    return "https://my-hep.herokuapp.com/api/v1/"
  }

  auth_headers(token) {
    return {
      "headers": {"Authorization": "Bearer " + token}
    }
  }
}

module.exports = Service
