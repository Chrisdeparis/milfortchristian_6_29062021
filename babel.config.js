


module.exports = function() {
  return {
    presets: ['@babel/preset-react'],
    env: {
      production: {
        plugins: [["inline-dotenv",{
          path: '.env'
        }]]
      },
      development: {
        plugins: [["inline-dotenv",{
          path: '.env'
        }]]
      }
    }
  };
};