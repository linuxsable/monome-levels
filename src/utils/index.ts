export const create2DArray = (rows: number, cols: number) => {
	return [...Array(rows)].map(e => Array(cols).fill(undefined));
};