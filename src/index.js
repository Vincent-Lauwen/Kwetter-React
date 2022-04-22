import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const queryClient = new QueryClient();

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#E71234',
    },
    secondary: {
      main: '#75B4BC',
    },
  },
});

ReactDOM.render(
<React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={themeOptions}>
                <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                    <App />
                </SnackbarProvider> 
            </ThemeProvider>  
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
