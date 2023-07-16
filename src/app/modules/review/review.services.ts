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
  const result = await Book.findById(id).projection({ _id: 0, comment: 1 });
  return result;
};

export const ReviewService = {
  addReview,
  getReview
};
