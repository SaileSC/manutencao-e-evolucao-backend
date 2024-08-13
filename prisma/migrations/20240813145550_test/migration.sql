-- CreateTable
CREATE TABLE `usuarios` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `login` VARCHAR(20) NOT NULL,
    `senha` CHAR(60) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `requisicoes` (
    `id` CHAR(36) NOT NULL,
    `nomeSolicitante` VARCHAR(50) NOT NULL,
    `nomeSistema` VARCHAR(50) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descricaoRequisicao` VARCHAR(500) NOT NULL,
    `statusRequisicao` INTEGER NULL,
    `anexo` BLOB NOT NULL,
    `dataFechamento` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
