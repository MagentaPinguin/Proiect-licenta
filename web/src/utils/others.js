export const validateCod = (cod) => {
  const isValid = cod.match("^[A-Z]{2}_[0-9]{4}$");
  if (!isValid) throw new Error("Invalid cod");
  return isValid;
};
export const validateName = (name) => {
  const isValid = name.match("^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$");
  if (!isValid) throw new Error("Invalid name");
  return isValid;
};
