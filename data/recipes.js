const recipe = [
  {
    rating: {
      rating_count: 32,
      average_rating: 4.5,
    },
    category_id: 'n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9',
    description:
      'Eating vegan doesn\u2019t mean compromising on flavor. In this blog, we explore a range of delicious vegan recipes that are not only healthy but also packed with bold flavors. From hearty lentil soups to creamy dairy-free pastas and decadent chocolate desserts, there\u2019s something for every meal and occasion. Whether you\u2019re new to plant-based eating or a seasoned pro, these recipes will inspire you to get creative in the kitchen.',
    title: 'Top Vegan Recipes for Healthy Living',
    sharif: 'Seafood',
    published_date: '2024-09-01',
    cooking_time: '35 minutes',
    author: 'Mia Cooper',
    thumbnail:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    rating: {
      rating_count: 27,
      average_rating: 4.3,
    },
    category_id: 'q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2',
    description:
      "Desserts are the best way to end any meal on a sweet note. From classic cakes and cookies to more exotic sweets like baklava and mochi, this blog features a wide variety of dessert recipes from around the world. Learn how to create stunning desserts that not only taste amazing but look beautiful as well. Whether you're a chocolate lover or prefer fruity flavors, there's a dessert here for every taste and skill level.",
    title: 'Dessert Heaven: Sweet Recipes from Around the World',
    sharif: 'Seafood',
    published_date: '2024-07-24',
    cooking_time: '50 minutes',
    author: 'Emma Moore',
    thumbnail:
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 19,
      average_rating: 4.0,
    },
    category_id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
    description:
      'Smoothies are not only a great way to get your daily dose of fruits and veggies, but they can also be incredibly refreshing and delicious. In this blog, we explore 10 easy and nutritious smoothie recipes, perfect for breakfast or a post-workout snack. From tropical mango-pineapple smoothies to green detox blends and protein-packed berry shakes, there\u2019s something for everyone. Learn the secrets to making the perfect smoothie every time!',
    title: 'Refreshing and Nutritious Smoothie Recipes',
    sharif: 'Seafood',
    published_date: '2024-06-22',
    cooking_time: '10 minutes',
    author: 'Lucas Baker',
    thumbnail:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 28,
      average_rating: 4.4,
    },
    category_id: 'w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8',
    sharif: 'Chicken',
    description:
      'Breakfast is the most important meal of the day, and this blog is packed with recipes that will help you start your day right. From healthy smoothie bowls to classic pancakes, waffles, and omelets, there\u2019s something here for everyone. Whether you\u2019re in a rush and need a quick grab-and-go option or you\u2019re planning a leisurely weekend brunch, these recipes will inspire you to make breakfast more enjoyable and nutritious.',
    title: 'Healthy and Delicious Breakfast Ideas',
    sharif: 'Seafood',
    published_date: '2024-08-05',
    cooking_time: '20 minutes',
    author: 'Grace Adams',
    thumbnail:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 21,
      average_rating: 3.9,
    },
    category_id: 'z6a7b8c9-d0e1-f2g3-h4i5-j6k7l8m9n0o1',
    sharif: 'Pasta',
    description:
      'Salads don\u2019t have to be boring. In this blog, we\u2019ll show you how to create salads that are vibrant, filling, and full of flavor. From Mediterranean chickpea salads to Asian-inspired noodle salads and everything in between, these recipes are perfect for lunch, dinner, or even as a side dish. Learn how to make your own dressings and discover unique combinations that will make your salads the star of the meal.',
    title: 'Salad Recipes That Are Anything But Boring',
    sharif: 'Seafood',
    publeished_date: '2024-07-13',
    cooking_time: '15 minutes',
    author: 'Chloe Bennett',
    thumbnail:
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 35,
      average_rating: 4.7,
    },
    category_id: 'c9d0e1f2-g3h4-i5j6-k7l8-m9n0o1p2q3r4',
    description:
      "Sandwiches are the perfect meal for any time of day, whether you're looking for a quick lunch, an easy dinner, or a hearty snack. This blog features a variety of sandwich recipes, from classic grilled cheese and BLTs to more gourmet creations like paninis and club sandwiches. Learn how to build the perfect sandwich with fresh ingredients, the right bread, and creative spreads. These sandwiches are not only delicious but easy to make!",
    title: '10 Easy and Delicious Sandwich Recipes',
    sharif: 'Seafood',
    published_date: '2024-05-18',
    cooking_time: '15 minutes',
    author: 'Ethan Clark',
    thumbnail:
      'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 30,
      average_rating: 4.6,
    },
    category_id: 'f2g3h4i5-j6k7-l8m9-n0o1-p2q3r4s5t6u7',
    sharif: 'Pizza',
    description:
      "Waffles are a breakfast favorite that can be sweet, savory, or both! This blog explores the best waffle recipes for every taste, from classic Belgian waffles with maple syrup to savory options like cheddar and herb waffles. Whether you're making them for brunch or dessert, these recipes are sure to please. Learn how to perfect your waffle batter and master the art of creating the perfect crispy-on-the-outside, fluffy-on-the-inside waffle.",
    title: 'Waffle Recipes for Every Occasion',
    sharif: 'Seafood',
    published_date: '2024-04-28',
    cooking_time: '25 minutes',
    author: 'David Hernandez',
    thumbnail:
      'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=',
  },
  {
    rating: {
      rating_count: 18,
      average_rating: 4.0,
    },
    category_id: 'i5j6k7l8-m9n0-o1p2-q3r4-s5t6u7v8w9x0',
    sharif: 'Cake',
    description:
      "Ramen has become a global favorite, and it's not hard to see why. This blog features a collection of ramen recipes, from traditional Japanese styles to more modern fusion versions. Whether you're making a simple miso ramen or a rich tonkotsu broth, these recipes are sure to satisfy your cravings. Learn the techniques for making homemade ramen noodles, broth, and all the toppings to create a bowl that's as good as any ramen shop.",
    title: 'Ramen Recipes: From Traditional to Modern Fusion',
    sharif: 'Seafood',
    published_date: '2024-09-10',
    cooking_time: '45 minutes',
    author: 'Zoe Foster',
    thumbnail:
      'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=',
  },
  {
    rating: {
      rating_count: 14,
      average_rating: 3.5,
    },
    category_id: 'l8m9n0o1-p2q3-r4s5-t6u7-v8w9x0y1z2a3',
    sharif: 'Pastries',
    description:
      "Dips are the ultimate party food, and they're also great for snacking or adding a little extra flavor to your meals. In this blog, we cover a range of delicious and easy-to-make dips, from classic guacamole and hummus to more unique options like buffalo chicken dip and roasted red pepper spread. Perfect for pairing with chips, veggies, or bread, these dips are a must for your next gathering or movie night.",
    title: 'Best Dips for Any Occasion',
    sharif: 'Seafood',
    published_date: '2024-06-02',
    cooking_time: '15 minutes',
    author: 'Ella Martin',
    thumbnail:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 26,
      average_rating: 4.2,
    },
    category_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    sharif: 'Pastries',
    description:
      "Seafood lovers, this one's for you! From shrimp tacos to crab cakes and beyond, this blog features some of the best seafood recipes that are both easy to make and full of flavor. Learn the best ways to cook fish, shellfish, and other seafood at home, whether you're grilling, baking, or frying. These recipes are perfect for seafood newbies or seasoned pros looking to expand their culinary horizons.",
    title: 'Easy and Flavorful Seafood Recipes',
    sharif: 'Seafood',
    published_date: '2024-05-14',
    cooking_time: '30 minutes',
    author: 'Ryan Brooks',
    thumbnail:
      'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 25,
      average_rating: 4.2,
    },
    category_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    sharif: 'Burger',
    description:
      "Seafood is one of the most versatile ingredients used across many cuisines. Whether it's a simple shrimp cocktail, a hearty clam chowder, or a flavorful grilled fish, the options are endless. Seafood is not only delicious but also packed with nutrients like omega-3 fatty acids and protein. In this blog, we explore 5 easy seafood recipes you can prepare in under 30 minutes. From shrimp scampi to grilled salmon, these recipes are perfect for both beginners and experienced cooks. If you're a seafood lover, you won't want to miss this!",
    title: '5 Quick and Delicious Seafood Recipes',
    sharif: 'Seafood',
    published_date: '2024-02-16',
    cooking_time: '25 minutes',
    author: 'Sophia Williams',
    thumbnail:
      'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 18,
      average_rating: 3.8,
    },
    category_id: '7f8d5a1c-9b3e-4a6f-8f1d-5c9a9e2b3d4e',
    sharif: 'Vegan',
    description:
      "There's nothing quite like a bowl of warm, comforting soup. Whether you're battling a cold or just in need of a cozy meal, soup always does the trick. This blog features a collection of hearty and healthy soups that are easy to make and full of flavor. From classic chicken noodle soup to creamy tomato bisque, you'll find something to satisfy your cravings. These recipes are perfect for meal prep, and most can be made in under 30 minutes. So grab a spoon and dive into these comforting bowls of goodness!",
    title: '10 Hearty and Healthy Soups for Any Season',
    sharif: 'Seafood',
    published_date: '2024-04-02',
    cooking_time: '30 minutes',
    author: 'John Carter',
    thumbnail:
      'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    rating: {
      rating_count: 20,
      average_rating: 4.5,
    },
    category_id: '3a1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p',
    sharif: 'Desserts',
    description:
      'Fluffy, light, and delicious, pancakes are a breakfast staple that everyone loves. This blog dives into the world of pancakes, from the classic buttermilk version to more adventurous varieties like banana walnut or blueberry ricotta pancakes. Whether you prefer your pancakes with syrup, fruit, or a dusting of powdered sugar, this guide will teach you how to make the perfect stack every time. These recipes are great for weekend brunches, quick breakfasts, or even dessert!',
    title: 'Mastering the Art of Perfect Pancakes',
    sharif: 'Seafood',
    published_date: '2024-03-10',
    cooking_time: '20 minutes',
    author: 'Emily Stone',
    thumbnail:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 15,
      average_rating: 4.0,
    },
    category_id: '2c3d4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r',
    sharif: 'Smoothies',
    description:
      "Meat lovers, rejoice! This blog is dedicated to the art of cooking meat to perfection. Whether you're grilling, roasting, or slow-cooking, we've got you covered with expert tips and delicious recipes. From juicy steaks to tender pork chops and flavorful lamb dishes, you'll find a recipe for every occasion. Learn the secrets to achieving the perfect sear, mastering marinades, and selecting the best cuts of meat for your meals.",
    title: 'The Ultimate Guide to Cooking Meat',
    sharif: 'Seafood',
    published_date: '2024-05-08',
    cooking_time: '45 minutes',
    author: 'James Martinez',
    thumbnail:
      'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 30,
      average_rating: 4.8,
    },
    category_id: '5f6g7h8i-9j0k-1l2m-3n4o-5p6q7r8s9t0u',
    sharif: 'Breakfast',
    description:
      "Chicken is one of the most versatile and popular proteins in the world. Whether you're roasting a whole bird, frying up some wings, or grilling a marinated breast, there's a chicken recipe for every taste and occasion. In this blog, we explore some of the best chicken recipes that are easy to make and packed with flavor. From spicy buffalo wings to creamy chicken alfredo, you'll never run out of delicious chicken ideas.",
    title: '10 Must-Try Chicken Recipes',
    sharif: 'Seafood',
    published_date: '2024-06-15',
    cooking_time: '35 minutes',
    author: 'Lily Thompson',
    thumbnail:
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 12,
      average_rating: 3.9,
    },
    category_id: '8i9j0k1l-2m3n-4o5p-6q7r-8s9t0u1v2w3x',
    description:
      "Pasta is the ultimate comfort food, and it's incredibly versatile. In this blog, we'll take you through some of the best pasta recipes, from simple spaghetti with marinara sauce to more complex dishes like homemade lasagna and creamy fettuccine alfredo. Learn how to make fresh pasta from scratch, and discover the best tips for cooking dried pasta to perfection. Whether you're feeding a crowd or just looking for a quick weeknight dinner, these pasta recipes are sure to impress.",
    title: 'The Best Pasta Dishes to Satisfy Your Cravings',
    sharif: 'Seafood',
    published_date: '2024-01-25',
    cooking_time: '40 minutes',
    author: 'Jacob Brooks',
    thumbnail:
      'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 22,
      average_rating: 4.7,
    },
    category_id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    description:
      "There's no denying that pizza is a universal favorite. Whether you're a fan of classic margherita, pepperoni, or more adventurous toppings like BBQ chicken or truffle mushrooms, there's a pizza for everyone. In this blog, we take a deep dive into making pizza at home, from crafting the perfect dough to selecting the best cheeses and toppings. Learn how to bake your pizza in a home oven, and discover the secrets to achieving that crispy, chewy crust.",
    title: 'How to Make Perfect Pizza at Home',
    sharif: 'Seafood',
    published_date: '2024-03-05',
    cooking_time: '50 minutes',
    author: 'Ella Johnson',
    thumbnail:
      'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 10,
      average_rating: 4.1,
    },
    category_id: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    description:
      "Cakes are a celebration in every bite. Whether you're baking for a birthday, holiday, or just because, there's a cake recipe for every occasion. This blog explores classic cake recipes like vanilla sponge and chocolate layer cake, as well as more unique options like lemon lavender or red velvet. Learn the basics of baking, from mixing the perfect batter to frosting techniques that will make your cakes look as good as they taste.",
    title: 'Delicious Cake Recipes for Every Celebration',
    sharif: 'Seafood',
    published_date: '2024-07-10',
    cooking_time: '60 minutes',
    author: 'Isabella Green',
    thumbnail:
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 16,
      average_rating: 3.6,
    },
    category_id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
    description:
      "Pastries are the epitome of indulgence, whether you're enjoying a buttery croissant for breakfast or a sweet danish for dessert. In this blog, we'll explore a variety of pastry recipes that you can easily make at home. From flaky puff pastries to rich cream-filled eclairs, you'll find something to satisfy your sweet tooth. Learn the techniques for perfecting dough, working with fillings, and creating stunning pastries that will impress your friends and family.",
    title: 'The Best Pastry Recipes You Can Make at Home',
    sharif: 'Seafood',
    published_date: '2024-08-20',
    cooking_time: '90 minutes',
    author: 'Oliver Davis',
    thumbnail:
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 24,
      average_rating: 4.4,
    },
    category_id: 'k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6',
    description:
      "Burgers are an American classic, but they're also a blank canvas for creativity. In this blog, we'll explore some of the most mouthwatering burger recipes, from classic cheeseburgers to gourmet versions with blue cheese, caramelized onions, and truffle aioli. Learn the secrets to grilling the perfect patty, choosing the right buns, and assembling your burger with the perfect balance of flavors and textures.",
    title: 'Ultimate Burger Recipes for Every Taste',
    sharif: 'Seafood',
    published_date: '2024-05-30',
    cooking_time: '25 minutes',
    author: 'Daniel Smith',
    thumbnail:
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    rating: {
      rating_count: 20,
      average_rating: 4.2,
    },
    category_id: '5f6g7h8i-9j0k-1l2m-3n4o-5p6q7r8s9t0u',
    description:
      "Indulge in the ultimate comfort food with our Crispy Fried Chicken recipe. This Southern classic features juicy, tender chicken pieces encased in a golden, crunchy coating that's bursting with flavor. The secret lies in our special blend of herbs and spices, combined with a double-dredging technique that ensures maximum crispiness.\n\nWe start by marinating the chicken in buttermilk, which not only tenderizes the meat but also adds a subtle tangy flavor. The coating is a perfect mix of all-purpose flour, cornstarch for extra crunch, and a carefully balanced blend of paprika, garlic powder, onion powder, cayenne pepper, and a touch of dried herbs.\n\nThe frying process is key - we use a deep, heavy-bottomed pan and maintain the oil at the perfect temperature to achieve that beautiful golden-brown color without overcooking the chicken. The result is a mouthwatering dish with a satisfying crunch that gives way to succulent, flavorful meat.\n\nServe this crispy fried chicken with classic sides like creamy mashed potatoes, coleslaw, or corn on the cob for a true Southern feast. It's perfect for family dinners, picnics, or anytime you're craving something deliciously comforting. This recipe is sure to become a favorite in your household, delivering restaurant-quality fried chicken right from your own kitchen.",
    title: 'Southern-Style Crispy Fried Chicken',
    sharif: 'Seafood',
    published_date: '2023-07-15',
    cooking_time: '1 hour 30 minutes',
    thumbnail:
      'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Emily Johnson',
  },
  {
    rating: {
      rating_count: 15,
      average_rating: 4.8,
    },
    category_id: 'q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2',
    description:
      "Treat yourself to a slice of heaven with our Decadent Chocolate Lava Cake. This irresistible dessert combines the rich, intense flavor of dark chocolate with a gorgeously gooey center that oozes out with each spoonful. It's the perfect balance of cake and molten chocolate, creating a truly indulgent experience.\n\nThe magic of this dessert lies in its simplicity and precise baking time. We use high-quality dark chocolate, melted and mixed with butter to create a smooth, velvety base. The addition of eggs brings richness, while a touch of espresso powder enhances the chocolate flavor without adding any coffee taste.\n\nThe batter is carefully portioned into ramekins and baked just until the edges are set but the center remains delightfully molten. This creates the signature 'lava' effect when you cut into the cake, revealing a warm, flowing chocolate center that's simply irresistible.\n\nTo elevate the presentation and flavor, we dust the cakes with a light sprinkle of powdered sugar and serve them with a scoop of vanilla ice cream or a dollop of lightly whipped cream. The contrast of temperatures and textures - warm, gooey cake and cool, creamy ice cream - creates a sensory experience that's hard to beat.\n\nThis Chocolate Lava Cake is perfect for special occasions, romantic dinners, or anytime you need a chocolate fix. Despite its impressive appearance, it's surprisingly easy to make, allowing you to create a restaurant-quality dessert in the comfort of your own home. Indulge in this heavenly treat and watch as it becomes your new favorite chocolate dessert!",
    title: 'Decadent Chocolate Lava Cake',
    sharif: 'Seafood',
    published_date: '2024-02-03',
    cooking_time: '25 minutes',
    thumbnail:
      'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Michael Chang',
  },
  {
    rating: {
      rating_count: 18,
      average_rating: 4.5,
    },
    category_id: 'z6a7b8c9-d0e1-f2g3-h4i5-j6k7l8m9n0o1',
    description:
      "Elevate your salad game with our vibrant and nutritious Mediterranean Quinoa Salad. This colorful dish is a perfect blend of flavors, textures, and wholesome ingredients that will transport your taste buds to the sunny shores of the Mediterranean.\n\nAt the heart of this salad is protein-rich quinoa, cooked to fluffy perfection and cooled to room temperature. We then add a rainbow of fresh vegetables: juicy cherry tomatoes, crisp cucumber, and colorful bell peppers, all chopped into bite-sized pieces for the perfect texture in every forkful.\n\nKalamata olives and crumbled feta cheese bring a delightful tang and saltiness, while chopped fresh parsley and mint add a burst of herbal freshness. A handful of toasted pine nuts introduces a lovely crunch and nutty flavor that complements the other ingredients beautifully.\n\nThe dressing is a simple yet flavorful combination of extra virgin olive oil, freshly squeezed lemon juice, minced garlic, and a blend of Mediterranean herbs. This light vinaigrette enhances the natural flavors of the vegetables and quinoa without overpowering them.\n\nWhat makes this salad truly special is its versatility. It's substantial enough to be a meal on its own, perfect for a light lunch or dinner. It also makes an excellent side dish for grilled meats or fish. The salad holds up well, making it ideal for meal prep, picnics, or potlucks.\n\nNot only is this Mediterranean Quinoa Salad delicious, but it's also packed with nutrients. Quinoa provides complete protein, the vegetables offer a variety of vitamins and antioxidants, and the olive oil delivers healthy fats. It's a feel-good dish that doesn't compromise on flavor.\n\nWhether you're looking for a healthy meal option, a crowd-pleasing potluck dish, or simply want to add more color and nutrition to your diet, this Mediterranean Quinoa Salad is sure to become a favorite in your recipe collection. Enjoy the taste of the Mediterranean in every bite!",
    title: 'Mediterranean Quinoa Salad',
    sharif: 'Seafood',
    published_date: '2023-11-20',
    cooking_time: '30 minutes',
    thumbnail:
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Sophia Martinez',
  },
  {
    rating: {
      rating_count: 22,
      average_rating: 4.7,
    },
    category_id: '8i9j0k1l-2m3n-4o5p-6q7r-8s9t0u1v2w3x',
    description:
      "Transport yourself to the heart of Italy with our Classic Spaghetti Carbonara. This iconic Roman dish is the epitome of simplicity and flavor, showcasing how a handful of high-quality ingredients can create a truly magnificent meal.\n\nThe star of this dish is, of course, the pasta. We use authentic Italian spaghetti, cooked al dente to provide the perfect texture and bite. The sauce, which comes together in minutes, is a velvety emulsion of eggs, finely grated Pecorino Romano cheese, and a generous amount of freshly ground black pepper.\n\nThe magic happens when the hot pasta is tossed with the egg mixture off the heat, creating a creamy sauce that clings to every strand of spaghetti. The residual heat from the pasta gently cooks the eggs, resulting in a smooth, silky texture without scrambling.\n\nCrispy bits of guanciale - cured pork cheek - are scattered throughout the dish, providing bursts of savory flavor and a delightful textural contrast. If guanciale is hard to find, pancetta makes an excellent substitute.\n\nThe key to perfecting this dish lies in the timing and temperature control. We'll guide you through the process to ensure your carbonara turns out perfectly creamy every time, without ending up with scrambled eggs or a watery sauce.\n\nA final shower of extra Pecorino Romano and freshly ground black pepper adds the finishing touch to this sublime pasta dish. The result is a harmonious blend of flavors - the richness of the eggs and cheese, the saltiness of the pork, and the sharp bite of black pepper.\n\nOur Classic Spaghetti Carbonara is a testament to the beauty of Italian cuisine - simple, unfussy, and utterly delicious. It's perfect for a quick weeknight dinner, yet impressive enough for a dinner party. Pair it with a crisp white wine and a simple green salad for a complete meal that will transport you straight to a Roman trattoria.\n\nMaster this recipe, and you'll have a go-to dish that's sure to impress family and friends alike. Buon appetito!",
    title: 'Classic Spaghetti Carbonara',
    sharif: 'Seafood',
    published_date: '2024-01-10',
    cooking_time: '20 minutes',
    thumbnail:
      'https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Alessandro Rossi',
  },
  {
    rating: {
      rating_count: 17,
      average_rating: 4.6,
    },
    category_id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
    description:
      "Start your day on a refreshing and nutritious note with our Green Goddess Smoothie Bowl. This vibrant and delicious creation is not just a treat for your taste buds, but also a feast for your eyes and a boost for your health.\n\nThe base of our smoothie bowl is a perfect blend of ripe bananas, creamy avocado, and nutrient-packed spinach. This combination creates a smooth, velvety texture while packing in vitamins, minerals, and healthy fats. A splash of coconut water adds natural sweetness and electrolytes, while a squeeze of lime juice brings a zesty brightness that balances the flavors perfectly.\n\nWhat sets this smoothie bowl apart is its thick, spoonable consistency. We've perfected the ratio of ingredients to create a base that's substantial enough to hold up a variety of toppings without being too thick or icy.\n\nSpeaking of toppings, this is where you can let your creativity shine! We recommend a beautiful array of sliced kiwi, coconut flakes, chia seeds, and a sprinkle of granola for crunch. These not only add visual appeal but also introduce different textures and flavors that complement the creamy base.\n\nFor an extra nutrition boost, we include a scoop of your favorite plant-based protein powder. This addition makes the smoothie bowl more satiating, perfect for keeping you fueled throughout a busy morning.\n\nThe beauty of this Green Goddess Smoothie Bowl lies in its versatility. Feel free to swap spinach for kale, experiment with different fruits, or add your favorite superfoods like spirulina or matcha powder.\n\nThis recipe is not just about creating a delicious breakfast; it's about starting your day with a nourishing ritual. The process of blending the smoothie and artfully arranging the toppings can be a mindful morning practice, setting a positive tone for the day ahead.\n\nWhether you're looking for a refreshing summer breakfast, a post-workout refuel, or simply a delightful way to pack more greens into your diet, this Green Goddess Smoothie Bowl is the answer. It's a bowl full of goodness that will make you feel like you're indulging in dessert for breakfast, all while nourishing your body with wholesome ingredients.",
    title: 'Green Goddess Smoothie Bowl',
    sharif: 'Seafood',
    published_date: '2023-09-05',
    cooking_time: '10 minutes',
    thumbnail:
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Olivia Green',
  },
  {
    rating: {
      rating_count: 14,
      average_rating: 4.1,
    },
    category_id: 'k1l2m3n4-o5p6-q7r8-s9t0-u1v2w4x4y5z6',
    description:
      "Burgers are an American classic, but they're also a blank canvas for creativity. In this blog, we'll explore some of the most mouthwatering burger recipes, from classic cheeseburgers to gourmet versions with blue cheese, caramelized onions, and truffle aioli. Learn the secrets to grilling the perfect patty, choosing the right buns, and assembling your burger with the perfect balance of flavors and textures.",
    title: 'Burger Recipes',
    sharif: 'Seafood',
    published_date: '2024-06-30',
    cooking_time: '23 minutes',
    author: 'Arita Smith',
    thumbnail:
      'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const getAllData = () => {
  return recipe;
};

const getOneDataById = (id) => {
  return recipe.find((reci) => reci.category_id === id);
};

export { getAllData, getOneDataById };
