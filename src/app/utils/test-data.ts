export class TestData {

    /**
     * Output generated from a DB model created by MYSQL Workbench
     */
    public static readonly createTablesSmallDB = `
    -- MySQL Script generated by MySQL Workbench
    -- Fri Aug 25 23:51:07 2017
    -- Model: New Model    Version: 1.0
    -- MySQL Workbench Forward Engineering
    
    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
    
    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    
    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS \`mydb\` DEFAULT CHARACTER SET utf8 ;
    USE \`mydb\` ;
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`authorities\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`authorities\` (
      \`id\` INT NOT NULL,
      \`name\` VARCHAR(45) NOT NULL,
      PRIMARY KEY (\`id\`))
    ENGINE = InnoDB;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`users\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`users\` (
      \`id\` BIGINT(20) NOT NULL,
      \`username\` VARCHAR(45) NOT NULL,
      \`authorities_id\` INT NOT NULL,
      \`password\` VARCHAR(45) NOT NULL,
      PRIMARY KEY (\`id\`),
      INDEX \`fk_users_authorities_idx\` (\`authorities_id\` ASC),
      CONSTRAINT \`fk_users_authorities\`
        FOREIGN KEY (\`authorities_id\`)
        REFERENCES \`mydb\`.\`authorities\` (\`id\`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`threads\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`threads\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`title\` VARCHAR(128) NOT NULL,
      \`content\` MEDIUMTEXT NOT NULL,
      PRIMARY KEY (\`id\`),
      UNIQUE INDEX \`title_UNIQUE\` (\`title\` ASC))
    ENGINE = InnoDB;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`posts\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`posts\` (
      \`id\` BIGINT(10) NOT NULL AUTO_INCREMENT,
      \`users_id\` BIGINT(20) NOT NULL,
      \`content\` MEDIUMTEXT NOT NULL,
      \`threads_id\` INT NOT NULL,
      PRIMARY KEY (\`id\`),
      INDEX \`fk_posts_users1_idx\` (\`users_id\` ASC),
      INDEX \`fk_posts_threads1_idx\` (\`threads_id\` ASC),
      CONSTRAINT \`fk_posts_users1\`
        FOREIGN KEY (\`users_id\`)
        REFERENCES \`mydb\`.\`users\` (\`id\`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT \`fk_posts_threads1\`
        FOREIGN KEY (\`threads_id\`)
        REFERENCES \`mydb\`.\`threads\` (\`id\`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;
    
    
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
    
    `;
  public static readonly createTableBiggerDB = `
    -- MySQL Script generated by MySQL Workbench
    -- Fri Aug 25 15:14:57 2017
    -- Model: New Model    Version: 1.0
    -- MySQL Workbench Forward Engineering
    
    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
    
    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    
    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS \`mydb\` DEFAULT CHARACTER SET utf8 ;
    USE \`mydb\` ;
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`SPRING_SESSION\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`SPRING_SESSION\` (
      \`SESSION_ID\` CHAR(36) NOT NULL DEFAULT '',
      \`CREATION_TIME\` BIGINT(20) NOT NULL,
      \`LAST_ACCESS_TIME\` BIGINT(20) NOT NULL,
      \`MAX_INACTIVE_INTERVAL\` INT(11) NOT NULL,
      \`PRINCIPAL_NAME\` VARCHAR(100) NULL DEFAULT NULL,
      PRIMARY KEY (\`SESSION_ID\`),
      INDEX \`SPRING_SESSION_IX1\` (\`LAST_ACCESS_TIME\` ASC))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = latin1;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`SPRING_SESSION_ATTRIBUTES\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`SPRING_SESSION_ATTRIBUTES\` (
      \`SESSION_ID\` CHAR(36) NOT NULL DEFAULT '',
      \`ATTRIBUTE_NAME\` VARCHAR(200) NOT NULL DEFAULT '',
      \`ATTRIBUTE_BYTES\` BLOB NULL DEFAULT NULL,
      PRIMARY KEY (\`SESSION_ID\`, \`ATTRIBUTE_NAME\`),
      INDEX \`SPRING_SESSION_ATTRIBUTES_IX1\` (\`SESSION_ID\` ASC),
      CONSTRAINT \`SPRING_SESSION_ATTRIBUTES_FK\`
        FOREIGN KEY (\`SESSION_ID\`)
        REFERENCES \`mydb\`.\`SPRING_SESSION\` (\`SESSION_ID\`)
        ON DELETE CASCADE)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = latin1;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`auction\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`auction\` (
      \`auction_id\` BIGINT(20) NOT NULL AUTO_INCREMENT,
      \`amount\` INT(11) NULL DEFAULT NULL,
      \`auction_key\` VARCHAR(255) NOT NULL,
      \`auction_name\` VARCHAR(255) NOT NULL,
      \`payed\` CHAR(1) NOT NULL DEFAULT 'N',
      \`deleted\` CHAR(1) NOT NULL DEFAULT 'N',
      \`fishing_gear\` VARCHAR(255) NULL DEFAULT NULL,
      \`fish_type\` VARCHAR(255) NULL DEFAULT NULL,
      \`quantity\` FLOAT NULL DEFAULT NULL,
      \`delivery_location\` VARCHAR(255) NULL DEFAULT NULL,
      \`delivery_time\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      \`notes\` VARCHAR(1000) NULL DEFAULT NULL,
      \`package_time\` DATETIME NULL DEFAULT NULL,
      \`pallets\` INT(11) NULL DEFAULT NULL,
      \`end\` DATETIME NULL DEFAULT NULL,
      \`start_price\` FLOAT NOT NULL,
      \`description\` VARCHAR(255) NULL DEFAULT NULL,
      \`version\` INT(11) NOT NULL DEFAULT '0',
      \`currency\` INT(11) NOT NULL DEFAULT '0',
      \`notified_winner\` CHAR(1) NOT NULL DEFAULT 'N',
      \`parent\` BIGINT(20) NOT NULL DEFAULT '0',
      \`composite\` CHAR(1) NOT NULL DEFAULT 'N',
      \`winning_bid\` FLOAT NULL DEFAULT '0',
      \`runner_up_bid\` FLOAT NULL DEFAULT '0',
      \`winner\` VARCHAR(45) NULL DEFAULT NULL,
      \`runner_up\` VARCHAR(45) NULL DEFAULT NULL,
      \`accepted_price\` FLOAT NULL DEFAULT '0',
      PRIMARY KEY (\`auction_id\`),
      UNIQUE INDEX \`uk_auksjon_auksjonsnr\` (\`auction_id\` ASC))
    ENGINE = InnoDB
    AUTO_INCREMENT = 15567
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`user\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`user\` (
      \`user_id\` VARCHAR(15) NOT NULL,
      \`active\` CHAR(1) NULL DEFAULT NULL,
      \`email\` VARCHAR(255) NOT NULL,
      \`full_name\` VARCHAR(150) NOT NULL,
      \`hash\` VARCHAR(255) NULL DEFAULT NULL,
      \`maritech_client_no\` INT(11) NOT NULL,
      \`credit_limit\` INT(11) NULL DEFAULT NULL,
      \`maritech_customer_no\` INT(11) NOT NULL,
      \`salt\` INT(11) NULL DEFAULT NULL,
      \`currency\` VARCHAR(255) NULL DEFAULT NULL,
      \`version\` INT(11) NOT NULL DEFAULT '0',
      \`company\` VARCHAR(45) NULL DEFAULT NULL,
      \`phone\` VARCHAR(45) NULL DEFAULT NULL,
      \`vat_no\` VARCHAR(45) NULL DEFAULT NULL,
      \`seller\` CHAR(1) NOT NULL DEFAULT 'N',
      \`autoemail\` CHAR(1) NULL DEFAULT 'Y',
      \`semiautoemail\` CHAR(1) NULL DEFAULT 'Y',
      \`manualemail\` CHAR(1) NULL DEFAULT 'Y',
      PRIMARY KEY (\`user_id\`),
      UNIQUE INDEX \`uk_bruker_brukerid\` (\`user_id\` ASC))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`active_bids\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`active_bids\` (
      \`active_bids_id\` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
      \`bid_time\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`amount\` DECIMAL(10,2) NOT NULL,
      \`auction_id\` BIGINT(20) NOT NULL,
      \`user_id\` VARCHAR(15) NOT NULL,
      \`auction_end\` DATETIME NULL DEFAULT NULL,
      PRIMARY KEY (\`active_bids_id\`),
      UNIQUE INDEX \`active_bids_id_UNIQUE\` (\`active_bids_id\` ASC),
      INDEX \`bid_times_idx\` USING BTREE (\`bid_time\` ASC),
      INDEX \`amount_idx\` (\`amount\` ASC),
      INDEX \`bid_times_amount_idx\` (\`bid_time\` ASC, \`amount\` ASC),
      INDEX \`fk_active_bids_auction_id_idx\` (\`auction_id\` ASC),
      INDEX \`fk_active_bids_user_id_idx\` (\`user_id\` ASC),
      INDEX \`auction_end_idx\` (\`auction_end\` ASC),
      CONSTRAINT \`fk_active_bids_auction_id\`
        FOREIGN KEY (\`auction_id\`)
        REFERENCES \`mydb\`.\`auction\` (\`auction_id\`)
        ON DELETE NO ACTION,
      CONSTRAINT \`fk_active_bids_user_id\`
        FOREIGN KEY (\`user_id\`)
        REFERENCES \`mydb\`.\`user\` (\`user_id\`)
        ON DELETE NO ACTION)
    ENGINE = InnoDB
    AUTO_INCREMENT = 3963
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`authorities\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`authorities\` (
      \`username\` VARCHAR(255) NOT NULL,
      \`authority\` VARCHAR(255) NULL DEFAULT NULL,
      PRIMARY KEY (\`username\`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`autobid\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`autobid\` (
      \`id\` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
      \`bid_time\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`amount\` DECIMAL(10,2) NOT NULL,
      \`auction_id\` BIGINT(20) NOT NULL,
      \`user_id\` VARCHAR(15) NOT NULL,
      PRIMARY KEY (\`id\`),
      UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC),
      INDEX \`bid_time_idx\` (\`bid_time\` ASC),
      INDEX \`amount_idx\` (\`amount\` ASC),
      INDEX \`fk_auction_id_idx\` (\`auction_id\` ASC),
      INDEX \`fk_user_id_idx\` (\`user_id\` ASC),
      CONSTRAINT \`fk_auction_id\`
        FOREIGN KEY (\`auction_id\`)
        REFERENCES \`mydb\`.\`auction\` (\`auction_id\`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT \`fk_user_id\`
        FOREIGN KEY (\`user_id\`)
        REFERENCES \`mydb\`.\`user\` (\`user_id\`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    AUTO_INCREMENT = 146634
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`bid\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`bid\` (
      \`bid_id\` BIGINT(20) NOT NULL AUTO_INCREMENT,
      \`auto\` INT(11) NOT NULL,
      \`bid_amount\` DECIMAL(10,4) NOT NULL,
      \`version\` BIGINT(20) NULL DEFAULT NULL,
      \`bid_time\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`auction_auction_id\` BIGINT(20) NOT NULL,
      \`user_user_id\` VARCHAR(15) NOT NULL,
      PRIMARY KEY (\`bid_id\`),
      UNIQUE INDEX \`uk_bru_budnr\` (\`bid_id\` ASC),
      UNIQUE INDEX \`bid_auction_and_bid_price_constriant\` (\`auction_auction_id\` ASC, \`bid_amount\` ASC),
      INDEX \`bud_fk_brukerid\` (\`user_user_id\` ASC),
      INDEX \`bud_fk_auction_id\` (\`auction_auction_id\` ASC),
      CONSTRAINT \`bud_fk_auction_id\`
        FOREIGN KEY (\`auction_auction_id\`)
        REFERENCES \`mydb\`.\`auction\` (\`auction_id\`),
      CONSTRAINT \`bud_fk_brukerid\`
        FOREIGN KEY (\`user_user_id\`)
        REFERENCES \`mydb\`.\`user\` (\`user_id\`))
    ENGINE = InnoDB
    AUTO_INCREMENT = 153424
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`content\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`content\` (
      \`id\` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
      \`url\` VARCHAR(100) NULL DEFAULT NULL,
      \`body\` MEDIUMTEXT NULL DEFAULT NULL,
      \`title\` VARCHAR(100) NULL DEFAULT NULL,
      PRIMARY KEY (\`id\`),
      UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC),
      INDEX \`idx_url\` (\`url\` ASC))
    ENGINE = InnoDB
    AUTO_INCREMENT = 4
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`currency\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`currency\` (
      \`id\` BIGINT(20) NOT NULL AUTO_INCREMENT,
      \`eur\` FLOAT NULL DEFAULT NULL,
      \`gbp\` FLOAT NULL DEFAULT NULL,
      \`dkk\` FLOAT NULL DEFAULT NULL,
      PRIMARY KEY (\`id\`),
      UNIQUE INDEX \`uk_valuta_id\` (\`id\` ASC))
    ENGINE = InnoDB
    AUTO_INCREMENT = 4859
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`scheduled_jobs_tracker\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`scheduled_jobs_tracker\` (
      \`task\` VARCHAR(45) NOT NULL,
      \`time\` DATETIME NOT NULL,
      PRIMARY KEY (\`task\`, \`time\`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`setting\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`setting\` (
      \`id\` VARCHAR(255) NOT NULL,
      \`value\` VARCHAR(255) NOT NULL,
      PRIMARY KEY (\`id\`))
    ENGINE = MyISAM
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table \`mydb\`.\`sms_notifications\`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS \`mydb\`.\`sms_notifications\` (
      \`notification_id\` BIGINT(20) NOT NULL AUTO_INCREMENT,
      \`user_id\` VARCHAR(20) NOT NULL,
      \`auction_id\` BIGINT(20) NOT NULL,
      \`auction_end\` DATETIME NOT NULL,
      \`phone_number\` VARCHAR(45) NOT NULL,
      \`fish_type\` VARCHAR(255) NOT NULL,
      \`is_notified\` CHAR(1) NOT NULL,
      PRIMARY KEY (\`notification_id\`))
    ENGINE = InnoDB
    AUTO_INCREMENT = 34
    DEFAULT CHARACTER SET = latin1;
    
    
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
    
    `;
}
