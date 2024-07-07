const getActivePath = (value) => {
  if (value === "dashboard" || value === "/") {
    return "dashboard";
  } else if (value === "wallets") {
    return "wallets";
  } else if (value === "expenses") {
    return "expenses";
  } else if (value === "summary") {
    return "summary";
  } else if (value === "accounts") {
    return "accounts";
  } else if (value === "settings") {
    return "settings";
  } else {
    return value;
  }
};

export { getActivePath };

//not added to localStorage service-sub-category
