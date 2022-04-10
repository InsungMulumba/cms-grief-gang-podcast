module.exports = {
  // Target must be serverless
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/blog/page/1",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};
