import { paginationHelpers } from '../../../helpers/paginationHelper';
import { ISortCondition } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookFilterableFields } from './book.contents';
import { IBook, IBookFilter } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async (
  filters: IBookFilter,
  paginationOptions: IPaginationOptions,
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookFilterableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: ISortCondition = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions);

  const total = await Book.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getSingleBooks = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};
const updateBook = async (id: string, payload: Partial<IBook>) => {
  const result = await Book.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBooks,
  updateBook,
  deleteBook,
};
