import { z } from 'zod';

const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name is required' })
    .max(20, { message: 'First Name cannot be more than 20' })
    .regex(/^[A-Z][a-z]*$/, {
      message:
        'First Name should start with a capital letter and contain only letters',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .regex(/^[A-Za-z]+$/, { message: 'Last Name should contain only letters' }),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No. is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No. is required' }),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian Name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local Guardian Occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local Guardian Contact No. is required' }),
  address: z.string().min(1, { message: 'Local Guardian Address is required' }),
});

const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email({ message: 'Email should be a valid email' })
    .min(1, { message: 'Email is required' }),
  contactNo: z.string().min(1, { message: 'Contact No. is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency Contact No. is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present Address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent Address is required' }),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
