import { DataTable } from '@/components';
import { columns } from '@/components/data-table/columns';
import { taskSchema } from '@/components/data-table/data/schema';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'components/data-table/data/tasks.json'),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Page() {
  const tasks = await getTasks();
  return (
    <div className="min-h-[556.25px]">
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
