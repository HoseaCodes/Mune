const truncateAfterFirstSentence = (paragraph: string) => {
  const sentences = paragraph.split(
    /(?<=[.!?])\s+|<br\s*\/?>/i
  );
  return sentences[0];
};

export default truncateAfterFirstSentence;
