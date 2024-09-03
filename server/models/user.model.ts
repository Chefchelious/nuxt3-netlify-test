import { Schema, model } from 'mongoose';
import type { IUser } from '~/types';

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
});

const User = model<IUser>('User', UserSchema);

export default User;
