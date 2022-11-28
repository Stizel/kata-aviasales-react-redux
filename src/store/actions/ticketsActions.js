import axios from 'axios'

export const getTickets = (payload) => ({
  type: 'GET_TICKETS',
  payload,
})

export const setStop = (payload) => ({
  type: 'SET_STOP',
  payload,
})
export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
})

export const fetchData = () => (dispatch) => {
  const fetchTickets = (id) =>
    axios(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((res) => res.data)
      .then((data) => {
        if (!data.stop) {
          dispatch(getTickets(data.tickets))
          fetchTickets(id)
        } else {
          return dispatch(setStop(data.stop))
        }
        return null
      })
      .catch((err) => {
        if (err.response.status === 500) {
          return fetchTickets(id)
        }
        return dispatch(setError(true))
      })

  const getSearchId = () =>
    axios('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.data)
      .then((data) => fetchTickets(data.searchId))
      .catch(() => dispatch(setError(true)))

  getSearchId()
}
