module.exports = {
    module: {
      rules: [
        {
          // For pure CSS - /\.css$/i,
          // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
          // For Less - /\.((c|le)ss)$/i,
          test: /\.((c|sa|sc)ss)$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
              options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
            },
            // Can be `less-loader`
            {
              loader: "sass-loader",
            },
          ],
        },
        // For webpack v5
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          // More information here https://webpack.js.org/guides/asset-modules/
          type: "asset",
        },
        // For webpack v4
        // {
        //  test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        //  loader: "url-loader",
        //  options: {
        //    limit: 8192,
        //  },
        // },
      ],
    },
  };