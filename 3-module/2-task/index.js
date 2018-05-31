let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
	let current = calendar.from;

	current.setHours( 0 );
	current.setMinutes( 0 );
	current.setSeconds( 0 );
	current.setMilliseconds( 0 );
	
	return {
		next: () => {
			current.setDate( current.getDate() + 1 );
			
			if( current > calendar.to )
				return { done: true };
			
			let currentDay = current.getDate();
			currentDay += '';
			
			if( currentDay < 10 )
				currentDay = '0' + currentDay;

			if( [ 6, 0 ].indexOf( current.getDay() ) !== -1 )
				currentDay = `[${currentDay}]`;
			
			return { done: false, value: currentDay };
		}
	};
};


