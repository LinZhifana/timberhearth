import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedBlogs() {
  return await prisma.blog.createMany({
    data: [
      {
        title: '第一篇博客',
        content: '这是第一篇博客的内容',
        status: 'DRAFT', // 使用枚举值
      },
      {
        title: '第二篇博客',
        content: '这是第二篇博客的内容',
        status: 'PUBLISHED', // 使用枚举值
      },
      {
        title: '第三篇博客',
        content: '这是第三篇博客的内容',
        status: 'DELETED', // 使用枚举值
      },
    ],
  })
}

seedBlogs()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
