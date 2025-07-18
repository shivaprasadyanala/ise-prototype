export const generateMockSlots = (count) => {
 const statuses = ['available', 'occupied', 'reserved', 'offline'];
 return Array.from({ length: count }, () => ({
  status: statuses[Math.floor(Math.random() * statuses.length)]
 }));
};