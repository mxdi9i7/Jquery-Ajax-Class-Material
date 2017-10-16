$('#btn').click(()=> {
	$('#demo1').hide()
})

$('#showBtn').click(()=> {
	$('#demo1').show()
})





$('#btnToggle').click(()=> {
	handleToggle($('#demo1'))
	handleToggle($('#demo2'))
})

function handleToggle(x) {
	if (x.css("display") == "block") {
		x.css("display", "none")
	} else {
		x.css("display", "block")
	}
}

$('#changeText').click(()=> {
	changeText($('#demo1'))
	changeText($('#demo2'))
})

function changeText(x) {
	if (x.html().length < 21) {
		x.html(x.html() + ", You are a cutie")
	} else {
		if (x.html().length < 40) {
			x.html(x.html() + ", You can get that D later")
		}
	}
}

$('#getValue').click(() => {
	getValue($('#demo1'))
	getValue($('#demo2'))
})

function getValue(x) {
	x.html($('#input1').val())
}



$('#getValue').click(() => {
	$('#demo1').html($('#input1').val())
})


















