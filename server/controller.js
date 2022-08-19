module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['The program "fortune" is currently not installed. You can install it by typing: sudo apt-get install fortune-mod', 'Three can keep a secret, if you get rid of two.', 'Blessed are the children for they shall inherit the national debt.', 'No snowflake in an avalanche never feels responsible.', 'Enjoy yourself while you can.', 'You will be rewarded for being a good listener.', 'You will marry a professional athlete - if competitive eating can be considered a sport.', 'Run', 'You laugh now, wait till you get home.', 'As long as you do not sign up for anything new, you will do fine.']

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },
    getExtra: (req, res) =>{
        const getExtra = (`This is an extra button...FOR FUN.`)
        res.status(200).send(getExtra)
    },
    getIt: (req, res) =>{
        const getIt = (`I'm still struggling with posting, and connecting everything. I wish it made more sense. Sad Face.`)
        res.status(200).send(getIt)
    
}}