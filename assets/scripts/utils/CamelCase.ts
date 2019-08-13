export default (str: string) => `${str.charAt(0).toLowerCase()}${str.replace(/W+/g, '|')
    .split('|')
    .map((part: string) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')
    .slice(1)}`;
