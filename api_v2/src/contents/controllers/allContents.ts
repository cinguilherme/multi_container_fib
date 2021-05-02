import { Request, Response, NextFunction } from 'express'

export const getAllContents = (req: Request, res: Response, next: NextFunction) => {
    res.send([
        { name: 'alo', text: 'alo' },
        { name: 'alo', text: 'alo' },
    ])
}