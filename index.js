module.exports = function caimanHunter(dispatch) {
	
	//Hooking spawns
	dispatch.hook('S_SPAWN_NPC', 1, event => {
		if(event.npc == 99999992 || event.npc == 99999993) {
			setTimeout(notifier, 0);
			setTimeout(notifier, 1000);
			setTimeout(notifier, 2000);
			setTimeout(notifier, 3000);
			setTimeout(notifier, 4000);
		}
	})
	
	//Party notice
	function notifier() {
		dispatch.toClient('S_CHAT', 1, {
		channel: 21,
		authorName: 'Caiman-hunter',
		message: 'GIGANTIC CAIMAN FOUND!'
		})
	}
}
