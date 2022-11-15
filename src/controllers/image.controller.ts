import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { saveImages } from '../services/image.service';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await saveImages(req.body);
    const response = {
      message: 'Success',
      data,
    };

    res.status(httpStatus.OK).send(response);
  } catch (error) {
    next(error);
  }
};
