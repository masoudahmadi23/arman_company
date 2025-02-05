function formatTitle(title) {
  return title.replace(/ /g, "-");
}

function formatUri(title) {
  return title.replace("-", " ");
}

// function formatBlog(title) {
//   const formattedTitle = title
//     .replace(/[^A-Za-z0-9\u0600-\u06FF]+/g, "-")
//     .replace(/^-|-$/g, "");
//   return formattedTitle;
// }

function convertToPersianDate(dateString) {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "persian",
  };

  return new Intl.DateTimeFormat("fa-IR", options).format(date);
}

export { formatTitle, formatUri, convertToPersianDate };
