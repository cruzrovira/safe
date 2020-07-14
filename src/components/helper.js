export const percentBrand = (brand) => {
  switch (brand) {
    case "American":
      return 0.15;
    case "Europa":
      return 0.05;
    case "Asia":
      return 0.3;
    default:
      break;
  }
};

export const percentPlan = (plan) => {
  switch (plan) {
    case "Basic":
      return 0.2;
    case "Full":
      return 0.5;
    default:
      break;
  }
};
export const differenceOfYear = (year) => {
  let year_init = new Date().getFullYear();
  return year_init - year;
};
