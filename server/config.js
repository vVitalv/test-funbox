require('dotenv').config()

const options = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV,
}

export default options
