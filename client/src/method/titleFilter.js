export const doFilter = (proTypes, setFilter, products) => {
  switch (proTypes) {
    case "IP":
      setFilter(products.filter((item) => item.attributes.proTypes === "IP"));
      break;
    case "Laptop":
      setFilter(
        products.filter((item) => item.attributes.proTypes === "Laptop")
      );
      break;
    case "HDCVI":
      setFilter(
        products.filter((item) => item.attributes.proTypes === "HDCVI")
      );
      break;
    case "Security":
      setFilter(
        products.filter((item) => item.attributes.proTypes === "Security")
      );
      break;
    case "Desktop":
      setFilter(
        products.filter((item) => item.attributes.proTypes === "Desktop")
      );
      break;

    case "OtherProduct":
      setFilter(
        products.filter((item) => item.attributes.proTypes === "OtherProduct")
      );
      break;

    default:
      setFilter(products);
      break;
  }
};
