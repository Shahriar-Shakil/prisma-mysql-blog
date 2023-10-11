/*
  Warnings:

  - A unique constraint covering the columns `[tagId]` on the table `PostTag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `PostTag_tagId_key` ON `PostTag`(`tagId`);
