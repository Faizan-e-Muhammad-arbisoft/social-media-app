import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  place: Yup.string().required('Required'),
});
