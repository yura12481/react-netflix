import * as  yup from 'yup'

export const validationSchema = yup.object({
    email: yup.string().email('Введіть дійсну електронну пошту.').required('Введіть дійсну адресу електронної пошти '),
    password: yup.string()
        .required('Пароль має містити від 8 символів')
        .min(8, 'Пароль має містити від 8 символів')
})

