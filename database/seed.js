const faker = require('faker');
const { Items, Users, Categories, Searches } = require('./database.js');

const itemList = [];

const categoriesList = [
  {
    title: 'Camp & Hike',
    category: [
      {
        subcategory: 'Backpacks',
        items: [
          'Backpacking Packs',
          'Day Packs',
          'Hydration Packs',
          'Baby Carrier Packs',
          'Waist Packs',
          'Accessories'
        ]
      },
      {
        subcategory: 'Tents',
        items: [
          'Backpacking Tents',
          'Camping Tents',
          'Roof-top Tents',
          'Shelters',
          'Bivy Sacks',
          'Accessories'
        ]
      },
      {
        subcategory: 'Sleeping Bags',
        items: ["Men's", "Women's", 'Double', 'Kids', 'Bag Liners', 'Blankets']
      },
      {
        subcategory: 'Pads & Hammocks',
        items: [
          'Sleeping Pads',
          'Hammocks',
          'Cots',
          'Air Mattresses',
          'Pillows'
        ]
      },
      {
        subcategory: 'Camp Kitchen',
        items: [
          'Stoves',
          'Cookware',
          'Dinnerware',
          'Coffee & Tea',
          'Utensils',
          'Coolers',
          'Food'
        ]
      },
      {
        subcategory: 'Camp Furniture',
        items: ['Chairs', 'Hammocks', 'Tables', 'Fire Pits']
      },
      {
        subcategory: 'Water',
        items: [
          'Glasses, Cups & Mugs',
          'Water Bottles',
          'Water Treatment',
          'Hydration Reservoirs',
          'Vacuum Bottles'
        ]
      },
      {
        subcategory: 'Lighting',
        items: ['Headlamps', 'Flashlights', 'Lanterns']
      },
      {
        subcategory: 'Electronics',
        items: [
          'GPS',
          'Portable Power Devices',
          'Radios',
          'Watches',
          'Two-Way Radios',
          'PLB & Satellite Messengers',
          'Solar Chargers',
          'Portable Speakers'
        ]
      },
      {
        subcategory: 'Gadgets & Gear',
        items: [
          'Trekking Poles',
          'Knives',
          'Binoculars',
          'Compasses',
          'Multi-Tools',
          'Camp Tools'
        ]
      },
      {
        subcategory: 'Hiking Footwear',
        items: ["Men's", "Women's", 'Kids', 'Hiking Socks', 'Gaiters']
      },
      {
        subcategory: 'Hiking Clothing',
        items: [
          'Jackets',
          'Shirts',
          'Pants',
          'Shorts',
          'Hats & Accessories',
          'Sunglasses'
        ]
      },
      {
        subcategory: 'Health & Safety',
        items: [
          'First Aid',
          'Emergency & Survival',
          'Camp Bathroom',
          'Bear Safety Gear',
          'Fire Starting Gear',
          'Sun & Bug Protection'
        ]
      },
      {
        subcategory: 'Accessories',
        items: ['Dog Gear', 'Storage & Maintenance', 'Games & Toys', 'Maps']
      },
      {
        subcategory: 'Camp & Hike Deals',
        items: [
          'Tent Deals',
          'Sleeping Bag Deals',
          'Backpack Deals',
          'REI Outlet Camp & Hike'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'REI Co-op',
          'Big Agnes',
          'YETI',
          'NEMO',
          'Hydro Flask',
          'Garmin'
        ]
      }
    ],
    other: [
      'New Arrivals',
      'Yamanashi Collection',
      'Top Rated Gear',
      'Shop Camping & Hiking Gear'
    ],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionCalendar',
        top: 'Personal Outfitting',
        bottom: 'Schedule a visit'
      },
      {
        icon: 'actionCar',
        top: 'Gear Rentals',
        bottom: 'Outdoor rental equipment'
      }
    ]
  },
  {
    title: 'Climb',
    category: [
      {
        subcategory: 'Climbing Shoes',
        items: [
          'Men’s Climbing',
          "Men's Approach",
          "Women's Climbing",
          "Women's Approach"
        ]
      },
      {
        subcategory: 'Climbing Harnesses',
        items: ['Men’s', 'Women’s', 'Kids']
      },
      {
        subcategory: 'Climbing Ropes',
        items: [
          'Single Ropes',
          'Static & Rescue',
          'Half Ropes',
          'Twin Ropes',
          'Rope Bags'
        ]
      },
      {
        subcategory: 'Webbing & Cords',
        items: ['Cords', 'Slings', 'Webbing', 'Slacklines']
      },
      {
        subcategory: 'Hardware',
        items: [
          'Carabiners',
          'Protection',
          'Quickdraws',
          'Pulleys',
          'Belay & Rappel',
          'Ascenders & Descenders'
        ]
      },
      {
        subcategory: 'Essentials',
        items: [
          'Chalk',
          'Helmets',
          'Packs',
          'Training Gear',
          'Holds',
          'Bouldering Crash Pads'
        ]
      },
      {
        subcategory: 'Climbing Clothing',
        items: [
          'Men’s Rock',
          'Men’s Mountaineering',
          'Women’s Rock',
          "Women's Mountaineering",
          'Rappelling Gloves'
        ]
      },
      {
        subcategory: 'Mountaineering',
        items: [
          'Crampons',
          'Ice Axes & Tools',
          'Mountaineering Boots',
          'Mountaineering Tents',
          'Snow & Ice Protection'
        ]
      },
      {
        subcategory: 'Climbing Deals',
        items: [
          'Climbing Shoe Deals',
          'Climbing Harness Deals',
          'REI Outlet Climbing'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'Black Diamond',
          'La Sportiva',
          'Petzl',
          'Scarpa',
          'Mammut',
          'Metolius'
        ]
      }
    ],
    other: [
      'New Arrivals',
      'Gym Climbing',
      'Top Rated Gear',
      'Shop Climbing Gear'
    ],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionCar',
        top: 'Gear Rentals',
        bottom: 'Outdoor rental equipment'
      }
    ]
  },
  {
    title: 'Cycle',
    category: [
      {
        subcategory: 'Bikes',
        items: [
          'Mountain Bikes',
          'Road Bikes',
          'Hybrid Bikes',
          'Electric Bikes',
          'Specialty Bikes',
          "Kids' Bikes"
        ]
      },
      {
        subcategory: 'Bike Helmets',
        items: ['Mountain', 'Road', 'Recreational', 'Kids']
      },
      {
        subcategory: 'Cycling Clothing',
        items: ['Jackets', 'Jerseys', 'Shorts', 'Tights & Pants', 'Accessories']
      },
      {
        subcategory: 'Cycling Shoes',
        items: ['Mountain', 'Road', 'City', 'Cleats', 'Cycling Socks']
      },
      {
        subcategory: 'Packs, Bags & Trailers',
        items: [
          'Panniers & Bike Bags',
          'Packs & Messengers',
          'Bike Trailers',
          'Bike Cargo Racks'
        ]
      },
      {
        subcategory: 'Bike Accessories',
        items: [
          'Computers',
          'Lights',
          'Locks',
          'Pumps',
          'Trainers',
          'Water Bottles',
          'Fenders'
        ]
      },
      {
        subcategory: 'Bike Racks',
        items: [
          'Hitch-mounted',
          'Roof-top',
          'Trunk-mounted',
          'Truck Bed',
          'Bike Storage Racks'
        ]
      },
      {
        subcategory: 'Bike Components',
        items: [
          'Tires, Tubes & Wheels',
          'Pedals',
          'Brakes',
          'Drivetrain Components',
          'Handlebars',
          'Saddles & Seat Posts'
        ]
      },
      {
        subcategory: 'Tools & Maintenance',
        items: ['Bike Tools', 'Lubricants & Cleaners', 'Repair Stands']
      },
      {
        subcategory: "Kids' Cycling",
        items: [
          'Child Bike Seats',
          'Kids’ Trailers',
          'Kids’ Bikes',
          'Kids’ Helmets'
        ]
      },
      {
        subcategory: 'Cycling Deals',
        items: [
          'Bike Deals',
          'Cycling Clothing Deals',
          'Bike Accessories Deals',
          'REI Outlet Cycling'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'Co-op Cycles',
          'Cannondale',
          'Shimano',
          'Yakima',
          'Bontrager',
          'PEARL iZUMi'
        ]
      }
    ],
    other: ['New Arrivals', 'Indoor Cycling', 'Shop Cycling Gear'],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      { icon: 'actionCog', top: 'Shop Services', bottom: "We'll fix you up" },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionCar',
        top: 'Gear Rentals',
        bottom: 'Outdoor rental equipment'
      }
    ]
  },
  {
    title: 'Paddle',
    category: [
      {
        subcategory: 'Kayaks',
        items: [
          'Touring',
          'Day-touring',
          'Recreational',
          'Sit-On-Top',
          'Inflatable',
          'Tandem'
        ]
      },
      {
        subcategory: 'Kayaking Gear',
        items: [
          'Paddles',
          'Carts',
          'Accessories',
          'Safety Equipment',
          'Spray Skirts',
          'Kayak Storage'
        ]
      },
      {
        subcategory: 'Paddle Boarding',
        items: ['Paddle Boards', 'Paddles', 'Accessories']
      },
      { subcategory: 'Canoeing', items: ['Canoes', 'Paddles', 'Accessories'] },
      { subcategory: 'PFDs', items: ['Men’s', 'Women’s', 'Kids’'] },
      {
        subcategory: 'Paddling Clothing',
        items: [
          'Wetsuits',
          'Dry Suits',
          'Paddling Jackets',
          'Pants',
          'Rashguards',
          'Gloves'
        ]
      },
      { subcategory: 'Paddling Footwear', items: ['Booties', 'Socks'] },
      {
        subcategory: 'Bags & Cases',
        items: ['Dry Bags', 'Waterproof Cases', 'Canoe Packs']
      },
      {
        subcategory: 'Accessories',
        items: ['Fishing Gear', 'Safety Gear', 'Snorkeling', 'Rafts & Tubes']
      },
      {
        subcategory: 'Car Racks',
        items: ['Kayak Racks', 'Canoe Racks', 'Paddle Board Racks']
      },
      {
        subcategory: 'Paddling Deals',
        items: [
          'Kayaking Deals',
          'Paddle Board Deals',
          'Paddle Clothing Deals',
          'REI Outlet Paddling'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'Hobie',
          'NRS',
          'Carve Designs',
          'Wilderness Systems',
          'Perception',
          'Eddyline'
        ]
      }
    ],
    other: ['New Arrivals', "Women's Swimwear", 'Shop Paddling Gear'],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionCar',
        top: 'Gear Rentals',
        bottom: 'Outdoor rental equipment'
      }
    ]
  },
  {
    title: 'Run',
    category: [
      {
        subcategory: "Men's Running Shoes",
        items: [
          'Trail-Running',
          'Road-Running',
          'Cross-Training',
          'Insoles',
          'Running Socks'
        ]
      },
      {
        subcategory: "Men's Running Clothing",
        items: [
          'Jackets',
          'Vests',
          'Shirts',
          'Shorts',
          'Pants & Tights',
          'Accessories'
        ]
      },
      {
        subcategory: "Women's Running Shoes",
        items: [
          'Trail-Running',
          'Road-Running',
          'Cross-Training',
          'Insoles',
          'Running Socks'
        ]
      },
      {
        subcategory: "Women's Running Clothing",
        items: [
          'Jackets',
          'Vests',
          'Shirts',
          'Sports Bras',
          'Shorts',
          'Pants & Tights',
          'Accessories'
        ]
      },
      {
        subcategory: 'Injury Prevention & Recovery',
        items: ['Foam Rollers', 'Massagers', 'Support Braces & Tape']
      },
      {
        subcategory: 'Electronics',
        items: [
          'Activity Trackers',
          'Heart Rate Monitors',
          'GPS Sports Watches',
          'Running Watches',
          'Headphones'
        ]
      },
      {
        subcategory: 'Running Packs',
        items: [
          'Hydration Belts',
          'Hydration Vests & Packs',
          'Race Belts',
          'Water Bottles'
        ]
      },
      {
        subcategory: 'Accessories',
        items: [
          'Energy Food & Drinks',
          'Reflective Gear',
          'Running Lights',
          'Sport Sunglasses'
        ]
      },
      {
        subcategory: 'Run Deals',
        items: [
          'Men’s Clothing Deals',
          'Men’s Shoe Deals',
          'Women’s Clothing Deals',
          'Women’s Shoe Deals',
          'REI Outlet Running'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'Altra',
          'Brooks',
          'HOKA ONE ONE',
          'Patagonia',
          'Salomon',
          'Vuori'
        ]
      }
    ],
    other: [
      'New Post-Pandemic Arrivals',
      'Post Run Recovery Gear & Slides',
      'Cold Weather Training',
      'Explore All Things Run'
    ],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      }
    ]
  },
  {
    title: 'Snow',
    category: [
      {
        subcategory: 'Downhill Skiing',
        items: [
          'Skis',
          'Boots',
          'Bindings',
          'Poles',
          'Goggles',
          'Helmets',
          'Packs & Bags',
          'Accessories'
        ]
      },
      {
        subcategory: 'Downhill Ski Clothing',
        items: ['Men’s', 'Women’s', 'Kids’', 'Gloves, Hats & Socks']
      },
      {
        subcategory: 'Snowboarding',
        items: [
          'Snowboards',
          'Boots',
          'Bindings',
          'Goggles',
          'Helmets',
          'Packs & Bags',
          'Accessories'
        ]
      },
      {
        subcategory: 'Snowboard Clothing',
        items: ['Men’s', 'Women’s', 'Kids’', 'Gloves, Hats & Socks']
      },
      {
        subcategory: 'Snowshoeing',
        items: ['Snowshoes', 'Winter Boots', 'Accessories']
      },
      {
        subcategory: 'Backcountry Skiing',
        items: [
          'Skis',
          'Boots',
          'Bindings',
          'Poles',
          'Climbing Skins',
          'Ski Packs'
        ]
      },
      {
        subcategory: 'Cross-Country Skiing',
        items: ['Skis', 'Boots', 'Bindings', 'Poles', 'Waxing & Tuning']
      },
      { subcategory: 'Cross-Country Clothing', items: ['Men’s', 'Women’s'] },
      {
        subcategory: 'Avalanche Safety Gear',
        items: [
          'Avalanche Packs',
          'Avalanche Transceivers',
          'Snow Shovels',
          'Snow Probes'
        ]
      },
      {
        subcategory: 'Snow Accessories',
        items: ['Action Cameras', 'Hand & Foot Warmers', 'Winter Traction']
      },
      {
        subcategory: 'Snow Deals',
        items: [
          'Downhill Skiing Deals',
          'Backcountry Ski Deals',
          'XC Skiing Deals',
          'Snowboarding Deals',
          'Snowshoeing Deals',
          'REI Outlet Snow'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'Burton',
          'Rossignol',
          'Thule',
          'K2',
          'Marker',
          'Picture Organic Clothing'
        ]
      }
    ],
    other: ['Shop Base Layers', 'Shop Snowsports Gear'],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      { icon: 'actionCog', top: 'Shop Services', bottom: "We'll fix you up" },
      {
        icon: 'actionStopwatch',
        top: 'Classes',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionCar',
        top: 'Gear Rentals',
        bottom: 'Outdoor rental equipment'
      },
      {
        icon: 'actionMagic',
        top: 'Ski Boot Fit Wizard',
        bottom: 'Find the right boots for you'
      }
    ]
  },
  {
    title: 'Travel',
    category: [
      {
        subcategory: 'Luggage',
        items: [
          'Carry-On Luggage',
          'Wheeled Luggage',
          'Travel Packs',
          'Travel Duffels',
          'Packing Organizers',
          'Accessories'
        ]
      },
      {
        subcategory: 'Day Bags',
        items: [
          'Duffel Bags',
          'Shoulder Bags',
          'Messenger Bags',
          'Tote Bags',
          'Wallets & Money Belts'
        ]
      },
      {
        subcategory: 'Backpacks',
        items: ['Travel Backpacks', 'Travel Daypacks', 'Computer Backpacks']
      },
      {
        subcategory: 'REI Adventures Trips',
        items: [
          'Africa',
          'Antarctica',
          'Asia',
          'Australia & New Zealand',
          'Central America',
          'Europe',
          'North America',
          'South America',
          'US National Parks'
        ]
      },
      {
        subcategory: 'Car Racks',
        items: [
          'Cargo Boxes & Bags',
          'Bike Racks',
          'Watercraft Racks',
          'Ski & Snowboard',
          'Base Roof Racks'
        ]
      },
      { subcategory: 'Travel Clothing', items: ['Men’s', 'Women’s', 'Kids’'] },
      {
        subcategory: 'Electronics Bags & Cases',
        items: ['Computer Bags', 'Camera Bags', 'Phone Cases']
      },
      {
        subcategory: 'Specialty Trips',
        items: [
          'Family Trips',
          'Signature Camping',
          "Women's Adventures",
          'Volunteer Vacations'
        ]
      },
      {
        subcategory: 'Travel Accessories',
        items: [
          'Pillows & Sleeping',
          'Converters & Adapters',
          'Keychains',
          'Portable Power Devices',
          'Toiletry Bags',
          'Travel Mugs'
        ]
      },
      { subcategory: 'Photography', items: ['Action Cameras', 'Camera Bags'] },
      {
        subcategory: 'Travel Deals',
        items: [
          'Luggage Deals',
          'Backpack Deals',
          'Day Bag Deals',
          'Travel Clothing Deals',
          'REI Outlet Travel'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'REI Co-op',
          'Osprey',
          'ExOfficio',
          'The North Face',
          'Patagonia',
          'Herschel Supply Co.'
        ]
      }
    ],
    other: [
      'New Arrivals',
      'Top Rated Mid-Pandemic Travel Gear',
      'REI Co-op Everyday Clothing & Gear',
      'Shop Travel Gear'
    ],
    actions: [
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionCalendar',
        top: 'Personal Outfitting',
        bottom: 'Schedule a visit'
      }
    ]
  },
  {
    title: 'Yoga',
    category: [
      {
        subcategory: 'Women’s Yoga Clothing',
        items: ['Shirts', 'Sports Bras', 'Pants', 'Shorts', 'Plus Size']
      },
      {
        subcategory: 'Men’s Yoga Clothing',
        items: ['Shirts', 'Pants', 'Shorts']
      },
      {
        subcategory: 'Yoga Gear',
        items: ['Yoga Mats', 'Mat Bags', 'Mat Holders', 'Props', 'Towels']
      },
      {
        subcategory: 'Injury Prevention & Recovery',
        items: ['Foam Rollers', 'Massagers', 'Support Braces']
      },
      {
        subcategory: 'Fitness Electronics',
        items: [
          'Activity Trackers',
          'Heart Rate Monitors',
          'GPS Sports Watches',
          'Running Watches',
          'Headphones'
        ]
      },
      {
        subcategory: 'Accessories',
        items: ['Food & Drink', 'Water Bottles', 'Gym Bags']
      },
      {
        subcategory: 'Yoga Deals',
        items: [
          'Women’s Deals',
          'Men’s Deals',
          'Yoga Gear Deals',
          'REI Outlet Yoga'
        ]
      },
      { subcategory: 'Brands', items: ['prAna', 'Beyond Yoga', 'Hyperice'] }
    ],
    other: ['New Arrivals', 'Street to Studio', 'Maternity', 'Shop Yoga'],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      }
    ]
  },
  {
    title: 'Men',
    category: [
      {
        subcategory: 'Footwear',
        items: ['Boots', 'Shoes', 'Sandals', 'Slippers', 'Insoles', 'Socks']
      },
      {
        subcategory: 'Jackets',
        items: [
          'Casual Jackets',
          'Down & Insulated',
          'Fleece & Soft-Shell',
          'Rain Jackets',
          'Running Jackets',
          'Wind Shells',
          'Ski & Snowboard'
        ]
      },
      { subcategory: 'Tops', items: ['Shirts', 'Sweaters & Hoodies', 'Vests'] },
      { subcategory: 'Bottoms', items: ['Pants', 'Shorts'] },
      {
        subcategory: 'Underwear',
        items: ['Briefs & Boxers', 'Base Layer Tops', 'Base Layer Bottoms']
      },
      {
        subcategory: 'Swimwear',
        items: ['Swim Trunks', 'Rashguards', 'Goggles']
      },
      {
        subcategory: 'Accessories',
        items: [
          'Hats',
          'Gloves & Mittens',
          'Belts',
          'Gaiters',
          'Scarves & Headbands'
        ]
      },
      { subcategory: 'More', items: ['Sunglasses', 'Watches'] },
      { subcategory: 'Big, Tall & Short', items: ['Big', 'Tall', 'Short'] },
      {
        subcategory: 'By Activity',
        items: [
          'Hiking Clothing',
          'Cycling Clothing',
          'Running Clothing',
          'Ski Clothing',
          'Snowboard Clothing',
          'Travel Clothing',
          'Yoga Clothing'
        ]
      },
      {
        subcategory: 'Men’s Deals',
        items: [
          'Jackets Deals',
          'Shirts Deals',
          'Pants Deals',
          'Footwear Deals',
          'REI Outlet Men’s Clothing',
          'REI Outlet Men’s Footwear'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'REI co-op',
          'KUHL',
          'Merrell',
          "Arc'teryx",
          'Patagonia',
          'Vuori'
        ]
      }
    ],
    other: [
      "Men's Spring New Arrivals",
      'REI Co-op Everyday Clothing & Gear',
      'Sale & Clearance: Up to 50% Off',
      "Men's Waterproof Jackets, Boots & Gear"
    ],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionCalendar',
        top: 'Personal Outfitting',
        bottom: 'Schedule a visit'
      }
    ]
  },
  {
    title: 'Women',
    category: [
      {
        subcategory: 'Footwear',
        items: ['Boots', 'Shoes', 'Sandals', 'Slippers', 'Insoles', 'Socks']
      },
      {
        subcategory: 'Jackets',
        items: [
          'Casual Jackets',
          'Down & Insulated',
          'Fleece & Soft-Shell',
          'Rain Jackets',
          'Running Jackets',
          'Wind Shells',
          'Ski & Snowboard'
        ]
      },
      { subcategory: 'Tops', items: ['Shirts', 'Sweaters & Hoodies', 'Vests'] },
      { subcategory: 'Bottoms', items: ['Pants', 'Shorts'] },
      {
        subcategory: 'Skirts & Dresses',
        items: ['Dresses', 'Skirts', 'Skorts']
      },
      {
        subcategory: 'Underwear',
        items: [
          'Briefs',
          'Sports Bras',
          'Base Layer Tops',
          'Base Layer Bottoms'
        ]
      },
      {
        subcategory: 'Swimwear',
        items: [
          'Swimsuits',
          'Rashguards',
          'Water Shorts',
          'Cover Ups',
          'Goggles'
        ]
      },
      {
        subcategory: 'Accessories',
        items: [
          'Hats',
          'Gloves & Mittens',
          'Belts',
          'Gaiters',
          'Scarves & Headbands'
        ]
      },
      { subcategory: 'More', items: ['Sunglasses', 'Watches', 'Bags'] },
      {
        subcategory: 'Plus, Petite and Tall',
        items: ['Plus', 'Petite', 'Tall']
      },
      {
        subcategory: 'By Activity',
        items: [
          'Hiking Clothing',
          'Cycling Clothing',
          'Running Clothing',
          'Ski Clothing',
          'Snowboard Clothing',
          'Travel Clothing',
          'Yoga Clothing'
        ]
      },
      {
        subcategory: 'Women’s Deals',
        items: [
          'Jackets Deals',
          'Shirts Deals',
          'Pants Deals',
          'Footwear Deals',
          'REI Outlet Women’s Clothing',
          'REI Outlet Women’s Footwear'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'REI Co-op',
          'Patagonia',
          'Sorel',
          'Blundstone',
          'Vuori',
          'The North Face'
        ]
      }
    ],
    other: [
      "Women's Spring New Arrivals",
      'REI Co-op Everyday Clothing & Gear',
      'Sale & Clearance: Up to 50% Off',
      "Women's Waterproof Jackets, Boots & Gear"
    ],
    actions: [
      {
        icon: 'actionTicket',
        top: "Women's Adventures",
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionWomen',
        top: 'Force of Nature',
        bottom: 'Women in the outdoors'
      },
      {
        icon: 'actionCalendar',
        top: 'Personal Outfitting',
        bottom: 'Schedule a visit'
      }
    ]
  },
  {
    title: 'Kids',
    category: [
      {
        subcategory: 'Footwear',
        items: ['Boots', 'Shoes', 'Sandals', 'Socks']
      },
      {
        subcategory: 'Jackets',
        items: [
          'Insulated Jackets',
          'Fleece & Soft-Shell',
          'Rain Jackets',
          'Snow Jackets',
          'Casual Jackets',
          'Vests'
        ]
      },
      {
        subcategory: 'Clothing',
        items: [
          'Shirts',
          'Sweaters & Hoodies',
          'Pants',
          'Shorts',
          'Skirts & Dresses',
          'Swimwear'
        ]
      },
      {
        subcategory: 'Accessories',
        items: [
          'Hats',
          'Gloves & Mittens',
          'Socks',
          'Sunglasses',
          'Base Layers'
        ]
      },
      {
        subcategory: 'Kids Camping',
        items: ['Baby Carrier Packs', 'Backpacks', 'Sleeping Bags']
      },
      {
        subcategory: 'Kids Cycling',
        items: ['Bikes', 'Helmets', 'Trailers', 'Accessories']
      },
      {
        subcategory: 'Snow',
        items: [
          'Downhill Skiing',
          'Cross-Country Skiing',
          'Snowboarding',
          'Snowshoes'
        ]
      },
      {
        subcategory: 'Strollers',
        items: [
          'Strollers',
          'Accessories',
          'Conversion Kits',
          'Weather Shields'
        ]
      },
      {
        subcategory: 'More',
        items: ['Kids’ Climbing', 'Kids’ Paddling', 'Toys & Games']
      },
      {
        subcategory: 'By Gender',
        items: ['Boys', 'Girls', 'Infant & Toddler']
      },
      {
        subcategory: 'Kids’ Deals',
        items: [
          'Boys’ Deals',
          'Girls’ Deals',
          'Infant & Toddler Deals',
          'REI Outlet Kids Clothing',
          'REI Outlet Kids Footwear'
        ]
      },
      {
        subcategory: 'Brands',
        items: [
          'REI Co-op',
          'Co-op Cycles',
          'Columbia',
          'Bogs',
          'KEEN',
          'Patagonia'
        ]
      }
    ],
    other: [
      "Kid's Rain Jackets, Boots & Gear",
      "Kid's New Arrivals",
      'Sale & Clearance: Up to 50% Off',
      "Shop Kid's Clothing & Gear"
    ],
    actions: [
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      }
    ]
  },
  {
    title: 'Deals',
    category: [
      {
        subcategory: "Men's Deals",
        items: ['Jackets', 'Pants', 'Shirts', 'Underwear', "All Men's Deals"]
      },
      {
        subcategory: "Women's Deals",
        items: ['Jackets', 'Pants', 'Shirts', 'Underwear', "All Women's Deals"]
      },
      {
        subcategory: 'Footwear Deals',
        items: [
          "Men's Footwear",
          "Women's Footwear",
          'Kids',
          'Socks',
          'All Footwear Deals'
        ]
      },
      {
        subcategory: 'Camp & Hike Deals',
        items: [
          'Tents',
          'Sleeping Bags',
          'Backpacks',
          'Camp Kitchen',
          'All Camp & Hike Deals'
        ]
      },
      {
        subcategory: 'Cycling Deals',
        items: [
          'Bikes',
          'Bike Helmets',
          'Cycling Clothing',
          'Bike Accessories',
          'All Cycling Deals'
        ]
      },
      {
        subcategory: 'Snow Deals',
        items: [
          'Downhill Skiing',
          'Cross-Country Skiing',
          'Snowboarding',
          'Snowshoeing',
          'All Snow Deals'
        ]
      },
      {
        subcategory: 'More Deals',
        items: [
          'Climbing',
          'Kids',
          'Paddling',
          'Travel & Luggage',
          'Shop All Deals'
        ]
      },
      {
        subcategory: 'REI Outlet',
        items: [
          'Deal of the Day',
          '50% Off',
          'Deals under $20',
          'Just Reduced',
          'Shop all REI Outlet'
        ]
      }
    ],
    other: [
      'Shop Your Co-op Sale',
      '50% Off Deals',
      'Featured Deals',
      'Shop All Deals'
    ],
    actions: []
  },
  {
    title: 'More',
    category: [
      { subcategory: 'Personal Outfitting' },
      { subcategory: 'Rental Gear' },
      { subcategory: 'Gift Cards' },
      { subcategory: 'Footwear' },
      { subcategory: 'Electronics' },
      { subcategory: 'Car Racks' },
      { subcategory: 'Packs & Bags' },
      { subcategory: 'Sunglasses' },
      { subcategory: 'Books & Maps' },
      { subcategory: 'Dog Gear' },
      { subcategory: 'Outdoor Gifts' },
      { subcategory: 'Used Gear' },
      { subcategory: 'New Arrivals' },
      { subcategory: 'Gift Registry' },
      { subcategory: 'All Brands' },
      { subcategory: 'All Categories ' }
    ],
    actions: [
      {
        icon: 'actionMember',
        top: 'Membership',
        bottom: 'Great deals & benefits'
      },
      {
        icon: 'actionStopwatch',
        top: 'Classes & Events',
        bottom: 'Expert-led instruction'
      },
      {
        icon: 'actionTicket',
        top: 'REI Adventures Trips',
        bottom: 'Award-winning trips'
      },
      {
        icon: 'actionForm',
        top: 'Expert Advice',
        bottom: 'Checklists & how-tos'
      },
      { icon: 'actionTree', top: 'Opt Outside', bottom: 'Go out with us' },
      {
        icon: 'actionWomen',
        top: 'Force of Nature',
        bottom: 'Women in the outdoors'
      },
      {
        icon: 'actionMessage',
        top: 'Co-op Journal',
        bottom: 'Stories of a life outdoors'
      },
      {
        icon: 'actionLeaf',
        top: 'Stewardship',
        bottom: 'Taking care of places we love'
      }
    ]
  }
];

Categories.insertMany(categoriesList)
  .then(() => console.log('Categories seeded!'))
  .catch((err) => console.error(err));

const usersList = [
  {
    name: 'Eric Lau',
    username: 'ericlau',
    password: 'hunter1'
  },
  {
    name: 'Duder McGuy',
    username: 'personman',
    password: 'hunter1'
  },
  {
    name: 'Ms. Lady Woman',
    username: 'email@email.com',
    password: 'hunter1'
  }
];

Users.insertMany(usersList)
  .then(() => console.log('Users seeded!'))
  .catch((err) => console.error(err));

for (var i = 1; i <= 100; i++) {
  itemList.push({
    productID: i,
    productName: faker.fake('{{commerce.productName}}'),
    productImage: 'https://placeimg.com/190/190/tech'
  });
}

Items.insertMany(itemList)
  .then(() => console.log('Items seeded!'))
  .catch((err) => console.error(err));

Searches.create({ search: 'test' })
  .then(() => Searches.remove({}))
  .catch((err) => console.error(err));
