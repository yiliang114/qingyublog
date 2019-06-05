const isProduct = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProduct ? 'qingyu' : ''
};