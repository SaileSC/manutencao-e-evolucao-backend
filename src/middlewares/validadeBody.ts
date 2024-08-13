import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema } from "joi";

const validadeBody = (schema:Schema) => {
    return (req:Request, res:Response, next:NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly:false
        });
        if(error){
            res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(error)
        }else{
            next();
        }
    }
}

export default validadeBody;