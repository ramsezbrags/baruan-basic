const panels = document.queryselectorAll('.panel')

panels.forEach(panel => {
	panel.addEventListener('click', () =>{
		removeActiveClasses()
		panel.classlist.add('active')
	})
})
function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classlist.remove('active')
	})
}