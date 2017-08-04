module.exports = function caimanHunter(dispatch) {
	
	//Hooking spawns
	dispatch.hook('S_SPAWN_NPC', 1, event => {
		if(event.id == 99999992 || event.id == 99999993)
		{	
			setTimeout(notifier, 0);
			setTimeout(notifier, 250);
			setTimeout(notifier, 500);
			setTimeout(notifier, 750);
			setTimeout(notifier, 1000);
		}
	})
	
	//Party notice
	function notifier() {
		dispatch.toClient('S_CHAT', 1, {
		channel: 21,
		authorName: 'Caiman-hunter',
		message: 'GIGANTIC CAIMAN FOUND!'
		});
	}
}
