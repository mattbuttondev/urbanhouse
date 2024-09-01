export const calculateDiscountPercentage = (
  originalPrice: number,
  salePrice: number,
) => {
  const priceDifference = originalPrice - salePrice;
  const discountPercentage = (priceDifference / originalPrice) * 100;
  return Math.round(discountPercentage * 100) / 100;
};

export function formatPrice(
  price: number,
  locale: string = "en-GB",
  currency: string = "GBP",
): string {
  // Validate the price
  if (isNaN(price) || price < 0) {
    throw new Error("Invalid price value");
  }

  // Create a NumberFormat object for the specified locale and currency
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2, // Ensures two decimal places
    maximumFractionDigits: 2, // Ensures two decimal places
  });

  // Format the price
  return formatter.format(price);
}
