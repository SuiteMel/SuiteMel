import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({event, request}) => {
		const data = await request.formData();
    const rating = data.get('rating');

    if ( !rating ) {
      return fail(400, { rating, missing: true });
    }

    

    return { success : true, rating};
	}
};