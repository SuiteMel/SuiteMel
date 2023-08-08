import { results } from './data.js';

export function load() {
	return {
		results: results.map((result) => ({
			category: result.category,
      score: result.score,
      icon: result.icon,
		}))
	};
}