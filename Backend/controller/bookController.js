//controller code
import Book from "../models/book.model.js";


//get all books
const getBooks = async (req, res) => {
  try {
    const allbooks = await Book.find({});
    res.status(200).json(allbooks);
  } catch (error) {
    res.status(500).json({"message":"Error in controller"});
  }
};

export default getBooks;
