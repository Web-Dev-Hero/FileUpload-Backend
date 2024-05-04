let mongoose=require('mongoose')

require('dotenv').config()

exports.Dbconnect=()=>{

  mongoose.connect(process.env.DATABASE_URL)


  .then(()=>console.log('your connection is suceesfully connect to database'))


.catch((error)=>{

  console.log('dbconnection is failed')
  console.error(error)

  process.exit(1)
})

}