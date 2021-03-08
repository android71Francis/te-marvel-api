import { Response } from "express";

export const errorHandler = (err: any, res: Response) => {
    if (err.response) {
        res.status(err.response.status).send({
            status: err.response.status,
            code: err.response.data.code,
            message: err.response.data.message,
        });
    } else if (err.request) {
        res.status(408).send({
            status: 408,
            code: 'ClientTimeout',
            message: 'Something wrong with the requet. Try again later.',
        });
    } else {
        console.warn('errorHandler', err);
        res.status(500).send({
            status: 500,
            code: 'ServerError',
            message: 'Something wrong with the requet. Try again later.',
        });
    }
  };