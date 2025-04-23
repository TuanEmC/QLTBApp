// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFGz9osgFH_Lt9rPGexD3o8imxAeFZgdw",
  authDomain: "qltbapp.firebaseapp.com",
  databaseURL: "https://qltbapp-default-rtdb.firebaseio.com",
  projectId: "qltbapp",
  storageBucket: "qltbapp.firebasestorage.app",
  messagingSenderId: "216834475114",
  appId: "1:216834475114:web:430ce8aca90db443577613",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Lấy đối tượng Database
const database = getDatabase(app);

// Xuất ra để dùng
export { database };
