<<<<<<< HEAD


google.load('visualization', '1', {
	'packages': ['geochart']
});
google.setOnLoadCallback(drawVisualization);
function drawVisualization() {
	var data = google.visualization.arrayToDataTable([
		['State', 'Value'],
		['An Giang',91.2], 
		['Bà Rịa–Vũng Tàu', 78], 
		['Bắc Giang', 75.6], 
		['Bắc Kạn',63.5], 
		['Bạc Liêu',92.8], 
		['Bắc Ninh',91.8], 
		['Bến Tre', 77.8], 
		['Bình Định', 92.1], 
		['Bình Dương', 59.7], 
		['Bình Phước', 74.3], 
		['Bình Thuận',81.7], 
		['Cà Mau', 85.6], 
		['Cao Bằng', 76.4], 
		['Đắk Lắk',68], 
		['Đắk Nông',84.1], 
		['Điện Biên', 61.7], 
		['Đồng Nai',84.8], 
		['Đồng Tháp', 93.5], 
		['Gia Lai',55], 
		['Hà Giang', 61.2], 
		['Hà Nam', 82.5], 
		['Hà Tĩnh',94.4], 
		['Hải Dương',80.8], 
		['Hậu Giang', 83.7], 
		['Hòa Bình', 74.8], 
		['Hưng Yên', 85.4], 
		['Khánh Hòa', 85.6], 
		['Kiên Giang',89.7], 
		['Kon Tum', 65.4], 
		['Lai Châu', 57], 
		['Lâm Đồng',80.9], 
		['Lạng Sơn',79.8], 
		['Lào Cai',81], 
		['Long An', 82.5], 
		['Nam Định',82.4], 
		['Nghệ An',74.9], 
		['Ninh Bình',81],
		['Ninh Thuận',98.8],
		['Phú Thọ',93.6], 
		['Phú Yên',97.5], 
		['Quảng Bình', 80.3], 
		['Quảng Nam', 88.2], 
		['Quảng Ngãi', 80], 
		['Quảng Ninh',83.1],
		['Quảng Trị',87.2],
		['Sóc Trăng', 80.3], 
		['Sơn La', 74.9], 
		['Tây Ninh',71.1],
		['Thái Bình', 89.4],
		['Thái Nguyên',84.2],
		['Thanh Hóa',82.6], 
		['Thừa Thiên–Huế',93.7], 
		['Tiền Giang',86.2], 
		['Trà Vinh', 72.7], 
		['Tuyên Quang',85.3], 
		['Vĩnh Long',85], 
		['Vĩnh Phúc',88.5], 
		['Yên Bái',85.7],
		['Cần Thơ',88.7],
		['Đà Nẵng',85.6], 
		['Hà Nội', 89.4], 
		['Hải Phòng',89.4], 
		['Hồ Chí Minh (Sài Gòn)',83.6]
]);
  
	var opts = {
	  region: 'VN',
	  displayMode: 'regions',
	  resolution: 'provinces',
	  width: '1100',
	  height: '680',
	  colorAxis:{minValue: 55,  colors: ['#FFFFFF', '#009999',]},
	  backgroundColor: "#3B3B3B",
	  legend:{textStyle: {color: 'black', fontSize: 16}},
	  
	};
	var geochart = new google.visualization.GeoChart(
	  document.getElementById('visualization'));
	geochart.draw(data, opts);
}
=======


google.load('visualization', '1', {
	'packages': ['geochart']
});
google.setOnLoadCallback(drawVisualization);
function drawVisualization() {
	var data = google.visualization.arrayToDataTable([
		['State', 'Value'],
		['An Giang',91.2], 
		['Bà Rịa–Vũng Tàu', 78], 
		['Bắc Giang', 75.6], 
		['Bắc Kạn',63.5], 
		['Bạc Liêu',92.8], 
		['Bắc Ninh',91.8], 
		['Bến Tre', 77.8], 
		['Bình Định', 92.1], 
		['Bình Dương', 59.7], 
		['Bình Phước', 74.3], 
		['Bình Thuận',81.7], 
		['Cà Mau', 85.6], 
		['Cao Bằng', 76.4], 
		['Đắk Lắk',68], 
		['Đắk Nông',84.1], 
		['Điện Biên', 61.7], 
		['Đồng Nai',84.8], 
		['Đồng Tháp', 93.5], 
		['Gia Lai',55], 
		['Hà Giang', 61.2], 
		['Hà Nam', 82.5], 
		['Hà Tĩnh',94.4], 
		['Hải Dương',80.8], 
		['Hậu Giang', 83.7], 
		['Hòa Bình', 74.8], 
		['Hưng Yên', 85.4], 
		['Khánh Hòa', 85.6], 
		['Kiên Giang',89.7], 
		['Kon Tum', 65.4], 
		['Lai Châu', 57], 
		['Lâm Đồng',80.9], 
		['Lạng Sơn',79.8], 
		['Lào Cai',81], 
		['Long An', 82.5], 
		['Nam Định',82.4], 
		['Nghệ An',74.9], 
		['Ninh Bình',81],
		['Ninh Thuận',98.8],
		['Phú Thọ',93.6], 
		['Phú Yên',97.5], 
		['Quảng Bình', 80.3], 
		['Quảng Nam', 88.2], 
		['Quảng Ngãi', 80], 
		['Quảng Ninh',83.1],
		['Quảng Trị',87.2],
		['Sóc Trăng', 80.3], 
		['Sơn La', 74.9], 
		['Tây Ninh',71.1],
		['Thái Bình', 89.4],
		['Thái Nguyên',84.2],
		['Thanh Hóa',82.6], 
		['Thừa Thiên–Huế',93.7], 
		['Tiền Giang',86.2], 
		['Trà Vinh', 72.7], 
		['Tuyên Quang',85.3], 
		['Vĩnh Long',85], 
		['Vĩnh Phúc',88.5], 
		['Yên Bái',85.7],
		['Cần Thơ',88.7],
		['Đà Nẵng',85.6], 
		['Hà Nội', 89.4], 
		['Hải Phòng',89.4], 
		['Hồ Chí Minh (Sài Gòn)',83.6]
]);
  
	var opts = {
	  region: 'VN',
	  displayMode: 'regions',
	  resolution: 'provinces',
	  width: '1100',
	  height: '680',
	  colorAxis:{minValue: 55,  colors: ['#FFFFFF', '#009999',]},
	  backgroundColor: "#3B3B3B",
	  legend:{textStyle: {color: 'black', fontSize: 16}},
	  
	};
	var geochart = new google.visualization.GeoChart(
	  document.getElementById('visualization'));
	geochart.draw(data, opts);
}
>>>>>>> 337430bd3e0b0e9506821ff9db206661a31681b3
  