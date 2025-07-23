-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "avatarUrl" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "orderNo" TEXT NOT NULL,
    "memberId" INTEGER NOT NULL,
    "deliveryType" INTEGER NOT NULL DEFAULT 0,
    "receiverName" TEXT,
    "receiverPhone" TEXT,
    "receiverAddr" TEXT,
    "storeId" INTEGER,
    "storeName" TEXT,
    "pickupCode" TEXT,
    "pickupTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Member_openid_key" ON "Member"("openid");

-- CreateIndex
CREATE UNIQUE INDEX "Member_unionid_key" ON "Member"("unionid");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNo_key" ON "Order"("orderNo");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
