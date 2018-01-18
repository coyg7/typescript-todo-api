import * as Joi from 'joi';
import validate from '../utils/validate';
import * as userService from '../services/userService';
import { Request, Response, NextFunction } from 'express';


const SCHEMA = {
  name: Joi.string()
    .label('Name')
    .max(90)
    .required()
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function userValidator(req: Request, res: Response, next: NextFunction) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

const LOGINSCHEMA = {
   email: Joi.string()
    .label('Email')
    .max(90)
    .required(),
   password: Joi.string()
    .label('Password')
    .max(90)
    .required()
};
/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function userloginValidator(req: Request, res: Response, next: NextFunction) {
  return validate(req.body, LOGINSCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

const REGISTERSCHEMA = {
  name: Joi.string()
    .label('Name')
    .max(90)
    .required(),
  email: Joi.string()
    .label('Email')
    .max(90)
    .required(),
  password: Joi.string()
    .label('Password')
    .max(90)
    .required()
};
/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function userRegisterValidator(req: Request, res: Response, next: NextFunction) {
  return validate(req.body, REGISTERSCHEMA)
    .then(() => next())
    .catch(err => next(err));
}
/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findUser(req: Request, res: Response, next: NextFunction) {
  return userService
    .findById(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findUser, userValidator,userloginValidator,userRegisterValidator };
