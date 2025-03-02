const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/App/App.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contenthash].js',
	},
	optimization: {
		minimizer: [new TerserPlugin({ extractComments: false })],
	},
	resolve: {
		alias: {
			General: path.resolve(__dirname, 'src/@assets'),
		},
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
			{
				test: /\.(jpg|png|svg|gif|ico|icns|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			},
			{
				test: /\.mp4$/,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					outputPath: "video"
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							url: false,
						},
					},
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/@assets/fonts', to: 'assets/fonts' },
				{ from: 'src/@assets/icons', to: 'assets/icons' },
				{ from: 'src/@assets/interface', to: 'assets/interface' },
				{ from: 'src/@assets/logo', to: 'assets/logo' },
				{ from: 'src/@assets/projects', to: 'assets/projects' },
			]
		})
	],
};
