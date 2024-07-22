export const formatDate = (dateStr: string): string => {
  if (!dateStr) return "Invalid Date";
  const [day, month, year] = dateStr.split(".");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${parseInt(day)} ${monthNames[parseInt(month) - 1]} ${year}`;
};

export const formatEstimatedDelivery = (dateStr: string): string => {
  const [day, month, year] = dateStr.split(".");
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${dayNames[new Date(`${year}-${month}-${day}`).getDay()]} ${parseInt(
    day,
  )} ${monthNames[parseInt(month) - 1]}`;
};

export const getStatusText = (
  status: string,
  estimatedDelivery: string,
): string => {
  switch (status) {
    case "Delivered":
      return "Delivered";
    case "Refund Requested":
      return "Refund Requested";
    case "Refund Completed":
      return "Refund Completed";
    case "Return Requested":
      return "Return Requested";
    case "Return Completed":
      return "Return Completed";
    case "Compensation Requested":
      return "Compensation Requested";
    case "Compensation Completed":
      return "Compensation Completed";
    default:
      return `Estimated Delivery: ${formatEstimatedDelivery(estimatedDelivery)}`;
  }
};
