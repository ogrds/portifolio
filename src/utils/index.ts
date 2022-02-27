type GetAgeProps = {
  year: number;
  month: number;
  day: number;
};

export function getAge({ year, month, day }: GetAgeProps) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  let totalYears = currentYear - year;

  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    totalYears--;
  }

  return totalYears < 0 ? 0 : totalYears;
}
