import { fireEvent, render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { TaskTable } from './task-table';
import { makeTaskState } from './test-data.test';

describe('TaskTable', () => {
  it('shows all tasks', () => {
    const tasks = [makeTaskState('task_0'), makeTaskState('task_1')];
    const root = render(<TaskTable tasks={tasks} chronologicalOrder={false} />);
    root.getByText('task_0');
    root.getByText('task_1');
  });

  it('onTaskClick is called when task is clicked', () => {
    const tasks = [makeTaskState('task_0')];
    const root = render(<TaskTable tasks={tasks} chronologicalOrder={false} />);
    const elem = root.getByText('task_0');
    fireEvent.click(elem);
  });
});
