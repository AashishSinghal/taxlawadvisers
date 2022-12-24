import {client} from './sanity.client';
import imageUrlbuilder from '@sanity/image-url';

const builder = imageUrlbuilder(client);

export default function urlFor(source: any){
    return builder.image(source)
}
