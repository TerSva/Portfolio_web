module.exports = function (eleventyConfig) {
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";
  eleventyConfig.addGlobalData("siteBaseUrl", "https://tersva.github.io");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "index.html": "art/index.html" });
  [
    "IMG_4944.jpg", "IMG_5229.jpg", "IMG_3885.jpg", "IMG_4723.jpg", "IMG_4259.jpg",
    "jobtimer-2.jpg", "jobtimer-3.jpg", "jobtimer-preview.jpg", "bac_liq.jpg",
    "enow-card.jpg", "spotify-card.jpg", "venek-card.jpg", "puls-card.jpg"
  ].forEach(function (asset) {
    eleventyConfig.addPassthroughCopy({ [asset]: "art/" + asset });
  });

  eleventyConfig.addTransform("githubPagesPaths", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html") || pathPrefix === "/") return content;
    const prefix = pathPrefix.replace(/\/$/, "");
    return content.replace(/(href|src|data-url)="([^"]*)"/g, function (match, attribute, value) {
      if (!value.startsWith("/") || value.startsWith("//") || value.startsWith(prefix + "/")) return match;
      return attribute + '=\"' + prefix + value + '\"';
    });
  });

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
