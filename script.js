fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData=>{
        const value = jokeData.attachments[0].text;
        
        document.getElementById("news").innerHTML = value;
        console.log(value);
    })
