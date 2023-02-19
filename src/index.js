import ReactDOM from 'react-dom/client';
// 제일 먼저 실행되는 파일

import './index.css';
import App from './App'; // 첫번째 컴포넌트(메인)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // index.html에 있는 id="root"내부에 App.js파일이 들어가있음
