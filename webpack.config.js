const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDevelopment = () => process.env.NODE_ENV === 'development';
const isProduction = () => process.env.NODE_ENV === 'production';

module.exports = {
    mode: isDevelopment() ? 'development' : 'production', 
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'web',
    devServer: {
        port: '9500',
        static: ['./dist'],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(sc|c)ss$/,
                exclude: /\.module\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: 'global',
                            sourceMap: false,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.module\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                mode: 'local',
                                localIdentName: isDevelopment() ? '[path][name]__[local]' : '[hash:base64:5]',
                            },
                            sourceMap: false,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        isProduction() ? new CleanWebpackPlugin() : false,
    ].filter(Boolean)
}
