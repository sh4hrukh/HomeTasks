function createSecretHolder(secret) {
  let object = {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
  return object;
}
