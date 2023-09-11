-- CreateTable
CREATE TABLE "LifeExperienceEntry" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "year" TEXT NOT NULL,
    "misogiContent" TEXT NOT NULL,
    "adventureContent" TEXT[],
    "authorId" TEXT NOT NULL,

    CONSTRAINT "LifeExperienceEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LifeExperienceEntry" ADD CONSTRAINT "LifeExperienceEntry_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
