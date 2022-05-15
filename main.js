function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bLY0NEjuT/modal.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        dog = document.getElementById('https://www.pikpng.com/pngl/m/253-2530250_dog-pup-cute-png-dog-clipart.png')
        cat = document.getElementById('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ__MPiXQF0HyqTxXr-xbiqmoTVzwpwNfpQ&usqp=CAU')
        lion = document.getElementById('https://www.transparentpng.com/thumb/lion/dCMllV-lion-head-face-free-transparent-png.png')
        cow = document.getElementById('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FyFpebT-fzPXSwwzQKbBZE1Tb9D0j_a5-Q&usqp=CAU')

        if (results[0].label == "meow") {
            dog.src = '';
            cat.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ__MPiXQF0HyqTxXr-xbiqmoTVzwpwNfpQ&usqp=CAU';
            cow.src = '';
            lion.src = '';
        }

        else if (results[0].label == "moo") {
            dog.src = '';
            cat.src = '';
            cow.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FyFpebT-fzPXSwwzQKbBZE1Tb9D0j_a5-Q&usqp=CAU';
            lion.src = '';
        }

        else if (results[0].label == "bark") {
            dog.src = 'https://www.pikpng.com/pngl/m/253-2530250_dog-pup-cute-png-dog-clipart.png';
            cat.src = '';
            cow.src = '';
            lion.src = '';

        }

        else {
            dog.src = '';
            cat.src = '';
            cow.src = '';
            lion.src = 'https://www.transparentpng.com/thumb/lion/dCMllV-lion-head-face-free-transparent-png.png';
        }
    }
}