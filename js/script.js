let $ = document
let locationKey = $.querySelector('#location')
let whichKey = $.querySelector('#which')
let codeKey = $.querySelector('#code')
let keyKey = $.querySelector('#key')
let title = $.querySelector('title')
let keyCodeKey = $.querySelector('#keyCode')



document.body.addEventListener('keydown', function (event) {

	event.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	let eventLocation =  event.location
	locationKey.innerHTML = eventLocation

	let eventkeyCodeKey =  event.key
	keyCodeKey.innerHTML = eventkeyCodeKey

	let eventkey =  event.key
	keyKey.innerHTML = eventkey

	let eventCode =  event.code
	codeKey.innerHTML = eventCode

	let eventKeyCode =  event.keyCode
	whichKey.innerHTML = eventKeyCode

})





// JS Code By Javad Shahnavaz