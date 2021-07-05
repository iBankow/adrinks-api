CREATE TABLE "items" (
  "id" SERIAL PRIMARY KEY,
  "category_id" int,
  "name" text,
  "desc" text,
  "old_price" int NOT NULL,
  "price" int NOT NULL,
  "quantity" int NOT NULL,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" text
);

CREATE TABLE "files" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "path" text,
  "item_id" int UNIQUE
);

ALTER TABLE "items" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");
