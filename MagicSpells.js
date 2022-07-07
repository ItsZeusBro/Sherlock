const BETWEEN_1_PCT_AND_100_PCT = "/ (?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?% /g";
const ANYTHING_OVER_100_PCT_EX = "/ (?![1-9][0-9]%)(?!100%)((\b[1][0-9][1-9]%(\b))|(\b[1-9][0-9][0-9]*%)) /g";
const ANYTHING_UNDER_0_IN = "/ \b0\.[0-9]*\b /g";
const ANYTHING_UNDER_0_EX = "/ (?!\b0.[0][0]*\b)(\b0\.[0-9]*\b) /g";
const ANYTHING_UNDER_0_EX_TRUNC = "\b(0\.[0-9]*)(?!0*\b)[0-9]\b"
const ANYTHING_SCIENTIFIC="\b((0\.[0-9]*)|([1-9]*\.[0-9]*))(?!0*\b)[0-9]e(\+|-|)[1-9][0-9]*\b"
exports = {
    BETWEEN_1_PCT_AND_100_PCT, 
    ANYTHING_OVER_100_PCT_EX, 
    ANYTHING_UNDER_0_IN, 
    ANYTHING_UNDER_0_EX, 
    ANYTHING_UNDER_0_EX_TRUNC,
    ANYTHING_SCIENTIFIC
}