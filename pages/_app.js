import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/reset.css';
import 'styles/global.css';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
