const caption_dict = {'000000264535.jpg': 'An old man sitting on a bench in a public park.',
'000000305343.jpg': 'Two ceramic cups, one with a bird and the other with a fox.',
'000000382125.jpg': 'Two men are posing for a photo, one man is holding a slice of pizza on a plate, and they are surrounded by other people sitting at tables.',
'000000188592.jpg': 'A toddler is sitting on a blanket outdoors eating an apple.',
'000000547336.jpg': 'A young woman sitting on a curb next to a fire hydrant writing on a notepad.',
'000000393282.jpg': 'Two giraffes standing on a dirt expanse with trees in background.',
'000000549136.jpg': 'A teddy bear is sitting on the rail of a wire fence.',
'000000325347.jpg': 'A tennis player makes a quick shuffle to return the ball.',
'000000099039.jpg': 'Plates of food and two glasses of red wine are on a table.',
'000000127182.jpg': 'An empty clean kitchen with cabinetry, stove and dishwasher.',
'000000546475.jpg': 'A man holding a baby while standing in front of a mirror.',
'000000010363.jpg': 'A cat sitting on the hood of a parked black car in a garage.',
'000000549738.jpg': 'A huge dragon kite flown with a steeple in the background.',
'000000351589.jpg': 'The bench is in a shady area surrounded by plants.',
'000000375078.jpg': 'A dried black flower in a long, tall black and white vase.',
'000000288042.jpg': 'A man walking with an umbrella near a railing above a river.',
'000000212895.jpg': 'A giraffe standing in front of a grassy plain and blue sky.',
'000000422706.jpg': 'People watch from a large boat as a smaller boat is lowered into the ocean.',
'000000108495.jpg': 'A girl in an orange sweater is sitting on a skateboard.',
'000000477689.jpg': 'A woman in a white shirt standing in front of a fence smiling.',
'000000465180.jpg': 'A group of elephants being cleaned by their handlers in a river.',
'000000303566.jpg': 'An outdoor market has a wide variety of fruit to choose from.',
'000000309964.jpg': 'A woman and man sit under a large blue umbrella on a grassy lot.',
'000000122745.jpg': 'A vandalized stop sign in the dark with a sky background.',
'000000084031.jpg': 'A batter swinging a bat at a baseball with the catcher and umpire behind him.',
'000000132329.jpg': 'A refrigerator mostly empty with only a few bottles of water inside.',
'000000466416.jpg': 'A heavily lit-up building in front of a river.',
'000000127624.jpg': 'A city skyline is shown with a subway train coming around the bend.',
'000000579893.jpg': 'A stop sign located at the intersection of East Village and Woodfield Rd.',
'000000218249.jpg': 'A tray topped with a chicken sandwich next to a cup of fries.',
'000000556765.jpg': 'A baby elephant walking through a shallow pool of flowing water.',
'000000170670.jpg': 'Several containers of food and beverages on a wooden table outdoors.',
'000000022623.jpg': 'Some control buttons on an orange and silver electronic device.',
'000000523811.jpg': 'A bird sits atop a wooden post and watches its surroundings.',
'000000390826.jpg': 'A person holding an object in front of a panda bear.',
'000000224664.jpg': 'People are on the beach flying kites that look like arches in the sky.',
'000000386352.jpg': 'A tennis player swinging a racket at a public tennis match.',
'000000263644.jpg': 'The antique bed has elaborate wood decoration on the frame.',
'000000242060.jpg': 'A plate of cupcakes on a napkin with spoons and drink glasses.',
'000000280891.jpg': 'A woman standing next to a young man near a pile of fruit.',
'000000468925.jpg': 'French bread on a plate with eggs, bacon and banana slices atop the bread.',
'000000542776.jpg': 'A person holding a book with a bird sitting on the book.',
'000000299720.jpg': 'A giraffe is peeking around the side of a wall at the camera.',
'000000182805.jpg': 'A woman holding an umbrella sitting on a blanket next to two dogs.',
'000000453040.jpg': 'A white cake covered in flowers and white frosting.',
'000000017905.jpg': 'A man in shorts is taking a picture next to a red light.',
'000000555009.jpg': 'A desk with two computer monitors, a laptop computer, keyboard and set of headphones.',
'000000101787.jpg': 'An airplane flies high above in the sky with telephone lines in the picture as well.',
'000000542423.jpg': 'A person sitting on a park bench is looking at a large field.',
'000000561366.jpg': 'A calculator and cell phone lay on a desk in front of a keyboard.',
'000000553339.jpg': 'A sign that gives directions to drivers driving down the road.',
'000000231339.jpg': 'A child kneeling in front of an open refrigerator and looking in at an empty lower shelf.',
'000000345469.jpg': 'A spread of pastries and doughnuts available for purchase.',
'000000061471.jpg': 'A puppy has pulled toilet paper across the bathroom floor.',
'000000013177.jpg': 'A man sitting on the ground, fixing a motorcycle wheel.',
'000000000724.jpg': 'A stop sign installed upside down on a street corner.',
'000000367680.jpg': 'Several vehicles and a horse-drawn cart pull up outside of a building.',
'000000402720.jpg': 'Three men sitting at a table with some wine glasses.',
'000000273617.jpg': 'A city street at dusk with a street light that is on and a stop sign across the street.',
'000000224337.jpg': 'A close-up photo of a man as he holds a piece of bread in his mouth.',
'000000502599.jpg': 'Multiple aircraft suspended from the ceiling of a museum.',
'000000533536.jpg': 'A dark colored cat that is looking up at a television that is on and has a program playing on it.',
'000000477805.jpg': 'A man with glasses sitting in front of a laptop computer.',
'000000425361.jpg': 'A young man is having some wine and something to eat.',
'000000131444.jpg': 'A man wears a suit with a blue shirt and a multicolored tie.',
'000000459500.jpg': 'A clock between two bronze flamingo statues on a black box.',
'000000025986.jpg': 'Some food is on the counter including a glass of water, rice, vegetables, and more.',
'000000370677.jpg': 'Three people in work uniforms and visors standing together in front of various types of donuts.',
'000000063047.jpg': 'A man walking with a drink and a bag while listening to earbud headphones.',
'000000135410.jpg': 'A parking meter next to a ladder with bowling balls on each rung.',
'000000513283.jpg': 'A little funny rabbit figure is sitting in the middle of half eaten pizza.',
'000000376278.jpg': 'A lazy zebra lays in the straw near a rocky field.',
'000000157807.jpg': 'A cat standing on a toilet seat looking at the person taking the photo.',
'000000510095.jpg': 'A man in a field of wild flowers holding an orange bat.',
'000000525247.jpg': 'A dark colored cat looking at a laptop screen.',
'000000236845.jpg': 'A sign mounted to a pole that reads " No Stops ".',
'000000295420.jpg': 'A blue trash removal truck and two vehicles behind it.',
'000000410612.jpg': 'The red boat is anchored on the shore of the lake in front of the houses.',
'000000085478.jpg': 'A polar bear pokes his head and one paw out of the water.',
'000000026690.jpg': 'A large group of people watch as a skater does his tricks.',
'000000223738.jpg': 'A baseball player hitting the ball during a baseball game.',
'000000369503.jpg': 'A kitchen with a clear counter top and wooden cabinets, along with a white dish washer under the counter.',
'000000513567.jpg': 'Two young women are eating hot dogs while walking down the sidewalk.',
'000000089556.jpg': 'Two silver cars parked beside each other in parking spots.',
'000000426166.jpg': 'A light blue bicycle chained to a pole on the sidewalk in front of a red building.',
'000000349594.jpg': 'A young boy is standing against a wall eating an apple.',
'000000374982.jpg': 'A young girl looking at a huge pizza with surprise.',
'000000556873.jpg': 'A white frosted cake sitting in front of some white flowers.',
'000000192904.jpg': 'A tray full of breakfast foods and drinks on a bed.',
'000000273642.jpg': 'A dog laying on its side with a remote control under its paw.',
'000000173799.jpg': 'Two men holding big wooden sticks with a lot of elephants in the background.',
'000000501523.jpg': 'A black cat sitting inside of a sink in the bathroom.',
'000000127517.jpg': 'A row of surfboards sticking out of the sand sitting next to each other.',
'000000527029.jpg': 'A man covering his eyes while standing next to multiple boxes filled with bananas.',
'000000394328.jpg': 'There is an indoor toilet underneath a sign that says please flush.',
'000000002157.jpg': 'A table topped with a cake covered in berries next to a plate of sandwiches.',
'000000475904.jpg': 'A white swan swimming through a lake next to a boat.',
'000000080273.jpg': 'A person wearing a helmet and goggles riding a snowboard down the slopes.',
'000000446574.jpg': 'A bathroom with curtains that have floral decor on them.',
'000000237517.jpg': 'A patio table with two dinner plates of food and two bowls of salad.',
'000000351559.jpg': 'A green stop light with a tall building lighted up in the background at night.',
'000000331569.jpg': 'A fruit smoothie glass on a plate with two strawberries for garnish.',
'000000388056.jpg': 'A baseball player is waiting for the pitch while standing in the batters box.',
'000000066706.jpg': 'A cup of coffee with a plate of banana slices on bread.',
'000000439180.jpg': 'A large crowd of people riding horses walks along a trail.',
'000000188439.jpg': 'A colorful truck with a full load of sticks and twigs.',
'000000155341.jpg': 'A car sitting in the middle of the road near a construction vehicle.',
'000000278848.jpg': 'A black and white picture of people walking in the rain under umbrellas.'}

const keys = Object.keys(caption_dict);
const folderPath = 'img_final/';
const test_stimuli = [];
const image_list = [];

function printStimuli(index1, index2){
    const elements = keys.slice(index1, index2).map(key => ({ [key]: caption_dict[key] }));
    elements.forEach(item =>{
        const image = Object.keys(item)[0]; // Get the key
        const caption = item[image]; // Get the value
        test_stimuli.push({ image_stimuli: `${folderPath}${image}`, stimulus: caption});
        image_list.push(`${folderPath}${image}`);
    });
    console.log(image_list);
    console.log(test_stimuli);
};

printStimuli(96,108);