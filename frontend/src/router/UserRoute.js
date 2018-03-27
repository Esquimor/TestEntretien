import UserCreate from '@/page/user/UserCreate'
import ListUser from '@/page/user/ListUser'

// Route user
export default [
  {
    path: '/create',
    name: 'create',
    component: UserCreate
  },
  {
    path: '/list',
    name: 'list',
    component: ListUser
  }
]
