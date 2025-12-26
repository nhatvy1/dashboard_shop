-- Bảng SPU (Product)
CREATE TABLE `spu` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `spu_no` varchar(32) NOT NULL COMMENT 'SPU unique code',
  `spu_name` varchar(128) NOT NULL COMMENT 'Product name',
  `spu_desc` text COMMENT 'Product description',
  `spu_status` tinyint(4) DEFAULT 1 COMMENT '0:inactive, 1:active',
  `category_id` bigint(20) unsigned COMMENT 'Category ID',
  `brand_id` bigint(20) unsigned COMMENT 'Brand ID',
  `shop_id` bigint(20) unsigned NOT NULL COMMENT 'Shop ID',
  `spec_template` json COMMENT 'Specification template',
  `is_deleted` tinyint(1) DEFAULT 0,
  `sort_order` int(10) DEFAULT 0,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_spu_no` (`spu_no`),
  KEY `idx_shop_id` (`shop_id`),
  KEY `idx_status` (`spu_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='SPU Product';

-- Bảng SKU 
CREATE TABLE `sku` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sku_no` varchar(32) NOT NULL COMMENT 'SKU unique code',
  `spu_id` bigint(20) unsigned NOT NULL COMMENT 'SPU ID',
  `sku_name` varchar(128) COMMENT 'SKU name',
  `sku_attrs` json COMMENT 'SKU attributes (color, size, etc.)',
  `price` decimal(10,2) NOT NULL COMMENT 'SKU price',
  `stock_quantity` int(11) NOT NULL DEFAULT 0 COMMENT 'Stock quantity',
  `sku_status` tinyint(4) DEFAULT 1 COMMENT '0:inactive, 1:active',
  `is_deleted` tinyint(1) DEFAULT 0,
  `sort_order` int(10) DEFAULT 0,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_sku_no` (`sku_no`),
  KEY `idx_spu_id` (`spu_id`),
  KEY `idx_status` (`sku_status`),
  CONSTRAINT `fk_sku_spu` FOREIGN KEY (`spu_id`) REFERENCES `spu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='SKU';

-- Bảng Specification Template (optional)
CREATE TABLE `spec_template` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) unsigned NOT NULL,
  `spec_name` varchar(64) NOT NULL,
  `spec_values` json COMMENT 'Possible values',
  `is_required` tinyint(1) DEFAULT 0,
  `sort_order` int(10) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Specification Template';