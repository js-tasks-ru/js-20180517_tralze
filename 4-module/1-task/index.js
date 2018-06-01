'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	let el = document.createElement( 'ul' );
	
	el.innerHTML = friends.map( item => `<li>${item.firstName} ${item.lastName}</li>` )
							.join( '' );

	return el;
}
