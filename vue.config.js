module.exports = {
	publicPath: './',
	outputDir: 'dist/build/h5',
	devServer: {
		proxy: { //配置跨域      
			'/nbgt': {
				target: 'https://visitor.chisage.com:8769', //这里后台的地址模拟的;应该填写你们真实的后台接口       
				changOrigin: true, //允许跨域        
				pathRewrite: {
					'^/nbgt': '/nbgt' //重写路径
				},
			},
		},
	},


}
