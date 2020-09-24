import Token from "../Token";

// This table lists tokens that should be replaced by other tokens before parsing.
// The key has format "{token type}:{token value}"

/**
 * Replaces a token according to a set of replacement rules. This simplifies parsing and makes LaTeX work better.
 * @param token
 * @returns {*}
 */
export default function replaceToken(token) {
  switch (token.type) {
      case Token.TYPE_COMMAND:
          switch (token.name) {
              case 'pi':
                  return new Token(Token.TYPE_NUMBER, Math.PI);
              case 'e':
                  return new Token(Token.TYPE_NUMBER, Math.E);
              default:
                  return token;
          }
      case Token.TYPE_SYMBOL:
          switch (token.value) {
              case 'pi':
                  return new Token(Token.TYPE_NUMBER, Math.PI);
              case 'e':
                  return new Token(Token.TYPE_NUMBER, Math.E);
              default:
                  return token;
          }
      default:
          return token;
  }
};