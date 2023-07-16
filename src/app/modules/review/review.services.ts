import { Book } from '../book/book.model';

const addReview = async (id: String, payload: string) => {
  const result = await Book.updateOne(
    { _id: id },
    {
      $push: {
        reviews: payload,
      },
    },
  );
  return result;
};

const getReview = async (id: string) => {
  const result = await Book.findById(id).select({  reviews: 1 });
  return result?.reviews;
};

export const ReviewService = {
  addReview,
  getReview
};
