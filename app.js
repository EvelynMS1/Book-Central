const express = require ('express');
 const app = express();
  const port = 3001;

  app.get('/',(req,res) => {
     res.send('Novel Network/BookWorms');

  });
  app.listen(port,()=>{

  console.log(`app listening to port ${port}`);
  });
