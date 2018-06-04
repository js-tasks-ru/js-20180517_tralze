/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find( obj, searchValue, pKeys ) {
	let keys = [];
	
	for( let key in obj ) {
		let value = obj[ key ];
		
		if( value === searchValue ) {
			keys.push( pKeys ? `${pKeys}.${key}` : key );
			continue;
		}

		if( typeof value !== 'object' || Array.isArray( value ) )
			continue;

		if( pKeys )
			key = `${pKeys}.${key}`;
		
		let res = find( value, searchValue, key );
		
		if( res === null )
			continue;
		
		if( Array.isArray( res ) )
			keys = keys.concat( res );
		else
			keys.push( res );
	}

	return ( keys.length == 1 ) ? keys[ 0 ] : ( !keys.length ) ? null : keys;
}