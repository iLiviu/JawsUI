angular.module('JawsUI.config', [])
.constant('CONFIG', {
	COLOR_PALLETE: 'teal',
	API_PATH:'http://localhost/test/api/',
//	API_PATH:'http://192.168.13.66:9080/jaws/',
	FILEBROWSE_API_PATH:'http://localhost/test/api/',
//	FILEBROWSE_API_PATH:'http://192.168.1.100/test/api/',
	TACHYON_LOCATION: 'tachyon://location',
	HDFS_LOCATION: 'hdfs://location',
	
	LOGS_PER_PAGE: 20,
	RESULTS_PER_PAGE: 10,
	QUERIES_PER_PAGE: 50
	
});
