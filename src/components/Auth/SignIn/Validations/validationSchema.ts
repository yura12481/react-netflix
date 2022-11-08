import * as  yup from 'yup'

export const validationSchema = yup.object({
    email: yup.string().email('Введіть дійсну електронну пошту.').required('Введіть дійсну адресу електронної пошти '),
    password: yup.string()
        .required('Пароль має містити від 4 до 60 символів.')
        .min(4, 'Пароль має містити від 4 до 60 символів.')
        .max(60, 'Пароль має містити від 4 до 60 символів.')
})

