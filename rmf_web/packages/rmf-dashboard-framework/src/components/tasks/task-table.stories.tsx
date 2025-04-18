import { Paper, TableContainer, TablePagination } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TaskTable } from './task-table';
import { makeTaskState } from './test-data.test';

const tasks = [makeTaskState('task_1'), makeTaskState('task_2'), makeTaskState('task_3')];

export default {
  title: 'Tasks/Table',
  component: TaskTable,
  argTypes: {
    paginationOptions: {
      control: {
        disable: true,
      },
    },
    submitTask: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof TaskTable>;

export const Table: Story = {
  args: {
    tasks,
  },
  render: (args) => {
    const [page, setPage] = React.useState(0);
    const count = page >= args.tasks.length / 10 - 1 ? args.tasks.length : -1;

    return (
      <Paper>
        <TableContainer>
          <TaskTable {...args} tasks={args.tasks.slice(page * 10, (page + 1) * 10)} />
        </TableContainer>
        <TablePagination
          count={count}
          rowsPerPage={10}
          rowsPerPageOptions={[10]}
          page={page}
          onPageChange={(_ev, newPage) => setPage(newPage)}
        />
      </Paper>
    );
  },
};
