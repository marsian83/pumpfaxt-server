import { Schema, model } from "mongoose";
import { Token } from "../types/custom";

const tokenSchema = new Schema<Token>({
  address: { type: String },
  creator: { type: String },
  createdBlock: { type: String },
  name: { type: String },
  description: { type: String },
  totalSupply: { type: Number },
  image: { type: String },
  symbol: { type: String },
  website: { type: String },
  telegram: { type: String },
  twitter: { type: String },
  roomId: { type: String },
  roomIdExpiration: { type: Number },
  replies: { type: [String] },
});

export default model<Token>("Token", tokenSchema);
