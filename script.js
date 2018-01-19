$(document).ready(function () {
    //let p = $('<p>The answer is');
    let body = $('body');

    slowMath.add(6, 2)
        .then((answer) => {
            let p = $(`<p>${answer}</p>`);
            p.appendTo(body);
            console.log(`${answer}`);
            return slowMath.multiply(answer, 2);
        }).then((answer2) => {
            let p2 = $(`<p>${answer2}</p>`);
            p2.appendTo(body);
            console.log(`${answer2}`);
            return slowMath.divide(answer2, 4);
        }).then((answer3) => {
            let p3 = $(`<p>${answer3}</p>`);
            p3.appendTo(body);
            console.log(`${answer3}`);
            return slowMath.subtract(answer3, 3);
        }).then((answer4) => {
            let p4 = $(`<p>${answer4}</p>`);
            p4.appendTo(body);
            console.log(`${answer4}`);
            return slowMath.add(answer4, 98);
        }).then((answer5) => {
            let p5 = $(`<p>${answer5}</p>`);
            p5.appendTo(body);
            console.log(`${answer5}`);
            return slowMath.remainder(answer5, 2);
        }).then((answer6) => {
            let p6 = $(`<p>${answer6}</p>`);
            p6.appendTo(body);
            console.log(`${answer6}`);
            return slowMath.multiply(answer6, 50);
        }).then((answer7) => {
            let p7 = $(`<p>${answer7}</p>`);
            p7.appendTo(body);
            console.log(`${answer7}`);
            return slowMath.remainder(answer7, 40);
        }).then((answer8) => {
            let p8 = $(`<p>${answer8}</p>`);
            p8.appendTo(body);
            console.log(`${answer8}`);
            return slowMath.add(answer8, 32);
        }).then((answer9) => {
            let p9 = $(`<p>${answer9}</p>`);
            p9.appendTo(body);
            console.log(`${answer9}`);
            return (answer9);
        }).then((answer9) => {
            let p9 = $(`<p>The final result is ${answer9}</p>`);
            p9.appendTo(body);
            console.log(`The final result is ${answer9}`)
        })
        , (err) => {
            console.log(err);

        }
})
