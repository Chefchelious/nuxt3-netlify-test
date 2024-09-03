import jwt from 'jsonwebtoken';
import tokenModel from '~/server/models/token.model';

const config = useRuntimeConfig();

export const generateTokens = (payload: { username: string }) => {
  const accessToken = jwt.sign(payload, config.public.jwtAccessSecret, {
    expiresIn: '30d', // поменять на 20мин-8ч
  });

  const refreshToken = jwt.sign(payload, config.public.jwtRefreshSecret, {
    expiresIn: '30d',
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const saveToken = async (userId: string, refreshToken: string) => {
  const tokenData = await tokenModel.findOne({ user: userId });

  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }

  return tokenModel.create({ userId, refreshToken });
};
