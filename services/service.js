class Service {
  base_url() {
    return "https://my-hep.herokuapp.com/api/v1/"
  }

  auth_headers(token) {
    return {
      "headers": {"Authorization": "Bearer " + token}
    }
  }

  postOptions(body) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  }
}

module.exports = Service
