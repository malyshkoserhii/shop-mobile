import * as React from 'react';

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = React.useState(value);
	// console.log('✅ ~ useDebounce ~ debouncedValue: ===>>>', debouncedValue);

	const handlerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	React.useEffect(() => {
		handlerRef.current = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			if (handlerRef.current) {
				clearTimeout(handlerRef.current);
			}
		};
	}, [value, delay]);

	return debouncedValue;
};
