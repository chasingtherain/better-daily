-- CreateTable
CREATE TABLE "LoveLanguageEntry" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "todayDate" TEXT NOT NULL,
    "service" INTEGER DEFAULT 0,
    "gift" INTEGER DEFAULT 0,
    "touch" INTEGER DEFAULT 0,
    "time" INTEGER DEFAULT 0,
    "words" INTEGER DEFAULT 0,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "LoveLanguageEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoveLanguageEntry" ADD CONSTRAINT "LoveLanguageEntry_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
