import { profile } from "../utils/interfaces";

export const auth = async (cod: string) => {
  const url = process.env.REACT_APP_HTML_URL + "/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cod,
    }),
  });
  const json = await response.json();
  return json;
};

export const updateProfile = async (updateData: {
  cod: string;
  profile: profile;
}) => {
  const url = process.env.REACT_APP_HTML_URL + "/update";
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  const json = await response.json();
  return json;
};
