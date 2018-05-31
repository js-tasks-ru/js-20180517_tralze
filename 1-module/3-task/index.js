'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let numbers = str.match( /[0-9.-]+/g ),	
		big, small = Infinity;

	numbers.forEach(( val ) => {
		val = parseFloat( val );
	
		if( Number.isNaN( val ) )
			return;
			
		if( big == undefined || val > big )
			big = val;
		
		if( val < small )
			small = val;
	});
	
	return { min: small, max: big };
}