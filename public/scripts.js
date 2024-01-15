const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 10,
            questions: [
                {
                    question: "Rolex is a company that specializes in what type of product?",
                    answers: {a: ' Au', b: 'Gd', c: 'Ag', d: 'Ga'},
                    correctAnswer: 'a'
                },
                {
                    question: " What is the capital of Japan?",
                    answers: {a: 'Beijing', b: 'Seoul', c: 'Tokyo', d: 'Kyoto'},              
                    correctAnswer: 'c'
                },
                {
                    question: "What is the value of Pi to two decimal places?",
                    answers: {a: '3.12', b: '3.14', c: '3.16', d: '3.18'},                
                    correctAnswer: 'b'
                },
                {
                    question: "Who was the first President of the United States?",
                    answers: {a: 'Abraham Lincoln', b: 'Thomas Jefferson', c: 'George Washington', d: 'John Adams'},
                    correctAnswer: 'c'
                },
                {
                    question: "Who painted the Mona Lisa?",
                    answers: {a: 'Vincent Van Gogh', b: 'Leonardo da Vinci', c: 'Pablo Picasso', d: 'Claude Monet'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which country hosted the 2016 Summer Olympics?",
                    answers: {a: 'China', b: 'Brazil', c: 'Russia', d: 'Greece'},   
                    correctAnswer: 'b'
                },
                {
                    question: "General Knowledge: What is the largest planet in our Solar System?",
                    answers: {a: 'Earth', b: 'Saturn', c: 'Jupiter', d: 'Mars'}, 
                    correctAnswer: 'c'
                },
                {
                    question: "Who is known as the King of Pop?",
                    answers: {a: 'Elvis Presley', b: 'Freddie Mercury', c: 'Justin Timberlake', d: 'Michael Jackson'},
                    correctAnswer: 'd'
                },
                {
                    question: "When did Facebook launch?",
                    answers: {a: '2005', b: '2008', c: '2003', d: '2004'},
                    correctAnswer: 'd'
                },
                {
                    question: "Albert Einstein had trouble with mathematics when he was in school",
                    answers: {a: 'True', b: 'False'},
                    correctAnswer: 'b'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')