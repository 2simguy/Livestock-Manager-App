import { PrismaClient, Sex, LivestockStatus } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.weightRecord.deleteMany();
  await prisma.treatment.deleteMany();
  await prisma.livestock.deleteMany();
  await prisma.field.deleteMany();
  await prisma.farm.deleteMany();
  await prisma.user.deleteMany();
  await prisma.species.deleteMany();

  // Seed species
  const cow = await prisma.species.create({ data: { name: 'Cow' } });
  const sheep = await prisma.species.create({ data: { name: 'Sheep' } });
  const goat = await prisma.species.create({ data: { name: 'Goat' } });

  // Seed users with farms and fields
  const users = await Promise.all(
    [
      { name: 'Demo', email: 'demo@demo.com', password: 'demo' },
      { name: 'Alice', email: 'alice@example.com', password: 'password1' },
      { name: 'Bob', email: 'bob@example.com', password: 'password2' },
      { name: 'Carol', email: 'carol@example.com', password: 'password3' },
      { name: 'Dave', email: 'dave@example.com', password: 'password4' },
      { name: 'Eve', email: 'eve@example.com', password: 'password5' },
    ].map(async (u, index) => {
      const user = await prisma.user.create({ data: u });
      // Create a farm for each user
      const farm = await prisma.farm.create({
        data: {
          name: `${u.name}'s Farm`,
          location: `Location ${index + 1}`,
          users: { connect: { id: user.id } },
        },
      });

      // Add two fields for each farm
      await prisma.field.createMany({
        data: [
          {
            name: `Field A${index + 1}`,
            farmId: farm.id,
            location: 'Pasture',
            latitude: 10 + index,
            longitude: 20 + index,
          },
          {
            name: `Field B${index + 1}`,
            farmId: farm.id,
            location: 'Barnyard',
            latitude: 11 + index,
            longitude: 21 + index,
          },
        ],
      });

      return user;
    }),
  );

  const fields = await prisma.field.findMany();
  const farms = await prisma.farm.findMany();

  // Seed livestock
  const sexes = [Sex.Male, Sex.Female];
  const speciesList = [cow, sheep, goat];
  const animals = [] as { id: number; farmId: number }[];
  for (let i = 0; i < 20; i++) {
    const farm = farms[i % farms.length];
    const field = fields.find((f) => f.farmId === farm.id)!;
    const species = speciesList[i % speciesList.length];
    const sex = sexes[i % sexes.length];
    const animal = await prisma.livestock.create({
      data: {
        tagNumber: `A${(i + 1).toString().padStart(3, '0')}`,
        speciesId: species.id,
        breed: species.name + ' Breed',
        sex,
        dateOfBirth: new Date(2024, i % 12, 1 + (i % 28)),
        fieldId: field.id,
        status: LivestockStatus.Healthy,
        farmId: farm.id,
      },
    });
    animals.push({ id: animal.id, farmId: farm.id });
  }

  // Create simple parent relations for first few animals
  if (animals.length >= 2) {
    await prisma.livestock.update({
      where: { id: animals[1].id },
      data: { fatherId: animals[0].id },
    });
  }

  // Seed weight records and treatments
  for (const animal of animals) {
    await prisma.weightRecord.create({
      data: {
        livestockId: animal.id,
        date: new Date(),
        weightKg: 200,
      },
    });
    if (animal.id % 5 === 0) {
      await prisma.treatment.create({
        data: {
          livestockId: animal.id,
          date: new Date(),
          treatmentType: 'Vaccination',
          notes: 'Initial vaccine',
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
