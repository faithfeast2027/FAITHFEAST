generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String   @id @default(uuid())
  name         String
  email        String   @unique
  passwordHash String
  role         Role     @default(CUSTOMER)
  createdAt    DateTime @default(now())

  orders Order[]
  vendors Vendor[]
  drivers DriverProfile[]
}

enum Role {
  CUSTOMER
  VENDOR
  DRIVER
  ADMIN
}

model Vendor {
  id        String      @id @default(uuid())
  userId    String
  user      User        @relation(fields: [userId], references: [id])
  kitchenName String
  address   String?
  status    String   @default("active")
  createdAt DateTime @default(now())
  drops     DailyDrop[]
}

model DailyDrop {
  id          String   @id @default(uuid())
  name        String
  vendor      String
  price       Float
  quantity    Int
  createdAt   DateTime @default(now())
  orders      Order[]
}

model Order {
  id              String   @id @default(uuid())
  customerId      String
  dropId          String
  quantity        Int
  totalCents      Int
  deliveryAddress String
  status          String   @default("confirmed")
  createdAt       DateTime @default(now())

  customer User @relation(fields: [customerId], references: [id])
  drop     DailyDrop @relation(fields: [dropId], references: [id])
}

model DriverProfile {
  id         String   @id @default(uuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  vehicleType String?
  rating     Float    @default(0)
  status     String   @default("active")
  createdAt  DateTime @default(now())
  earnings   DriverEarning[]
}

model DriverEarning {
  id               String        @id @default(uuid())
  driverId         String
  driver           DriverProfile @relation(fields: [driverId], references: [id])
  periodLabel      String
  tipsCents        Int
  deliveryFeeCents Int
  totalCents       Int
  createdAt        DateTime      @default(now())
}
