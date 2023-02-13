import axios from 'axios'

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default {
    getTodos: () => client.get('/todos')

}