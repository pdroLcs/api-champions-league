-- DropForeignKey
ALTER TABLE `player` DROP FOREIGN KEY `Player_clubId_fkey`;

-- DropIndex
DROP INDEX `Player_clubId_fkey` ON `player`;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
