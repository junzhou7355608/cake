/*
  Warnings:

  - A unique constraint covering the columns `[orderNo]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderNo` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryType" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "memberId" INTEGER NOT NULL,
ADD COLUMN     "orderNo" TEXT NOT NULL,
ADD COLUMN     "pickupCode" TEXT,
ADD COLUMN     "pickupTime" TIMESTAMP(3),
ADD COLUMN     "receiverAddr" TEXT,
ADD COLUMN     "receiverName" TEXT,
ADD COLUMN     "receiverPhone" TEXT,
ADD COLUMN     "storeId" INTEGER,
ADD COLUMN     "storeName" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "openid" TEXT NOT NULL,
    "unionid" TEXT,
    "nickname" TEXT,
    "avatarUrl" TEXT,
    "gender" INTEGER,
    "phone" TEXT,
    "birthday" TIMESTAMP(3),
    "status" INTEGER NOT NULL DEFAULT 0,
    "lastLoginAt" TIMESTAMP(3),
    "level" INTEGER,
    "points" INTEGER NOT NULL DEFAULT 0,
    "remark" TEXT,
    "referrerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_openid_key" ON "Member"("openid");

-- CreateIndex
CREATE UNIQUE INDEX "Member_unionid_key" ON "Member"("unionid");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNo_key" ON "Order"("orderNo");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
