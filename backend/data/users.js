import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Usuario Admin',
    email: 'admin@demo.com',
    password: bcrypt.hashSync('demo', 10),
    isAdmin: true,
  },
  {
    name: 'Usuario Demo',
    email: 'demo@demo.com',
    password: bcrypt.hashSync('demo', 10),
  },
  {
    name: 'Usuario Demo1',
    email: 'demo1@demo.com',
    password: bcrypt.hashSync('demo', 10),
  },
  {
    name: 'Usuario Demo2',
    email: 'demo2@demo.com',
    password: bcrypt.hashSync('demo', 10),
  },

]

export default users
