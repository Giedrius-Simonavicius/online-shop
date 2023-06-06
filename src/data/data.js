import { v4 as uuidv4 } from 'uuid';

export const customPcs = [
  {
    mainImg: '../../public/images/pcs/customBuildsimg.png',
    title: 'Custom Builds',
    link: 'all-products/custom-pcs',
  },

  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5512AI',
    price: 359.0,
    discount: 10,

    inStock: true,
    stars: 3,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc1.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 1060 SUPER, 8GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'Black',
      'NVIDIA GeForce RTX 3070 8GB GDDR6',
      '4GB DDR4 RAM (2666MHz)',
      '2 total slots (64GB Max)',
      '256 GB NVMe M.2 SSD, 1TB HDD (5400RPM)',
      'Gaming Keyboard and Mouse Included',
      'Drive bays: 3.5" HDD (0/0), 2.5" HDD/SSD (1/0), M.2 (1/0)',
      'Intel Ethernet (10/100/1000M)',
      'WiFi 6 (AX200) + Bluetooth 5.1',
      '330W Power Supply Unit',
      'Effective Fan Cooling System',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5513AI',
    price: 1499.0,
    discount: 0,
    inStock: true,
    stars: 3,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc5.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5514AI',
    price: 1499.0,
    discount: 20,
    inStock: true,
    stars: 2,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc2.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5516AI',
    price: 899.0,
    discount: 50,
    inStock: false,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc3.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5517AI',
    price: 699.0,
    discount: 5,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc4.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5518AI',
    price: 799.0,
    discount: 3,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc5.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'Custom-Built Performance Beast - Unleash the Power of MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC...',
    name: 'MSI Pro 20 Custom',
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
    productId: 'CBPC D5511AI',
    price: 899.0,
    discount: 0,
    inStock: true,
    stars: 3,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc1.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 3070 RTX, 16GB RAM, 1tb SSD, 2TB HDD, Windows 10 Pro, Gaming Keyboard and Mouse, Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'Black',
      'NVIDIA GeForce RTX 3070 8GB GDDR6',
      '16GB DDR4 RAM (2666MHz)',
      '2 total slots (64GB Max)',
      '1TB NVMe M.2 SSD, 2TB HDD (5400RPM)',
      'Gaming Keyboard and Mouse Included',
      'Drive bays: 3.5" HDD (0/0), 2.5" HDD/SSD (1/0), M.2 (1/0)',
      'Intel Ethernet (10/100/1000M)',
      'WiFi 6 (AX200) + Bluetooth 5.1',
      '850W Power Supply Unit',
      'Effective Fan Cooling System',
    ],
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5519AI',
    price: 299.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc3.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5510AI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc2.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5525AI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc1.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5535AI',
    price: 1499.0,
    discount: 10,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc4.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5545AI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc2.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5555AI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc3.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5565AI',
    price: 499.0,
    discount: 20,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc4.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'CBPC D5575AI',
    price: 899.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/pcs/pc5.jpg',
    category: "custom PC's",
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
];
export const laptops = [
  {
    mainImg: '../../public/images/laptops/laptopMain.jpg',
    title: 'MSI Laptops',
    link: 'all-products/laptops',
  },

  {
    description:
      '222EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5585AI',
    price: 499.0,
    discount: 13,
    inStock: true,
    stars: 3,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop1.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5595AI',
    price: 499.0,
    discount: 12,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop1.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5115AI',
    price: 499.0,
    discount: 15,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop5.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5215AI',
    price: 499.0,
    discount: 10,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop2.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5315AI',
    price: 499.0,
    discount: 1,
    inStock: false,
    stars: 3,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop3.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5415AI',
    price: 499.0,
    discount: 25,
    inStock: false,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop4.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'LPT D5615AI',
    price: 499.0,
    discount: 50,
    inStock: true,
    stars: 1,
    id: uuidv4(),
    thumbnail: '../../public/images/laptops/laptop5.jpg',
    category: 'laptops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
];
export const desktops = [
  {
    mainImg: '../../public/images/desktops/desktops.jpg',
    title: 'Desktops',
    link: 'all-products/desktops',
  },

  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5715AI',
    price: 499.0,
    discount: 90,
    inStock: false,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop1.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5815AI',
    price: 499.0,
    discount: 10,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop5.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5915AI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop2.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5515BI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop3.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5515AB',
    price: 499.0,
    discount: 18,
    inStock: false,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop4.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'DSK D5515CI',
    price: 499.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/desktops/desktop5.jpg',
    category: 'desktops',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
];
export const monitors = [
  {
    mainImg: '../../public/images/monitors/monitors.jpg',
    title: 'Gaming Monitors',
    link: 'all-products/monitors',
  },

  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'MON D5515HI',
    price: 499.0,
    discount: 10,
    inStock: false,
    stars: 0,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor1.jpg',
    category: 'monitors',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'MON D5545JI',
    price: 499.0,
    discount: 20,
    inStock: false,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor5.jpg',
    category: 'monitors',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'MON D5535AP',
    price: 499.0,
    discount: 30,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor2.jpg',
    category: 'monitors',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'MON D5510AV',
    price: 499.0,
    discount: 5,
    inStock: true,
    stars: 5,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor3.jpg',
    category: 'monitors',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description:
      'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    name: 'MSI Pro 16 Flex-036AU',
    productId: 'MON D5565AE',
    price: 499.0,
    discount: 0,
    inStock: false,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor4.jpg',
    category: 'monitors',
    aboutProduct:
      'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description: 'EX DISPLAY : MSI Pro 16 Business Panel VA 1920x1080 16:9...',
    name: 'LCD Monitor LG 22MP410-B',
    productId: 'MON D5575UI',
    price: 1499.0,
    discount: 40,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor5.jpg',
    category: 'monitors',
    aboutProduct:
      'LCD Monitor LG 22MP410-B 21.45" Business Panel VA 1920x1080 16:9 Tilt Colour Black 22MP410-B',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
  {
    description: 'DISPLAY : GIGABYTE G27FC A 27" All-In-On...',
    name: 'GIGABYTE G27FC A 27"',
    productId: 'MON D5225AQ',
    price: 1699.0,
    discount: 0,
    inStock: true,
    stars: 4,
    id: uuidv4(),
    thumbnail: '../../public/images/monitors/monitor2.jpg',
    category: 'monitors',
    aboutProduct:
      'LCD Monitor GIGABYTE G27FC A 27" Gaming Panel VA 1920x1080 165Hz 1 ms Speakers Height adjustable Tilt G27FCA-EK',
    details: [
      'Intel Core i7-10700F',
      'Intel H410',
      'WHITE',
      'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
      'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
      '2 total slots (64GB Max)',
      '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
      'Gaming Keyboard GK30 + Gaming Mouse GM11',
      '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
      'Intel WGI219Vethernet (10/100/1000M)',
      'AX200 (WIFI 6)+BT5.1',
      'PSU 330W',
      'Fan Cooler',
    ],
    specs: {
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A',
    },
    get discountedPrice() {
      return (this.price - (this.price * this.discount) / 100).toFixed(2);
    },
  },
];

export const posts = [
  {
    thumbnail: '../../public/images/posts/post1.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post6.jpg',
    text: 'As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...',
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post3.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post4.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post5.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post6.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post7.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post8.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post9.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
  {
    thumbnail: '../../public/images/posts/post10.jpg',
    text: "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    date: '01.09.2020',
    id: uuidv4(),
  },
];

export const comments = [
  {
    author: 'Tama Brown',
    comment:
      'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.',
    id: uuidv4(),
  },
  {
    author: 'Hello Brown',
    comment:
      'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.',
    id: uuidv4(),
  },
  {
    author: 'Tama Yellow',
    comment:
      'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.',
    id: uuidv4(),
  },
  {
    author: 'Hello Green',
    comment:
      'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.',
    id: uuidv4(),
  },
];
export const allPrd = [
  ...customPcs.slice(1),
  ...desktops.slice(1),
  ...laptops.slice(1),
  ...monitors.slice(1),
];

export const customPcsData = customPcs.slice(1);
export const laptopsData = laptops.slice(1);
export const desktopsData = desktops.slice(1);
export const monitorsData = monitors.slice(1);
