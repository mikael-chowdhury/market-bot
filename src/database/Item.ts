import mongoose from "mongoose";
import { DBItem } from "../util/types";

const ItemSchema = new mongoose.Schema<DBItem>({
  name: String,
  id: String,
  rarity: Number,
});

export default mongoose.model<DBItem>("Item", ItemSchema);
