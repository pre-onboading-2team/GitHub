export const parseMarkdown = (str: string) => {
  return str.replaceAll("`", "`\\");
};
