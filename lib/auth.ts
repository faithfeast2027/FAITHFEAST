import bcrypt from 'bcryptjs';

export const VALID_ROLES = ['customer', 'vendor', 'driver', 'admin'] as const;
export type RoleName = (typeof VALID_ROLES)[number];

export const isValidRole = (role: string) => VALID_ROLES.includes(role.toLowerCase() as RoleName);

export const normalizeRole = (role?: string) => {
  const nextRole = (role ?? 'customer').toLowerCase();
  switch (nextRole) {
    case 'vendor':
      return 'VENDOR';
    case 'driver':
      return 'DRIVER';
    case 'admin':
      return 'ADMIN';
    case 'customer':
    default:
      return 'CUSTOMER';
  }
};

export const hashPassword = async (password: string) => bcrypt.hash(password, 10);
export const comparePassword = async (password: string, passwordHash: string) => bcrypt.compare(password, passwordHash);
