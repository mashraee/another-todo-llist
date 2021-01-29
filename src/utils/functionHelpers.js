export const definePriorityClass = (priority) => {
  switch (priority) {
    case 'urgent':
      return 'priority-urgent';
    case 'important':
      return 'priority-important';
    case 'standard':
      return 'standard';
    default:
      break;
  }
};
