import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const getSingleUser = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

const addToUserWishlist = async (email: string, bookId: string) => {
  const result = await User.updateOne(
    { email },
    {
      $addToSet:{
        wishlist:bookId
      }
    }
  );
  return result;
};

const delateFromUserWishlist = async (email: string, bookId: string) => {

  console.log("bookId:", bookId)

  const result = await User.updateOne(
    { email },
    {
      $pull:{
        wishlist:bookId
      }
    }
  );

  return result;
};
const addToUserFinishedList = async (email: string, bookId: string) => {
  const result = await User.updateOne(
    { email },
    {
      $addToSet:{
        finishedBook:bookId
      }
    }
  );
  return result;
};

const delateFromUserFinishedList = async (email: string, bookId: string) => {

  console.log("bookId:", bookId)

  const result = await User.updateOne(
    { email },
    {
      $pull:{
        finishedBook:bookId
      }
    }
  );

  return result;
};

export const UserService = {
  createUser,
  getSingleUser,
  addToUserWishlist,
  delateFromUserWishlist,
  addToUserFinishedList,
  delateFromUserFinishedList
};
