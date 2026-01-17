import { faker } from '@faker-js/faker';
import { columns, Game } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Game[]> {
  return Array.from({ length: 100 }).map(() => ({
    gameCode: faker.string.alphanumeric(10),
    entryImage: `https://picsum.photos/seed/${faker.string.alphanumeric(10)}/200/200`,
    gameName: faker.lorem.words(3),
    category: faker.lorem.words(1),
    redirectUrl: faker.internet.url(),
  }));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
