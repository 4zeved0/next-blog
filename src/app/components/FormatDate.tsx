import { format } from "date-fns";

export const formattedDate = (date: string): string => {
  return format(new Date(date), 'dd/MM/yyyy');
};
