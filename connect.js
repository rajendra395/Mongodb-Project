const mongoose = require("mongoose");
// Middleware
// const db = mongodb+srv://22a51a0588:@cluster0.dsclxxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const db = 'mongodb://127.0.0.1:27017/exp'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017