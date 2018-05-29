"use strict"

/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow( x, n ) {
	if( n < 1 )
		return new Error( "Incorrect parametr 'n'" );
	
	let res = x;
	
	for( let i = 1; i < n; i++ ) {
		res *= x;
	}
	
	return res;
}

let x = prompt( 'x = ', '' ),
	n = prompt( 'n = ', '' ),
	res = pow( x, n );
	
alert( res );