-- DropForeignKey
ALTER TABLE `statistics` DROP FOREIGN KEY `Statistics_playerId_fkey`;

-- AddForeignKey
ALTER TABLE `Statistics` ADD CONSTRAINT `Statistics_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Player`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
