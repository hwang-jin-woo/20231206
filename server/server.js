const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

// 라우트 모듈들을 분리하여 가져옵니다.
const testRouter = require('./routes/test');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const userInfoUpdateRouter = require('./routes/userInfoUpdate');
const checkDuplicateRouter=require('./routes/checkDuplicate');
const boardRouter=require('./routes/board');

// 라우트 모듈들을 사용합니다.
app.use('/api/test', testRouter);
app.use('/api/register', registerRouter); 
app.use('/api/login', loginRouter);
app.use('/api/userupdate', userInfoUpdateRouter);
app.use('/api/checkDuplicate',checkDuplicateRouter);
app.use('/api/board',boardRouter);

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '내부 서버 오류' });
});

// 데이터베이스 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ' + err.message);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});

// JSON 파싱을 위한 미들웨어 등록
app.use(bodyParser.json());

const PORT = process.env.PORT || 3301;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
