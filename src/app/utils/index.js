
export function truncateText(word, length) {
    return word.length < length? word : `${word.substring(0, length)}...`;
}