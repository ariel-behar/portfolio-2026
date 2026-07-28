const EXPERIENCE_START_YEAR = 2017;

// Career start date is January 1st, so a plain year subtraction is always
// exact — no month/day comparison needed to know whether the "anniversary"
// has passed yet this year.
export function getYearsOfExperience(): number {
  return new Date().getFullYear() - EXPERIENCE_START_YEAR;
}
