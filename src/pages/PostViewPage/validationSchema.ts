import * as Yup from 'yup';

export const validationSchema = Yup.object({
  comment: Yup.string().required('Required'),
});
