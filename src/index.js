import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import { AuthContextProvider } from './context/AuthContext';

const root = createRoot(document.querySelector('#root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
)