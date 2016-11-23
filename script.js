$(document).ready(() => {
	$('tr:not(#transportType)').hide()

	$('.transportMain').on('click', function() {
		$('tr:not(#transportType)').hide()
		$('#Transport' + $(this).attr('id')).show()
	})

	$('#RouteData').on('click', () => {
		let div = '<div id="RouteSelector" class="selector">เลือกสาย <select>'
		for (var i = 1; i < 10; i++) {
			div += '<option value="' + i + '">' + i + '</option>'
			if(i === 7) {
				div += '<option value="7A">' + '7ก' + '</option>'
			}
		}
		div += '</select></div>'
		$('#contentData').html(div)
	})

	$('#BusStopData').on('click', () => {
		let div = '<div id="BusStopSelector" class="selector">เลือกป้าย <select>'
		div += '<option value="สยาม">สยาม</option>'
		div += '<option value="อนุสาวรีย์ชัยฯ">อนุสาวรีย์ชัยฯ</option>'
		div += '<option value="จตุจัก">จตุจักร</option>'
		div += '<option value="สนามหลวง">สนามหลวง</option>'
		div += '<option value="ประตูน้ำ">ประตูน้ำ</option>'
		div += '</select></div>'
		$('#contentData').html(div)
	})

	$('#TripData').on('click', () => {
		let div = '<div id="TripSelector" class="selector">เลือกต้นทาง <select>'
		div += '<option value="สยาม">สยาม</option>'
		div += '<option value="อนุสาวรีย์ชัยฯ">อนุสาวรีย์ชัยฯ</option>'
		div += '<option value="จตุจัก">จตุจักร</option>'
		div += '<option value="สนามหลวง">สนามหลวง</option>'
		div += '<option value="ประตูน้ำ">ประตูน้ำ</option>'
		div += '</select>'
		div += ' เลือกปลายทาง <select>'
		div += '<option value="สยาม">สยาม</option>'
		div += '<option value="อนุสาวรีย์ชัยฯ">อนุสาวรีย์ชัยฯ</option>'
		div += '<option value="จตุจัก">จตุจักร</option>'
		div += '<option value="สนามหลวง">สนามหลวง</option>'
		div += '<option value="ประตูน้ำ">ประตูน้ำ</option>'
		div += '</select></div>'
		$('#contentData').html(div)
	})
})