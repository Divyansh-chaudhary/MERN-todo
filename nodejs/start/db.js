import mongoose from "mongoose";

export const connectDB = () => {
  const connectionURL =
    "mongodb+srv://divyansh:v1ncPoAKLiHaTF9t@cluster0.dtlfsx5.mongodb.net/todos?retryWrites=true&w=majority";

  mongoose.connect(connectionURL).then(() => {
    console.log("connect DB");
  });
};
