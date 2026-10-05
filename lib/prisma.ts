import bcrypt from 'bcryptjs';

export const isValidRole = (role: string) => ['customer', 'vendor', 'driver', 'admin'].includes(role);

export const hashPassword = async (password: string) => bcrypt.hash(password, 10);

export const comparePassword = async (password: string, passwordHash: string) => bcrypt.compare(password, passwordHash);
