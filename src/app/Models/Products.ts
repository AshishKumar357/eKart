export class Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  sizes: string[];
  colors: string[];
  price: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
  discountedPrice?: number;
  isWishList?: boolean;
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: 'UltraSoft T-Shirt',
//     description: 'A super soft, comfortable t-shirt perfect for daily wear.',
//     brand: 'ComfortWear',
//     gender: 'Unisex',
//     category: 'Apparel',
//     sizes: ['S', 'M', 'L', 'XL'],
//     colors: ['Red', 'Blue', 'Green'],
//     price: 19.99,
//     is_in_inventory: true,
//     items_left: 150,
//     imageURL: 'https://example.com/ultrasoft-tshirt.jpg',
//     slug: 'ultrasoft-t-shirt',
//   },
//   {
//     id: 2,
//     name: 'Waterproof Bluetooth Speaker',
//     description: 'Portable, waterproof speaker with high-quality sound.',
//     brand: 'SoundWave',
//     gender: 'Unisex',
//     category: 'Electronics',
//     sizes: [],
//     colors: ['Black', 'Blue'],
//     price: 45.5,
//     is_in_inventory: true,
//     items_left: 85,
//     imageURL: 'https://example.com/waterproof-bluetooth-speaker.jpg',
//     slug: 'waterproof-bluetooth-speaker',
//   },
//   // Continuing in a similar pattern for brevity, please add more products as needed
//   {
//     id: 3,
//     name: 'Stainless Steel Water Bottle',
//     description: 'Eco-friendly, durable stainless steel water bottle.',
//     brand: 'EcoBottle',
//     gender: 'Unisex',
//     category: 'Home & Kitchen',
//     sizes: [],
//     colors: ['Silver', 'Black'],
//     price: 20.0,
//     is_in_inventory: true,
//     items_left: 120,
//     imageURL: 'https://example.com/stainless-steel-water-bottle.jpg',
//     slug: 'stainless-steel-water-bottle',
//   },
//   // Add additional product entries here...
// ];
