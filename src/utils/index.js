export const fourDigitRamdomNumber = Math.floor((Math.random() * 10000) + 1);

export const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: error.details.map(d => d.message).join(", ")
    });
  }

  req.body = value;
  next();
};
