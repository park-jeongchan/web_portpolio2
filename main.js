const express=require('express');
const { dirname } = require('path');
const app=express();
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs');
app.use('/css',express.static(__dirname+"/css/"));
app.use('/js',express.static(__dirname+"/js/"));
app.use('/img',express.static(__dirname+"/img/"));

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://0000:0000@cluster0.fzaqzff.mongodb.net/?retryWrites=true&w=majority',function(에러,client){
    app.listen(3000,function() {
        if(에러){
            return console.log(에러);
        }

        
        db=client.db('todo');
       
        console.log('listenling in 8080');
    });
    
});

app.get('/',function(요청,응답){
  응답.sendFile(__dirname+'/index.html');
});
app.get('/index.html',function(요청,응답){
  응답.sendFile(__dirname+'/index.html');
});

app.get('/learn.html',function(요청,응답){
  응답.sendFile(__dirname+'/learn.html');
});
app.get('/project.html',function(요청,응답){
  응답.sendFile(__dirname+'/project.html');
});

app.post('/add', function(요청, 응답){
  console.log(요청.body);


  db.collection('post').insertOne({제목:요청.body.title,email:요청.body.mail,방명록:요청.body.review} ,function(에러,결과){
      console.log('저장완료');
  
  });
  응답.send("<script>alert('작성 완료 되었습니다.');location.href='review';</script>");
});

app.get('/review',function(요청,응답){

  db.collection('post').find().toArray(function(에러,결과){
    console.log(결과);
    응답.render('review.ejs',{posts: 결과 });
  });
});


// app.get('/asd',function(요청,응답){
//   db.collection('post').find().toArray(function(에러,결과){
//       console.log(결과);
//       응답.render('asd.ejs',{posts: 결과 });
//   });
// });


  


