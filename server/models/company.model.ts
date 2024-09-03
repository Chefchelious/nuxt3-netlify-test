import { Schema, model } from 'mongoose';
import type { ICompany } from '~/types';

const CompanySchema = new Schema<ICompany>({
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  workSchedule:  [
    {
      day: {
        type: String,
        required: true,
      },
      open: {
        type: String,
        required: true,
      },
      close: {
        type: String,
        required: true,
      }
    },
  ],
})

const CompanyInfo = model<ICompany>('CompanyInfo', CompanySchema);

export default CompanyInfo;
