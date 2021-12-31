const isDev = process.env.NODE_ENV === 'development' ? true : false;

export const url = isDev ? 'http://localhost:3000/api' : 'https://somepath.com';
