import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'what grade did I first join the school in?',
        answer: '6th grade',
    },
    {
        points: 200,
        question:
            'What instrument did I first play?',
        imgSrc: "https://i.ytimg.com/vi/Fnsl7aAIx8k/maxresdefault.jpg",
        answer: 'Trumpet',
    },
    {
        points: 300,
        question:
            'where did I go to school before horace mann?',
        answer: 'Caedmon',
    },
    {
        points: 400,
        question: 'Where did I used to live(Answer should be the city not the state)?',
        imgSrc: "https://as1.ftcdn.net/jpg/01/27/10/28/1000_F_127102830_yIJaRdtpHOjbGyBGpoXGjfLHpHtOuqSj.jpg",
        answer: 'New Brunswick',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'Where do I live?',
            imgSrc: 'https://as1.ftcdn.net/jpg/01/27/10/28/1000_F_127102830_yIJaRdtpHOjbGyBGpoXGjfLHpHtOuqSj.jpg',
            answer: 'New Jersey',
        },
        {
            points: 100,
            question:
                'Am I a MD mentor?',
           //imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'yes',
        },
        {
            points: 300,
            question: 'how many dogs do I have?',
            imgSrc: '/fawn-mastiff-dog.png',
            answer: '2',
        },
        {
            points: 400,
            question:
                'what type of instruments do I absolutely possitively loathe?(hint: it/s in the photo)',
            imgSrc:
                "https://i.ytimg.com/vi/Fnsl7aAIx8k/maxresdefault.jpg",
            answer: 'brass instruments',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What do I want to major in?',
        //imgSrc:
          //  "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Computer Science',
    },
    {
points: 200,
        question: ' What is one skill I want to learn?',
        answer:' Learning how to play the saxaphone',

    },

    {  points:300,
        question: 'What is one place I want to visit?', 
        imgSrc:'https://m.media-amazon.com/images/I/61RLIxUli1L.jpg',
        answer: 'the middle east',



    },
    {
        points: 400,
        question: 'What and how many pets(focus on the plural) would I like to have in the future?',
        answer: '2 dogs and 1 cat',
    }
]);


const categories = [
    {
        title: 'Khairi\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Khairi\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Khairi\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}