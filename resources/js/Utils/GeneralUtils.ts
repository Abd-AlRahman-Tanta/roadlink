export const getSearchParam = (key: string) => {
  return new URLSearchParams(window.location.search).get(key);
};
