var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	entry:{
		register  :"./public/react/register.jsx",
        login  :"./public/react/login.jsx"
	},
	output:{
		path:"./public/dist/",
		filename:"[name].js"
	},
	module:{
		loaders:[
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
            },
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"public")
			},
			{
				test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?&name=images/[name].[ext]'
			}
		]
	},
	devServer:{
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000',
				secure: false
			}
		}
	},
	resolve:{
		extensions:['','.js',".css",'.jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
            filename : 'register.html',
			title:"欢迎",
			chunks:["register"]
		}),
        new htmlWebpackPlugin({
        	filename : 'login.html',
            title:"欢迎",
            chunks:["login"]
        })
	]
}