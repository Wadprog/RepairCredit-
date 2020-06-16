export const AccessLevel = {
  Admin: 0,
  Employee: 1,
  Afilliate: 2,
  Client: 3,
};
export const PersonLevelName = (level) => {
  return level == AccessLevel.Admin
    ? "Admin"
    : level == AccessLevel.Employee
    ? "Employee"
    : level == AccessLevel.Afilliate
    ? "Affilliate"
    : "Client";
};
