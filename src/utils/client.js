import Prismic from '@prismicio/client';
const apiEndpoint = 'https://richardkeith.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export default Client;