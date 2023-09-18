import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userEmail = searchParams.get('params')

  const user = await prisma.user.findUnique({
    where: {email: userEmail!}
  })

  const allLifeExperienceEntries = await prisma.lifeExperienceEntry.findMany({
    where: {authorId: user?.id}
  })
  
  return NextResponse.json({allLifeExperienceEntries})
}
