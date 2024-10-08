import { NextFunction, type Request, type Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CatchWrapper = (fn: (req: Request, res: Response, next: NextFunction) => any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next)?.catch((error: Error) => {
            if (error) {
                next(error)
                return
            }
            next()
        });
    };
};