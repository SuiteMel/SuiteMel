/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
      sections: {
        'nft-card': { slug: 'nft-card', title: 'NFT preview card component' },
        'qr-code': { slug: 'qr-code', title: 'QR code component' },
        'results-summary': {
          title: 'Results summary component'
        }
      }
  };
}