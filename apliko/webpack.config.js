export const module = {
    rules: [
        {
            test: /\.css$/i,
            loader: "babel-loader",
            options: {
                modules: true,
            },
        },
    ],
};