import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'demo@chronologic.local' },
    update: {},
    create: {
      email: 'demo@chronologic.local',
      displayName: 'ChronoLogic Demo',
    },
  });

  const project = await prisma.project.create({
    data: {
      userId: user.id,
      name: 'ChronoLogic OS',
      description: 'Core product development',
      objective: 'Build the first usable personal planning system',
      priority: 1,
    },
  });

  await prisma.task.createMany({
    data: [
      {
        userId: user.id,
        projectId: project.id,
        title: 'Define first dashboard slice',
        priority: 1,
        estimatedMinutes: 60,
        energyRequired: 'HIGH',
      },
      {
        userId: user.id,
        projectId: project.id,
        title: 'Implement Projects CRUD',
        priority: 2,
        estimatedMinutes: 120,
        energyRequired: 'HIGH',
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());
