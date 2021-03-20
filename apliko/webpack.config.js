export const module = {
    rules: [
        {
            test: /\.css$/i,
            loader: "css-loader",
            options: {
                modules: true,
            },
        },
    ],
};