const natural = require("natural");

// Sentiment analysis using the natural npm package.
const analyzer = new natural.SentimentAnalyzer(
  "English",
  natural.PorterStemmer,
  "afinn"
);

function analyzeSentiment(text) {
  const tokens = new natural.WordTokenizer().tokenize(text);
  const score = analyzer.getSentiment(tokens);

  return {
    score,
    sentiment: score > 0 ? "positive" : score < 0 ? "negative" : "neutral"
  };
}

module.exports = { analyzeSentiment };
