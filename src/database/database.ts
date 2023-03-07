import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

// Connect to mongodb
const connect = async (): Promise<void> => {
  return new Promise((res, rej) => {
    mongoose
      .connect(
        Buffer.from(process.env.MONGOOSE_URI as string, "base64").toString(
          "ascii"
        ),
        {}
      )
      .then(() => {
        console.log(colors.red("connected to mongodb database"));
        // resolve promise as we are now connected to database
        res();
      });
  });
};

export default { connect };
