const key = "56fcf65284b443d2b909c9ef1cb78230";

const host = "matthew-web.com";

const urlList = [
  "https://matthew-web.com/",
  "https://matthew-web.com/services",
  "https://matthew-web.com/website-design",
  "https://matthew-web.com/custom-software",
  "https://matthew-web.com/seo-and-indexing",
  "https://matthew-web.com/small-business-websites",
  "https://matthew-web.com/free-game-hub-project",
  "https://matthew-web.com/about-us",
  "https://matthew-web.com/examples",
  "https://matthew-web.com/blog",
  "https://matthew-web.com/testimonials",
  "https://matthew-web.com/pricing",
  "https://matthew-web.com/contact-us",
  "https://matthew-web.com/privacy-policy",
  "https://matthew-web.com/terms",
  "https://matthew-web.com/code-of-ethics",
];

const body = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

const text = await response.text();

console.log("IndexNow status:", response.status);
console.log("IndexNow response:", text || "(empty response)");