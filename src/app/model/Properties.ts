import {
  Model
} from "./Model";

export const QuizData: Model[] = [
    { categoryName: 'Planet Earth',
    icon: '../../assets/imgs/planet2.jpg',
    questions: [
        {
        question: "What is the earth's true shape?",
        options: [
            {option: "../../assets/imgs/FLAT.jfif", correct: false},
            {option: "../../assets/imgs/sphere.png", correct: false},
            {option: "../../assets/imgs/oblate-spheroid.jpg", correct: true},
            {option: "../../assets/imgs/round.jpg", correct: false}

        ]
    },
    {
        question: "Since the early centuary, which of these has moved northward more than 600 miles(1.100 km) ?",
        options: [
            {option: "../../assets/imgs/equator.jpg", correct: false},
            {option: "../../assets/imgs/magnetic-north-pole.jpg", correct: false},
            {option: "../../assets/imgs/new-york-city.jpg", correct: true},
            {option: "../../assets/imgs/cape-town.jpg", correct: false}

        ]
    },
    {
        question: "Which of these cities is sinking into the sea?",
        options: [
            {option: "../../assets/imgs/shangai.jpg", correct: false},
            {option: "../../assets/imgs/los-angeles.jpg", correct: false},
            {option: "../../assets/imgs/venice.jpg", correct: true},
            {option:  "../../assets/imgs/angola.jpg", correct: false}

        ]
    },
    {
        question: "Which of these planets has the most moons?",
        options: [
            {option: "../../assets/imgs/mars.jpg", correct: false},
            {option: "../../assets/imgs/mercury.jpg", correct: false},
            {option: "../../assets/imgs/venus2.png", correct: true},
            {option: "../../assets/imgs/saturn.jpg", correct: false}

        ]
    },
    {
        question: "Which of these planets is closest to the sun?",
        options: [
            {option: "../../assets/imgs/jupiter.jpg", correct: true},
            {option: "../../assets/imgs/neptune.jpg", correct: false},
            {option: "../../assets/imgs/uranus.jpg", correct: false},
            {option: "../../assets/imgs/saturn.jpg", correct: false}

        ]
    },

    
]
    
},

// category 2
{ categoryName: 'Animals',
icon: '../../assets/imgs/animal2.jpeg',
questions: [
    {
    question: "Which animal's baby is known as a cygnet?",
    options: [
        {option: ".../../assets/imgs/elephant.jpeg", correct: false},
        {option: "../../assets/imgs/swan.jpeg", correct: true},
        {option: "../../assets/imgs/rabbit.jpeg", correct: false},
        {option: "../../assets/imgs/cow.jpeg", correct: false}

    ]
},
{
    question: "Which of this animals moves most slowly?",
    options: [
        {option: "../../assets/imgs/turtle.jpeg", correct: false},
        {option: "../../assets/imgs/snail.jpeg", correct: true},
        {option: "../../assets/imgs/cameleon.jpg", correct: false},
        {option: "../../assets/imgs/sloth.jpg", correct: false}

    ]
},
{
    question: "Which animal's group is known as a pride?",
    options: [
        {option: "../../assets/imgs/lion.jpeg", correct: true},
        {option: "../../assets/imgs/goose.jpeg", correct: false},
        {option: "../../assets/imgs/kangaroo.jpg", correct: false},
        {option:  "../../assets/imgs/cheetah.jpeg", correct: false}

    ]
},
{
    question: "Which animal has teeth in it's stomach?",
    options: [
        {option: "../../assets/imgs/tarantula.jpeg", correct: false},
        {option: "../../assets/imgs/shark.webp", correct: false},
        {option: "../../assets/imgs/pig.jfif", correct: false},
        {option: "../../assets/imgs/lobster.jpeg", correct: true}

    ]
},
{
    question: "Which of these planets is closest to the sun?",
    options: [
        {option: "../../assets/imgs/orangutan.jpg", correct: false},
        {option: "../../assets/imgs/gorilla.jpeg", correct: true},
        {option: "../../assets/imgs/chimpanzee.jpeg", correct: false},
        {option: "../../assets/imgs/ape.jpg", correct: false}

    ]
},


]

},//end of category 2

//category 3
{ categoryName: 'Food',
icon: '../../assets/imgs/food.jpeg',
questions: [
    {
    question: "which food is good for brain health?",
    options: [
        {option: "../../assets/imgs/sugar.jpeg", correct: false},
        {option: "../../assets/imgs/tuna.jpeg", correct: true},
        {option: "../../assets/imgs/carrots.jpeg", correct: false},
        {option: "../../assets/imgs/garlic.jpeg", correct: false}

    ]
},
{
    question: "What is the main ingredient used in guacamole ?",
    options: [
        {option: "../../assets/imgs/broccoli.jpg", correct: false},
        {option: "../../assets/imgs/tomatoes.jpeg", correct: false},
        {option: "../../assets/imgs/lime.jpeg", correct: false},
        {option: "../../assets/imgs/avocado.jpeg", correct: true}

    ]
},
{
    question: "What is Tofu made of?",
    options: [
        {option: "../../assets/imgs/rice.jpeg", correct: false},
        {option: "../../assets/imgs/sugar-beans.jpeg", correct: true},
        {option: "../../assets/imgs/potaoes.jpeg", correct: false},
        {option:  "../../assets/imgs/wheat.jpeg", correct: false}

    ]
},
{
    question: "which food is believed good for heart?",
    options: [
        {option: "../../assets/imgs/burger.jpeg", correct: false},
        {option: "../../assets/imgs/milk.jpeg", correct: false},
        {option: "../../assets/imgs/nuts.jpeg", correct: true},
        {option: "../../assets/imgs/potaoes.jpeg", correct: false}

    ]
},
{
    question: "What is the main ingredient of Hummus?",
    options: [
        {option: "../../assets/imgs/corn.jpeg", correct: true},
        {option: "../../assets/imgs/potaoes.jpeg", correct: false},
        {option: "../../assets/imgs/pumpkin.jpeg", correct: false},
        {option: "../../assets/imgs/chickpeas.jfif", correct: true}

    ]
},


]

},

//category 4
{ categoryName: 'Sports',
icon: '../../assets/imgs/sports.jpeg',
questions: [
    {
    question: "in 1936, which atlhete became the first American in Olympic Track and Field history to win four gold medals in a single Olympic by winning four gold medal?",
    options: [
        {option: "../../assets/imgs/wilma-rudolph.png", correct: false},
        {option: "../../assets/imgs/JimThorpe_main1-272x300.jpg", correct: false},
        {option: "../../assets/imgs/Jackie-Joyner-Kersee.jpg", correct: false},
        {option: "../../assets/imgs/jesse.jpg", correct: true}

    ]
},
{
    question: " which country does rugby originates",
    options: [
        {option: "../../assets/imgs/south-africa.png", correct: false},
        {option: "../../assets/imgs/egypt.gif", correct: false},
        {option: "../../assets/imgs/england.png", correct: true},
        {option: "../../assets/imgs/usa.png", correct: false}

    ]
},
{
    question: "Which team won 18 matches in a row before losing in Dublin?",
    options: [
        {option: "../../assets/imgs/madrid.jpg", correct: false},
        {option: "../../assets/imgs/celtic.jpg", correct: false},
        {option: "../../assets/imgs/england.jpg", correct: true},
        {option:  "../../assets/imgs/allblacks.jpg", correct: false}

    ]
},
{
    question: "which athlete has the highest gold medals through out their career?",
    options: [
        {option: "../../assets/imgs/michael.jpg", correct: true},
        {option: "../../assets/imgs/sawao-kato.jpg", correct: false},
        {option: "../../assets/imgs/usain-bolt.jpg", correct: true},
        {option: "../../assets/imgs/Marit_Bjørgen.jpg", correct: false}

    ]
},
{
    question: "what is the most famous sport around the world with over 2.5 billion fans?",
    options: [
        {option: "../../assets/imgs/cricket.jfif", correct: false},
        {option: "../../assets/imgs/soccer.jfif", correct: true},
        {option: "../../assets/imgs/hockey.jpg", correct: false},
        {option: "../../assets/imgs/rugby.jfif", correct: false}

    ]
},


]

},

//category 5
{ categoryName: 'Kiddies',
icon: '../../assets/imgs/mini2.jpg',
questions: [
    {
    question: "Which catoons doesn't fall under disney studio?",
    options: [
        {option: "../../assets/imgs/mickey-mouse.jpg", correct: false},
        {option: "../../assets/imgs/sophia11.jpeg", correct: false},
        {option: "../../assets/imgs/repunzel.jpg", correct: false},
        {option: "../../assets/imgs/Ice-Age-The-Meltdown-284636-Detail.jpg", correct: true}

    ]
},
{
    question: " Which of the following is the most watched catoons?",
    options: [
        {option: "../../assets/imgs/tom.jfif", correct: false},
        {option: "../../assets/imgs/dragon.jpeg", correct: true},
        {option: "../../assets/imgs/south-park-posters.jpg", correct: false},
        {option: "../../assets/imgs/familyguy.png", correct: false}

    ]
},
{
    question: "Who of the following have a father called Homer?",
    options: [
        {option: "../../assets/imgs/barbie.jpg", correct: false},
        {option: "../../assets/imgs/Ben10.Omnitrix_512x512.png", correct: false},
        {option: "../../assets/imgs/sophia11.jpeg", correct: false},
        {option:  "../../assets/imgs/lisa.png", correct: true}

    ]
},
{
    question: "Which of these planets has the most moons?",
    options: [
        {option: "../../assets/imgs/spongebob-suqarepantsjpg.jpg", correct: false},
        {option: "../../assets/imgs/kylei.png", correct: true},
        {option: "../../assets/imgs/plankton.jpg", correct: false},
        {option: "../../assets/imgs/Patrick.png", correct: false}

    ]
},
{
    question: "Who of the following is Phenius sister from phineus and ferb?",
    options: [
        {option: "../../assets/imgs/candace-flynn.jpg", correct: true},
        {option: "../../assets/imgs/doc.jpg", correct: false},
        {option: "../../assets/imgs/princess.jpg", correct: false},
        {option: "../../assets/imgs/cute.webp", correct: false}

    ]
},


]

},

//category 6
{ categoryName: 'Box Office',
icon: '../../assets/imgs/movies.jpg',
questions: [
    {
    question: "which of the following movie is based on novel written by Nicholas Sparks?",
    options: [
        {option: "../../assets/imgs/dearjohn.jpg", correct: true},
        {option: "../../assets/imgs/ps.png", correct: false},
        {option: "../../assets/imgs/love-and-basketball1.jpg", correct: false},
        {option: "../../assets/imgs/pursuit-of-happyness-1-638.jpg", correct: false}

    ]
},
{
    question: "Which of the folowing actors is also a DJ ?",
    options: [
        {option: "../../assets/imgs/vind.jpg", correct: false},
        {option: "../../assets/imgs/rock.jpg", correct: false},
        {option: "../../assets/imgs/vuyo.jpg", correct: false},
        {option: "../../assets/imgs/Idris-2.jpg", correct: true}

    ]
},
{
    question: "Who of the following is not part of the Avengers?",
    options: [
        {option: "../../assets/imgs/thor.jpg", correct: false},
        {option: "../../assets/imgs/Wonder-Woman-2-Release-Date-Change-Patty-Jenkins.jpg", correct: true},
        {option: "../../assets/imgs/black-widow-2.jpg", correct: false},
        {option:  "../../assets/imgs/IronMan-EndgameProfile.jpg", correct: false}

    ]
},
{
    question: "Who is the highest paid actor in the world?",
    options: [
        {option: "../../assets/imgs/W-Smith.jpg", correct: false},
        {option: "../../assets/imgs/tom-cruise.jpg", correct: false},
        {option: "../../assets/imgs/george-clooney.jpg", correct: true},
        {option: "../../assets/imgs/samuel.jpg", correct: false}

    ]
},
{
    question: "Who of the following is Julia Roberts?",
    options: [
        {option: "../../assets/imgs/angelina.jpg", correct: false},
        {option: "../../assets/imgs/TarajiPHensonBeauty89thAnnualAcademyAwardsGettyP2017.jpg", correct: false},
        {option: "../../assets/imgs/scalet.jpg", correct: false},
        {option: "../../assets/imgs/Julia_Roberts.jpg", correct: true}

    ]
},


]

}
]