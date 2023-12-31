import Joi from 'joi';
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'any.required': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.base':
        'First Name should start with a capital letter and contain only letters',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[A-Za-z]+$/)
    .messages({
      'any.required': 'Last Name is required',
      'string.pattern.base': 'Last Name should contain only letters',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  dateOfBirth: Joi.string().allow(''),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
