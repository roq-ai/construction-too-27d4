import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  inventory_count: yup.number().integer().required(),
  opening_hours: yup.string().required(),
  closing_hours: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
