import mongoose, { Schema, model } from 'mongoose';
import type { ITokenSchema } from '~/types';

const TokenSchema = new Schema<ITokenSchema>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

const User = model<ITokenSchema>('Token', TokenSchema);

export default User;
