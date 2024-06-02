// ==UserScript==
// @name		YouTube: Hide UPCOMING Videos
// @namespace	https://source.garden
// @version		1.1
// @license		CC0
// @description	Hide UPCOMING videos on YouTube's pages
// @author		Dym Sohin <re@dym.sh>
// @match		https://youtube.com/*
// @match		https://*.youtube.com/*
// @noframes
// @downloadURL	https://source.garden/scripts/yt-hide-upcoming/raw/branch/latest/script.user.js
// @updateURL	https://source.garden/scripts/yt-hide-upcoming/raw/branch/latest/script.meta.js
// ==/UserScript==

(function() {
	'use strict'

	function removeUpcomingVideos(){
		document
			.querySelectorAll( `ytd-item-section-renderer` )
			.forEach( e =>
			{
				const is_upcoming = e.querySelector( `badge-shape[aria-label="Upcoming"]` )
				if( is_upcoming )
				{
					e.style.display = 'none'
				}
			})
	}

	const observer = new MutationObserver(removeUpcomingVideos)
	observer.observe(
		document.querySelector('#page-manager')
		, { childList:true, subtree:true }
	)

})()
