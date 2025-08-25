import Joi from 'joi'


export const authSchema = Joi.object({
email: Joi.string().email().required,
password :Joi.string().min(6).required,
name:Joi.string().required
})
export const loginSchema = Joi.object({
email: Joi.string().email().required,
password :Joi.string().min(6).required
})