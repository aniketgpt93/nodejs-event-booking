import Joi from 'joi'


export const eventSchema = Joi.object({
name:Joi.string().required,
city:Joi.string().required,
tags:Joi.string().required,
price:Joi.number().positive().required(),
eventDate:Joi.date().required

})