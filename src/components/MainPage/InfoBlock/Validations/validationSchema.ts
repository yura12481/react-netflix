import * as  yup from 'yup'

export const validationSchema = yup.object({
    email: yup.string().email('Введіть дійсну адресу електронної пошти').required('Необхідно вказати адресу електронної пошти!'),
})