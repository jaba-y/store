import { Injectable } from '@angular/core';
import { Products } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  products: Array<Products> = [{
    name: 'Color Box',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/art-set/z/k/g/asa-products-46-pieces-color-box-original-imaehc8v6rgd3hkx.jpeg?q=70',
    description: 'Bright colors',
    imageAlt: './../assets/i1.jpg',
    isAvailable: false,
    price: 20
  },
  {
    name: 'Glass Colors',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/jpmxuvk0/art-set/v/m/a/6-shades-glass-color-set-fevicryl-original-imafbttpjznh5r3u.jpeg?q=70',
    description: 'Colorful glasses',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 5
  },
  {
    name: 'Brush sets',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/j98t0280/art-set/t/5/f/5406-da-vinci-original-imaez34ge7aqvvhd.jpeg?q=70',
    description: 'Lots of tips',
    imageAlt: './../assets/i1.jpg',
    isAvailable: false,
    price: 15
  },
  {
    name: 'Water color',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/jxrv4i80/art-set/y/g/w/hhash363-hhash-original-imafhahpnuevvmhn.jpeg?q=70',
    description: 'Amiable',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 13
  },
  {
    name: 'Acrylic colors',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/k1118cw0/art-set/z/z/p/pidilite-fluid-painting-kit-fevicryl-original-imafkzapwan7xsyw.jpeg?q=70',
    description: 'Amiable',
    imageAlt: './../assets/i1.jpg',
    isAvailable: false,
    price: 3.5
  },
  {
    name: 'Sewing tools',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/jmf76vk0/art-craft-kit/x/8/c/sewing-kit-rg-sw1-reglox-original-imaf9bftxxjy6fvj.jpeg?q=70',
    description: 'Dream Maker',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 17
  },
  {
    name: 'Brush Pen',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/jur9nrk0/art-set/6/8/t/brush-pen-set-pack-of-24-multicolor-camlin-original-imaffqazbnpkhezn.jpeg?q=70',
    description: 'Fun with colors',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 7
  },
  {
    name: 'Oil colors',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/art-set/r/4/h/artist-s-oil-color-box-20ml-tubes-12-shades-camlin-original-imaf594mzaxzc8vr.jpeg?q=70',
    description: 'Colorful',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 9
  },
  {
    name: 'Color Wheel',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/416/416/j6mhxu80/art-craft-kit/y/z/q/sky-kidz-colour-wheel-101-pcs-mitashi-original-imaexfkp22h56jwk.jpeg?q=70',
    description: 'Lots of colors',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 10
  },
  {
    name: 'Arts set',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/612/612/jt395zk0/art-set/t/g/8/67-pieces-art-set-zahuu-original-imafeggartygzmnn.jpeg?q=70',
    description: 'Amiable',
    imageAlt: './../assets/i1.jpg',
    isAvailable: true,
    price: 12
  }];
  getProducts() {
    return this.products;
  }
}
