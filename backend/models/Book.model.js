import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isbnCode: {
    type: String,
    required: true,
    unique: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
