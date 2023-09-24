/*
  Warnings:

  - You are about to drop the column `savingBankId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `SavingBank` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavingBank" DROP CONSTRAINT "SavingBank_userId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_savingBankId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "savingBankId",
ADD COLUMN     "saving_bank_id" TEXT;

-- DropTable
DROP TABLE "SavingBank";

-- CreateTable
CREATE TABLE "ExpenseBox" (
    "userId" TEXT,
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseBox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_saving_bank_id_fkey" FOREIGN KEY ("saving_bank_id") REFERENCES "ExpenseBox"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseBox" ADD CONSTRAINT "ExpenseBox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
