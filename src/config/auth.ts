const authConfig = {
  jwt: {
    expiresIn: '30m',
    secret: `${process.env.SECRET}`,
  },
  config_path: `${__dirname}`,
};

export { authConfig };
