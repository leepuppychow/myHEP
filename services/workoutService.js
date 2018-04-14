import Service from './service'

class WorkoutService extends Service {
  index = (token) => {
    return fetch(this.base_url() + "workouts", this.auth_headers(token))
  }

  today = (token) => {
    return fetch(this.base_url() + "workouts/today", this.auth_headers(token))
  }
}

module.exports = WorkoutService
