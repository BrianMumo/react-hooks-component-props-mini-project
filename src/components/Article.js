import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Calculate reading time based on minutes
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const repeatTimes = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const readingTime = emoji.repeat(repeatTimes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{readingTime} {minutes} min read | {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
